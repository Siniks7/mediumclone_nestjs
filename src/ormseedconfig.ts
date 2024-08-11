import ormconfig from '@app/ormconfig';
import { SeedDb1613122798443 } from './seeds/1613122798443-SeedDb';

const ormseedconfig = {
  ...ormconfig,
  migrations: [SeedDb1613122798443],
  cli: {
    migrationsDir: 'src/seeds'
  }
};

export default ormseedconfig;
