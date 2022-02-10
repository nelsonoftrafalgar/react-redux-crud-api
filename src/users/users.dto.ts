import { PickType } from '@nestjs/swagger'

export class User {
  id: string
  created_at: string
  updated_at: string
  name: string
  username: string
  email: string
  city: string
}

export class UserDTO extends PickType(User, ['id', 'name', 'username', 'city', 'email']) {}
export class NewUserDTO extends PickType(User, ['name', 'username', 'city', 'email']) {}
