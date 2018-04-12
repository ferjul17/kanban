"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const pg_1 = require("pg");
const pool = new pg_1.Pool();
pool.query('SELECT * from workspace', (err, res) => {
    console.log(err, res);
    pool.end();
});
const app = new Koa();
app.use(ctx => {
    ctx.body = 'Hello Yoco';
    console.log('qwe');
});
app.listen(3000);
