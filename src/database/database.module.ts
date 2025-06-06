import { Global, Module } from '@nestjs/common';
import dbConnection from './connection';

@Global()
@Module({
  imports: [],
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useValue: dbConnection,
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}
