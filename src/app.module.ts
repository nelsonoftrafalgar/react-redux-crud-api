import { ConfigModule } from '@nestjs/config'
import { KnexModule } from 'nestjs-knex'
import { Module } from '@nestjs/common'
import { UsersModule } from 'users/users.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: `${process.cwd()}/env/${process.env.NODE_ENV}.env` }),
    KnexModule.forRoot({
      config: {
        client: 'pg',
        connection: {
          host: process.env.DB_HOST,
          port: +process.env.DB_PORT,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
          ssl: { rejectUnauthorized: false },
        },
      },
    }),
    UsersModule,
  ],
})
export class AppModule {}
