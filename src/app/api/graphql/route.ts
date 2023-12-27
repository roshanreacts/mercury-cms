import { startServerAndCreateNextHandler } from "@as-integrations/next";
import mercury from "@mercury-js/core";
import redisCache from "@mercury-js/core/packages/redisCache";
import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { applyMiddleware } from "graphql-middleware";
import { isEmpty } from "lodash";
import "./models";
import "./profiles";
import "./hooks";
import "../../../plugins";
import typeDefs from "./schema";
import resolvers from "./Search.Resolvers";

mercury.connect(process.env.DB_URL || "mongodb://localhost:27017/mercury");

mercury.package([redisCache()]);

mercury.addGraphqlSchema(
  typeDefs,
  resolvers
);

const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs: mercury.typeDefs,
    resolvers: mercury.resolvers
  })
);

const composePopulateQuery = (fields: any, deep: number, max: number): any => {
  deep++;
  console.log("deep", deep);
  if (deep >= max) {
    return [];
  }
  return Object.keys(fields)
    .map((key) => {
      if (!isEmpty(fields[key])) {
        return {
          path: key,
          select: Object.keys(fields[key]),
          populate: composePopulateQuery(fields[key], deep, max),
        };
      }
    })
    .filter((item) => item != null);
};




var corsOptions = {
  origin: "*",
  credentials: true,
};

const server = new ApolloServer({
  schema
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({
    ...req,
    user: {
      id: "1",
      profile: "ADMIN",
    },
  }),
});


export async function GET(request: any) {
  return handler(request);
}

export async function POST(request: any) {
  return handler(request);
}
