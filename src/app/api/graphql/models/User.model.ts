import mercury from "@mercury-js/core";

export const User = mercury.createModel(
  "User",
  {
    name: {
      type: "string",
    },
    email: {
      type: "string",
    },
    password: {
      type: "string",
      bcrypt: true
    },
    roleType: {
      type: "enum",
      enum: ["admin", "user"],
      enumType: "string",
    },
  },
  {}
);
