import express from 'express';
import path from 'path';
import services from './services';

const root = path.join(__dirname, '../../');
const app = express();

services.graphql.applyMiddleware({ app });

app.get('/', (req, res) => {
  res.sendFile(path.join(root, 'dist/client/index.html'));
});
app.listen(8000, () => console.log('Listening on port 8000!'));


