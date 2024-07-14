import { ConnectionOptions } from 'typeorm';
import { CreateTags1720936120572 } from './migrations/1720936120572-CreateTags';

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
  migrations: [CreateTags1720936120572],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default config;
