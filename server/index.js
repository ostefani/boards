import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/data';
import schema from './graphql/schema';
import root from './graphql/resolvers';

dotenv.config();

const server = express();
const PORT = process.env.PORT || 3001;
const DB = process.env.DB_URL;
const ORIGIN = process.env.NODE_ENV !== 'production' ? ['http://0.0.0.0:3000','http://0.0.0.0:3000/signup'] : process.env.FRONT;

if (process.env.NODE_ENV !== 'production') {
    console.log('development');
}
else console.log('production');

server.use(
    bodyParser.json(),
);
server.use(cors({
    origin: ORIGIN,
}));
server.use(express.static('server/dist/src'));
server.use('/routes', router);
server.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));
/*server.use('/graphql', function (req, res) {
    console.log('reqest: ', req.body);
  })*/


mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to db'))
    .catch(e => console.log(e.message));

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
