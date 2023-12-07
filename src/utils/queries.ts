export const GET_ALL_PAGES = `query ListPages {
  listPages {
    docs {
      id
      name
      slug
      path
      metaDescription
      status
      pageJson
      metaTitle
      version
      createdOn
      updatedOn
    }
  }
}`