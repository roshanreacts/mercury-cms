import mercury from "@mercury-js/core";

export const User = mercury.createModel(
  "User",
  {
    name: {
      type: "string",
    },
    account: {
      type: "relationship",
      ref: "Account",
    },
    test: {
      type: "string",
      default: "default",
    },
    testv: {
      type: "virtual",
      ref: "Account",
      localField: "account",
      foreignField: "_id",
      many: false,
    },
    roleType: {
      type: "enum",
      enum: ["admin", "user"],
      enumType: "string",
    },
  },
  {}
);
