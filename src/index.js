import {GraphQLServer} from 'graphql-yoga'
import {typeDefs} from './graphql/typeDefs.js'
import {resolvers} from './graphql/resolvers.js' 

const server = new GraphQLServer({
    typeDefs, 
    resolvers 
});



server.start({port: 4000},({port})=>{
    console.log("Server running in port", port)
});