import pgPromise from 'pg-promise';
import 'dotenv/config';

const pgp = pgPromise();

export const db = pgp(process.env['POSTGRES']!);
