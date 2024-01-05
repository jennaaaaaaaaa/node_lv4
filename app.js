import express from 'express';
import menuRouter from './src/routes/menu.router.js';
import categoryRouter from './src/routes/category.router.js';
import errorHandlingMiddleware from './src/middlewares/error.handling.middleware.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', [categoryRouter, menuRouter]);
app.use(errorHandlingMiddleware); // 미들웨어를 적용 시키기 위해 추가한 부분 !

app.listen(port, () => {
   console.log(port, '서버열림');
});
