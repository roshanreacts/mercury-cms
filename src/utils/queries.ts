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


export const CREATE_PAGE = `
mutation CreatePage($input: PageInput!) {
  createPage(input: $input) {
    id
  }
}`

export const GET_PAGE = `
query GetPage($where: wherePageInput!) {
  getPage(where: $where) {
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
}`


export const UPDATE_PAGE = `mutation UpdatePage($input: updatePageInput!) {
  updatePage(input: $input) {
    id
  }
}`


export const DELETE_PAGE = `mutation DeletePage($deletePageId: ID!) {
  deletePage(id: $deletePageId)
}`