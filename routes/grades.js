import express from 'express';
import { promises as fs } from 'fs';

const router = express.Router();

router.post("/create", async (req, res, next) => {
    try {
        let newGrade = req.body;
        const dataJSON = JSON.parse(await fs.readFile(global.fileName));
        
        newGrade = { id: dataJSON.nextId++, ...newGrade, timestamp: new Date() };
        dataJSON.grades.push(newGrade);

        await fs.writeFile(global.fileName, JSON.stringify(dataJSON, null, 2));

        res.send(newGrade);
    } catch (error) {
        next(error);
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const dataJSON = JSON.parse(await fs.readFile(global.fileName));
        const selectedGrades = dataJSON.grades.find(grade => grade.id === Number(id));

        delete dataJSON.nextId;

        res.send(selectedGrades);
    } catch (error) {
        next(error);
    }
})

router.get("/totalGrade/:student/:subject", async (req, res, next) => {
    try {
        const { student, subject } = req.params;
        const dataJSON = JSON.parse(await fs.readFile(global.fileName));
        const totalGrade = dataJSON.grades.reduce((sumGrade, grade) => {
            if (grade.student === student && grade.subject === subject) {
                sumGrade += grade.value;
            }
            return sumGrade;
        }, 0);

        res.send(`The sum of ${student} in ${subject} is: ${totalGrade}`);
    } catch (error) {
        next(error);
    }
})

router.get("/meanGrade/:subject/:type", async (req, res, next) => {
    try {
        const { subject, type } = req.params;
        const dataJSON = JSON.parse(await fs.readFile(global.fileName));
        const filterGrades = dataJSON.grades.filter(grade => grade.subject === subject && grade.type === type);
        const totalGrade = filterGrades.reduce((a, b) => a + b.value, 0);
        const meanGrade = (totalGrade / filter.length) || null

        res.send(`The mean value of ${subject} in ${type} is: ${meanGrade}`);
    } catch (error) {
        next(error);
    }
})

router.get("/betterGrades/:subject/:type", async (req, res, next) => {
    try {
        const { subject, type } = req.params;
        const dataJSON = JSON.parse(await fs.readFile(global.fileName));
        const filterGrades = dataJSON.grades.filter(grade => grade.subject === subject && grade.type === type);
        const sortedGrade = filterGrades.sort((a, b) => a.value > b.value ? -1 : 1);
        const betterThree = sortedGrade.slice(0, 3);

        res.send(betterThree);
    } catch (error) {
        next(error);
    }
})

router.delete("/delete/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const dataJSON = JSON.parse(await fs.readFile(global.fileName));
        dataJSON.grades = dataJSON.grades.filter(grade => grade.id !== Number(id));

        await fs.writeFile(global.fileName, JSON.stringify(dataJSON, null, 2));

        res.end();
    } catch (error) {
        next(error);
    }
})

router.patch("/updateGrade/:id", async (req, res, next) => {
    try {
        const newGrade = req.body;
        const id = req.params.id;
        const dataJSON = JSON.parse(await fs.readFile(global.fileName));
        const indexGrade = dataJSON.grades.findIndex(grade => grade.id === Number(id))

        if (indexGrade > -1) {
            dataJSON.grades[indexGrade].student = newGrade.student;
            dataJSON.grades[indexGrade].subject = newGrade.subject;
            dataJSON.grades[indexGrade].type = newGrade.type;
            dataJSON.grades[indexGrade].value = newGrade.value;

            await fs.writeFile(global.fileName, JSON.stringify(dataJSON, null, 2));
        
            res.send(dataJSON.grades[indexGrade]);
        } else {
            throw new Error('This id does not exist!');
        }
    } catch (error) {
        next(error);
    }
})

router.use((error, req, res, next) => {
    console.log(error);
    res.status(400).send({ error: error.message});
});

export default router;