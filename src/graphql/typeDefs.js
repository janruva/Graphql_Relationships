export const typeDefs =  `
    type Query {
        ping: String!
        books: [Book!]!
        authors: [Author!]!
        users: [User!]!
    }
    type Book{
        id: ID!
        title: String!
        author: Author!
        users: [User!]!
    }
    type Author {
        id: ID!
        name: String!
        books: [Book!]!
    }
    type User{
        id:ID!
        name: String!
        book: Book!
    }
`;