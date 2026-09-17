import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { routes } from './route.js';

const app = express();

const clientHost = process.env['CLIENT_HOST'] || 'http://localhost:4200';

app.use(express.json());

app.use(cors({ origin: [clientHost], credentials: true }));

app.use(routes);

app.listen(process.env['PORT']!, () => {
	console.log(`Server is running on port ${process.env['PORT']!}`);
});
