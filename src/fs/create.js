import { writeFile, access } from 'node:fs/promises';
import path from 'node:path';

import { ERROR, __dirname } from "./constants.js";

const create = async () => {
    const newFilePath = path.resolve(__dirname, 'files', 'fresh.txt');
    const data = 'I am fresh and young';

    const _isExist = await access(newFilePath).then(() => true, () => false);

    if (_isExist) {
        throw new Error(ERROR);
    }

    await writeFile(newFilePath, data);

};

await create();