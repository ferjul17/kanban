import * as Koa from "koa";
import {Pool, QueryResult} from "pg";

const pool = new Pool();

pool.query('SELECT * from workspace', (err: Error, res: QueryResult) => {
    console.log(err, res);
    pool.end();
});


const app = new Koa();
app.use(ctx => {
    ctx.body = 'Hello Yoco';
    console.log('qwe');
});

app.listen(3000);