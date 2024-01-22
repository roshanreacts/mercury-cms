import mercury from "@mercury-js/core";

export const Blog = mercury.createModel(
    "Blog",
    {
        heading: {
            type: "string",
            required: true
        },
        thumbnail: {
            type: "string"
        },
        description: {
            type: "string"
        },
        content: {
            type: "string"
        },
        author: {
            type: "relationship",
            ref: "User"
        },
        slug: {
            type: "string",
            unique: true
        },
        metaTitle: {
            type: "string"
        },
        metaDescription: {
            type: "string"
        }
    },
    {}
)