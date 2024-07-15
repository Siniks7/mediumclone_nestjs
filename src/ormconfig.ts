import { ConnectionOptions } from 'typeorm';
import { CreateTags1720936120572 } from './migrations/1720936120572-CreateTags';
import { CreateUser1721053657921 } from './migrations/1721053657921-CreateUser';

// __dirname + '/migrations/**/*{.ts,.js}
const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mediumclone',
  password: '434543',
  database: 'mediumclone',
  entities: ['./**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [CreateTags1720936120572, CreateUser1721053657921],
  cli: {
    migrationsDir: 'src/migrations'
  }
};

export default config;