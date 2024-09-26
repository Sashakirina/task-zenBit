import sequelize from './db/config.js';
import { setupServer } from './server.js';

const bootstrap = async () => {
  await sequelize
    .authenticate()
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Error: ' + err));

  sequelize.sync();
  setupServer();
};

bootstrap();
