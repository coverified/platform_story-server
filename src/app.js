import express from 'express';
import {ApolloClient, InMemoryCache, HttpLink, gql} from '@apollo/client';
import fetch from 'cross-fetch';
import {body, page} from './template';

const app = express();
const port = process.env.PORT ? process.env.PORT : 3000;
const api = process.env.API ? process.env.API : `https://gql.coverified.info/admin/api`;

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: api,
        fetch,
    }),
});

app.get('/entry/:id', (req, res) => {
    const id = req.params.id;

    client
        .query({
            query: gql`{
                Entry(
                    where: {
                        id: "${id}"
                    } 
                ) {
                    title,
                    image,
                    content,
                    url,
                    id,
                }
            }`
        })
        .then(result => {
            const {title, content, image, url, id} = result.data.Entry;

            res.send(body(page(title, content, image, url, id), title));
        })
        .catch(console.error);
});

app.get('/tag/:id', (req, res) => {
    const id = req.params.id;

    client
        .query({
            query: gql`{
                allEntries(
                    where: {
                        tags_some: {
                            id: "${id}"
                        } 
                    } 
                ) {
                    title,
                    image,
                    content,
                    url,
                    id,
                }
            }`
        })
        .then(result => {
            let pages = '';

            [...result.data.allEntries].forEach(entry => {
                const {title, content, image, url, id} = entry;

                pages += page(title, content, image, url, id);
            });

            res.send(body(pages));
        })
        .catch(console.error);
});


app.get('/', (req, res) => {
    res.send(`1337`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
