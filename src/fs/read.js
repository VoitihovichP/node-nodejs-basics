import {access, readFile} from 'node:fs/promises';
import path from 'node:path';
import {__dirname, ERROR} from "./constants.js";

const read = async () => {
    const readFilePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

    try {
        await access(readFilePath);

        const readingData = await  readFile(readFilePath, { encoding: 'utf8' });
        console.log(readingData);
    } catch {
        throw new Error(ERROR);
    }
};

await read();