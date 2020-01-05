import express from 'express';
import graphqlHTTP from 'express-graphql';
import router from './routes/data';
import schema from './graphql/schema';
import root from './graphql/resolvers';

const server = express();
const PORT = process.env.PORT || 3001;


if (process.env.NODE_ENV !== 'production') {
    console.log('development');
}
else console.log('production');

server.use(express.static('dist/src'));
// server.get('/', (req, res) => res.send('Hello Express'));
server.use('/routes', router);
server.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
