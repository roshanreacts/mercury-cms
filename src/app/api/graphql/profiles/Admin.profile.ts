import mercury from "@mercury-js/core";

const rules = [
  {
    modelName: "User",
    access: {
      create: true,
      read: true,
      update: true,
      delete: true,
    },
  },
  {
    modelName: "Page",
    access: {
      create: true,
      read: true,
      update: true,
      delete: true,
    },
    // fieldLevelAccess: true,
    // fields: {
    //   name: {
    //     read: false,
    //   },
    // },
  },
];

export const AdminProfile = mercury.access.createProfile("ADMIN", rules);
