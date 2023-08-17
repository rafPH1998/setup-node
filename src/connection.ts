import "reflect-metadata"
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 4022,
  username: "root",
  password: "root",
  database: "ts_node",
  synchronize: true,
  logging: true,
  entities: [
    __dirname + '/**/*.entity.ts'
  ],
  subscribers: [],
  migrations: [],
})

AppDataSource.initialize()
            .then(() => console.log('Conectou com sucesso'))
            .catch((error) => console.log(error))

export default AppDataSource
