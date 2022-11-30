import path from 'node:path';
import { unlink } from 'node:fs/promises';

import { ERROR, __dirname } from "./constants.js";

const remove = async () => {
    const pathToRemoveFile = path.resolve(__dirname, 'files', 'fileToRemove.txt');

    try {
        await unlink(pathToRemoveFile);
    } catch {
        throw new Error(ERROR);
    }
};

await remove();