import mercury from "@mercury-js/core";

export const Page = mercury.createModel(
    "Page",
    {
        name: {
            type: "string",
            required: true
        },
        slug: {
            type: "string",
            required: true,
            unique: true
        },
        path: {
            type: "string",
            required: true
        },
        metaDescription: {
            type: "string"
        },
        status: {
            type: "enum",
            enumType: "string",
            enum: ["Draft", "Active"],
            default: "Draft"
        },
        author: {
            type: "relationship",
            ref: "User",
            many: false,
            required: true
        },
        pageJson: {
            type: "string"
        },
        metaTitle: {
            type: "string"
        },
        version: {
            type: "string"
        },
    },
    {}
);
