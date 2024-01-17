export const GET_ALL_PAGES = `query ListPages {
  listPages {
    docs {
      id
      name
      slug
      path
      metaDescription
      status
      content
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
    content
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

export const GET_PAGE_CONTENT = `query GetPage($where: wherePageInput!) {
  getPage(where: $where) {
    id
    content
  }
}`


export const SAVE_PAGE_CONTENT = `mutation UpdatePage($input: updatePageInput!) {
  updatePage(input: $input) {
    id
    content
  }
}`


export const LOGIN = `
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    message
    token
    name
    email
    role
    id
  }
}`


export const GET_PAGE_METADATA = `
query GetPage($where: wherePageInput!) {
  getPage(where: $where) {
    id
    name
    metaDescription
    metaTitle
  }
}`

export const CREATE_BLOG = `
mutation Mutation($input: BlogInput!) {
  createBlog(input: $input) {
    id
  }
}
`

export const GET_ALL_BLOGS =`
query Query {
  listBlogs {
    docs {
      id
      heading
      thumbnail
      description
      content
      slug
      createdOn
      updatedOn
    }
  }
}`


export const GET_BLOG = `
query GetBlog($where: whereBlogInput!) {
  getBlog(where: $where) {
    id
    heading
    thumbnail
    description
    content
    slug
    createdOn
    updatedOn
  }
}`

export const UPDATE_BLOG = `mutation Mutation($input: updateBlogInput!) {
  updateBlog(input: $input) {
    id
  }
}`

export const DELETE_BLOG = `mutation Mutation($deleteBlogId: ID!) {
  deleteBlog(id: $deleteBlogId)
}`