import express from 'express';
import gradesRouter from './routes/grades.js'
import { promises as fs } from 'fs';

const app = express();

global.fileName = './data/grades.json';

app.use(express.json());
app.use('/grade', gradesRouter);

app.listen(3031, async () => {
    try {
        await fs.readFile(global.fileName);
        console.log('API started');
    } catch(error) {
        const initialJSON = {
            nextId: 1,
            grades: []
        };
        fs.writeFile(global.fileName, JSON.stringify(initialJSON))
            .then(() => {
                console.log('API started and file created!');
            })
            .catch((error) => {
                console.log(error);
            });
    }
});
