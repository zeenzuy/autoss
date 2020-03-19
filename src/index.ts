import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { CarResolver } from "./resolvers/CarResolver";

async function main() {
  await createConnection();
  const schema = await buildSchema({ resolvers: [CarResolver] });
  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log("Servidor Iniciado!");
}
main();

