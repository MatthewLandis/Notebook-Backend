import 'dotenv/config';
import { db } from './db.js';
import { INote } from './model.js';

export async function getNote() {
    const note = await db.one<INote>(
        `SELECT * FROM notes ORDER BY RANDOM() LIMIT 1;`);
    console.log("Service hit");
    return note;
};

export async function postNote(note: INote) {
    await db.none(
        `INSERT INTO notes (author, text) VALUES (
            $1, --author
            $2 --text
        )`
        ,
        [note.author, note.text]);
    return;
};