import express from 'express';
import winston from 'winston';
import cors from 'cors';
import gradesRouter from './routes/grades.js';
import { promises as fs } from 'fs';

const app = express();
const { combine, timestamp, label, printf } = winston.format;
const formatter = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

global.fileName = './data/grades.json';
global.logger = winston.createLogger({
    level: 'silly',
    format: combine(
        label({ label: 'grade-control.log'}),
        timestamp(),
        formatter
    ),
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'grades-control.log' }),
    ]
});

app.use(express.json());
app.use(cors());
app.use('/grade', gradesRouter);

app.listen(3031, async () => {
    try {
        await fs.readFile(fileName);

        logger.info('API started');
    } catch(error) {
        const initialJSON = {
            nextId: 1,
            grades: []
        };
        fs.writeFile(fileName, JSON.stringify(initialJSON))
            .then(() => {
                logger.info('API started and file created!');
            })
            .catch((error) => {
                logger.error(error);
            });
    }
});
