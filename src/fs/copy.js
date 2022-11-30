import { cp, readdir } from 'node:fs/promises';
import path from 'node:path';

import { ERROR, __dirname } from "./constants.js";

const copy = async () => {
    const srcPath = path.resolve(__dirname, 'files');
    const distPath = path.resolve(__dirname, 'files_copy');

    const filesList = await readdir(path.resolve(__dirname));

    if (filesList.includes('files_copy')) {
        throw new Error(ERROR);
    }

    try {
        await cp(srcPath, distPath, {
            force: false,
            errorOnExist: true,
            recursive: true,
        });
    } catch {
        throw new Error(ERROR);
    }
};

copy();