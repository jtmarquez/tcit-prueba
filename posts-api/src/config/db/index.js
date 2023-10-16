import { Sequelize } from 'sequelize';
import models from '../entities';

const databaseUrl = process.env.SEQUELIZE_URL;
const sequelizeOptions = {
    dialect: 'postgres',
    models,
}
const sequelize = new Sequelize(databaseUrl, sequelizeOptions);

export default sequelize;