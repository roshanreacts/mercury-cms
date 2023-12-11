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
            enum: ["DRAFT", "ACTIVE"],
            default: "DRAFT"
        },
        author: {
            type: "relationship",
            ref: "User",
            many: false,
            required: true
        },
        content: {
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
