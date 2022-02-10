import { ConflictException, Injectable } from '@nestjs/common'
import { Knex } from 'knex'
import { InjectKnex } from 'nestjs-knex'
import { NewUserDTO, User, UserDTO } from './users.dto'

@Injectable()
export class UsersService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async getUsers() {
    return this.knex.select('*').from('users')
  }

  async createUser(data: NewUserDTO): Promise<User[]> {
    await this.preventDuplicates(data)
    const [{ max: lastId }] = await this.knex('users').max('id')
    return await this.knex('users').insert(
      {
        id: lastId + 1,
        created_at: this.knex.fn.now(),
        updated_at: this.knex.fn.now(),
        name: data.name,
        username: data.username,
        city: data.city,
        email: data.email,
      },
      '*'
    )
  }

  async updateUser(data: UserDTO) {
    await this.preventDuplicates(data)
    return await this.knex('users')
      .where('id', data.id)
      .update({
        updated_at: this.knex.fn.now(),
        name: data.name,
        username: data.username,
        city: data.city,
        email: data.email,
      })
      .returning('*')
  }

  async deleteUser(id: string) {
    return await this.knex('users').where('users.id', id).del()
  }

  async preventDuplicates(data: NewUserDTO | UserDTO) {
    const duplicates = await this.knex.select('*').from('users').where({
      name: data.name,
      username: data.username,
      city: data.city,
      email: data.email,
    })

    if (duplicates.length > 0) {
      throw new ConflictException()
    }
  }
}
