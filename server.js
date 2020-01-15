const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler();
const server = new Koa();
const router = new Router();

app.prepare().then(() => {
	
	// router.get('/about/:id', async (ctx) => {
	// 	const getId = ctx.params.id;
	// 	await handle(ctx.req, ctx.res, {
	// 		pathname: '/about',
	// 		query: {
	// 			id: getId,
	// 		}
	// 	});
	// 	ctx.respond = false;
	// });

	server.use(router.routes());

	server.use(async (ctx, next) => {
		await handle(ctx.req, ctx.res);
		ctx.respond = false; // 不使用 Koa 内置的 response 处理方法
	});
	server.use(async (ctx, next) => {
		ctx.res.statusCode = 200
		await next()
	})
	server.listen(9000, () => {
		console.log('server start listening 9000');
	});
});
