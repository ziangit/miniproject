const { gql } = require('apollo-server-express');
const { connectDB } = require('./db'); 

// Use name for searching, use lat and lng for google map highlighting 
const typeDefs = gql`
    type State {
        name: String
        lat: Float
        lng: Float
    }

    type Query {
        states(name: String): [State]
        state(name: String!): State
    }
`;

const resolvers = {
    Query: {
        states: async (_, { name }) => {
            const db = await connectDB();
            const collection = db.collection('states2'); // Use the updated collection name
            if (name) {
                return await collection.find({
                    name: { $regex: `^${name}`, $options: 'i' } // Case-insensitive search
                }).toArray();
            } else {
                return await collection.find().toArray();
            }
        },
        state: async (_, { name }) => {
            const db = await connectDB();
            const collection = db.collection('states2'); // Use the updated collection name
            return await collection.findOne({ name });
        },
    },
};

module.exports = { typeDefs, resolvers };



