import { books } from "../data/books"
import { authors } from "../data/authors"
import { users } from "../data/users"

export const resolvers = {
    Query: {
        ping() {
            return "pong"
        },
        books() {
            return books;
        },
        authors() {
            return authors;
        },
        users() {
            return users;
        }
    },
    Book: {
        author: ({ author }) => {
            return authors.find(a => {
                return a.id === author
            })
        },
        users: (parent) => {
            return users.filter(user =>{
                return user.book === parent.id
            })
        }
    },
    Author: {
        books(parent) {
            return books.filter(book => {
                return book.author === parent.id;
            })
        }
    },
    User: {
        book (parent) {
            return books.find(book =>{
                return book.id === parent.book
            })
        }
    }
}