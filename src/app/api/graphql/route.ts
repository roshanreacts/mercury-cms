import { startServerAndCreateNextHandler } from "@as-integrations/next";
import mercury from "@mercury-js/core";
import redisCache from "@mercury-js/core/packages/redisCache";
import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { applyMiddleware } from "graphql-middleware";
import { IResolvers } from "@graphql-tools/utils";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import { isEmpty } from "lodash";
import "./models";
import "./profiles";
import "./hooks";
import "../../../plugins";

mercury.connect(process.env.DB_URL || "mongodb://localhost:27017/mercury");

mercury.package([redisCache()]);

mercury.addGraphqlSchema(
  `
  type Query {
    hello: User
  }
`,
  {
    Query: {
      hello: (root: any, args: any, ctx: any, resolveInfo: any) => {
        const fields = graphqlFields(resolveInfo);
        const deep = 0;
        // compose mongoose populate query from graphql fields
        // console.log("Hello", fields);
        const requestedFields = composePopulateQuery(fields, deep, 4);
        const select = Object.keys(fields).map((key) => key);
        console.log("Hello", JSON.stringify(requestedFields, null, 2));
        return {};
      },
    },
  }
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

const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs: mercury.typeDefs,
    resolvers: mercury.resolvers as unknown as IResolvers<
      any,
      GraphQLResolveInfo
    >[],
  })
);

var corsOptions = {
  origin: "*",
  credentials: true,
};
// cors(corsOptions)

const server = new ApolloServer({
  schema,
  // cors: corsOptions
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({
    ...req,
    user: {
      id: "1",
      profile: "Admin",
    },
  }),
});

export const mercuryInstance = mercury;

export async function GET(request: any) {
  return handler(request);
}

export async function POST(request: any) {
  return handler(request);
}
