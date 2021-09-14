const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input bookSave {
        authors: []
        description: String
        title: String
        bookId: String
        image: String
        link: String
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks : [Book]
    }

    type Book {
        bookId: String
        authors: []
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: bookSave): User
        removeBook(bookId: String!): User
    }
`;

module.exports = typeDefs;