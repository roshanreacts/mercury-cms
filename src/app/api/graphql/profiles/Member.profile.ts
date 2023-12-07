import mercury from "@mercury-js/core";

const rules = [
  {
    modelName: "User",
    access: {
      create: false,
      read: true,
      update: false,
      delete: false,
    },
  },
  {
    modelName: "Page",
    access: {
      create: false,
      read: true,
      update: false,
      delete: false,
    },
  },
];

export const UserProfile = mercury.access.createProfile("MEMBER", rules);
