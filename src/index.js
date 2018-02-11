import {graphql} from 'graphql';
import schema from './schema/index';

const query = `{
    posts {
        title
    }
}`

graphql(schema, query).then(response => {
    console.log(JSON.stringify(response, null, 2));
}).catch(err => {
    console.log(err);
});