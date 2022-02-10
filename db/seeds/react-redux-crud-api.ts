import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  await knex('users').del()
  await knex('users').insert([
    {
      id: '1',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
      name: 'Sam Cutler',
      username: 'Bret',
      city: 'Gwenborough',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: '2',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
      name: 'Mal Evans',
      username: 'Antonette',
      city: 'Wisokyburgh',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: '3',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
      name: 'Richard Cole',
      username: 'Samantha',
      city: 'McKenziehaven',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: '4',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
      name: 'Albert Chapman',
      username: 'Karianne',
      city: 'South Elvis',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: '5',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
      name: 'Colin Hart',
      username: 'Kamren',
      city: 'Roscoeview',
      email: 'Padberg@biz.com',
    },
  ])
}
