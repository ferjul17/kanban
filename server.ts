import * as Koa from "koa";

const app = new Koa();
app.use(ctx => {
    ctx.body = 'Hello Yoco';
    console.log('qwe');
});

app.listen(3000);