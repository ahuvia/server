module.exports = {
  type: 'postgres',
  host: process.env.PG_HOST || 'localhost',
  port: process.env.PG_PORT || 5432,
  username: process.env.PG_USER || 'postgres',
  password: process.env.PG_PASSWORD || 'your-password',
  database: process.env.PG_DATABASE || 'mydatabase',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
