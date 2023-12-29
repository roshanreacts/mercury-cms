import mercury from "@mercury-js/core";
import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";

export default {
  Query: {
    hello: () => {
      return "Hello"
    }
  },
  Mutation: {
    login: async (root:any, { email, password }: {email: string, password: string}, ctx: any) => {
      try {
        const user = await mercury.db.User.get(
          { email: email },
          { id: "1", profile: "ADMIN" },
          {}
        );
        if (!user) {
          throw new GraphQLError("User Doesn't Exists");
        }

        const passwordCompare = await user.verifyPassword(password);

        if (!passwordCompare)
          throw new GraphQLError("Please Check Password Entered!!");
        const token = jwt.sign(
          { id: user.id, email: user.email, role: user.role },
          process.env.JWT_SECRET ? process.env.JWT_SECRET : "",
          { expiresIn: process.env.JWT_EXP }
        );

        return {
          message: "Login Success",
          token,
          name: user.name,
          email: user.email,
          role: user.role,
          id: user.id,
        };
      } catch (error: any) {
        throw new GraphQLError("Login Failed, Please Check Credentials");
      }
    },
  },
};
