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
    pages: {
      type: "virtual",
      ref: "Page",
      many: true,
      localField: "_id",
      foreignField: "author"
    },
    role: {
      type: "enum",
      enum: ["ADMIN", "MEMBER", "ANONYMOUS"],
      enumType: "string",
    }
  },
  {}
);
