import path from 'node:path';
import { readdir } from 'node:fs/promises';

import { ERROR, __dirname } from "./constants.js";

const list = async () => {
    const pathToFolder = path.resolve(__dirname, 'files');

    try {
        const filesList = await readdir(pathToFolder);
        console.log(filesList.map((item) => item.split('.')[0]));
    } catch {
        throw new Error(ERROR);
    }
};

await list();