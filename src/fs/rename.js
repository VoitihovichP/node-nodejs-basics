import path from 'node:path';
import { access, rename as fsRename } from 'node:fs/promises';
import { __dirname, ERROR } from "./constants.js";

const rename = async () => {
     const oldPath = path.resolve(__dirname, 'files', 'wrongFilename.txt');
     const newPath = path.resolve(__dirname, 'files', 'properFilename.md');

     const _isExist = await access(newPath).then(() => true, () => false);

     if (_isExist) {
         throw new Error(ERROR);
     }

    try {
        await fsRename(oldPath, newPath);
    } catch {
        throw new Error(ERROR);
    }
};

await rename();