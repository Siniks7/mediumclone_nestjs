import { ConnectionOptions } from 'typeorm';
import { CreateTags1720936120572 } from './migrations/1720936120572-CreateTags';
import { CreateUser1721053657921 } from './migrations/1721053657921-CreateUser';
import { CreateArticles1721660789183 } from './migrations/1721660789183-CreateArticles';
import { AddRelationsBetweenArticleAndUser1721661461034 } from './migrations/1721661461034-AddRelationsBetweenArticleAndUser';
import { AddFavouretesRelationsBetweenArticleAndUser1723209616564 } from './migrations/1723209616564-AddFavouretesRelationsBetweenArticleAndUser';
import { CreateFollows1724307298720 } from './migrations/1724307298720-CreateFollows';

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
  migrations: [
    CreateTags1720936120572,
    CreateUser1721053657921,
    CreateArticles1721660789183,
    AddRelationsBetweenArticleAndUser1721661461034,
    AddFavouretesRelationsBetweenArticleAndUser1723209616564,
    CreateFollows1724307298720
  ],
  cli: {
    migrationsDir: 'src/migrations'
  }
};

export default config;
