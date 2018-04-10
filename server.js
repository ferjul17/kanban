"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const app = new Koa();
app.use(ctx => {
    ctx.body = 'Hello Yoco';
    console.log('qwe');
});
app.listen(3000);
