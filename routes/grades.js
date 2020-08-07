import express from 'express';
import { promises as fs } from 'fs';

const router = express.Router();

router.post("/create", async (req, res, next) => {
    try {
        let newGrade = req.body;
        const dataJSON = JSON.parse(await fs.readFile(fileName));
        
        newGrade = { id: dataJSON.nextId++, ...newGrade, timestamp: new Date() };
        dataJSON.grades.push(newGrade);

        await fs.writeFile(fileName, JSON.stringify(dataJSON, null, 2));

        res.send(newGrade);

        logger.info(`POST /grade/create - ${JSON.stringify(newGrade)}`);
    } catch (error) {
        next(error);
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const dataJSON = JSON.parse(await fs.readFile(fileName));
        const selectedGrades = dataJSON.grades.find(grade => grade.id === Number(id));

        delete dataJSON.nextId;

        res.send(selectedGrades);

        logger.info(`GET /grade/:id - ${id}`);
    } catch (error) {
        next(error);
    }
})

router.get("/totalGrade/:student/:subject", async (req, res, next) => {
    try {
        const { student, subject } = req.params;
        const dataJSON = JSON.parse(await fs.readFile(fileName));
        const totalGrade = dataJSON.grades.reduce((sumGrade, grade) => {
            if (grade.student === student && grade.subject === subject) {
                sumGrade += grade.value;
            }
            return sumGrade;
        }, 0);

        res.send(`The sum of ${student} in ${subject} is: ${totalGrade}`);

        logger.info(`GET /grade/totalGrade/:student/:subject - ${totalGrade}`);
    } catch (error) {
        next(error);
    }
})

router.get("/meanGrade/:subject/:type", async (req, res, next) => {
    try {
        const { subject, type } = req.params;
        const dataJSON = JSON.parse(await fs.readFile(fileName));
        const filterGrades = dataJSON.grades.filter(grade => grade.subject === subject && grade.type === type);
        const totalGrade = filterGrades.reduce((a, b) => a + b.value, 0);
        const meanGrade = (totalGrade / filterGrades.length) || null

        res.send(`The mean value of ${subject} in ${type} is: ${meanGrade}`);

        logger.info(`GET /grade/meanGrade/:subject/:type - ${meanGrade}`);
    } catch (error) {
        next(error);
    }
})

router.get("/betterGrades/:subject/:type", async (req, res, next) => {
    try {
        const { subject, type } = req.params;
        const dataJSON = JSON.parse(await fs.readFile(fileName));
        const filterGrades = dataJSON.grades.filter(grade => grade.subject === subject && grade.type === type);
        const sortedGrade = filterGrades.sort((a, b) => a.value > b.value ? -1 : 1);
        const betterThree = sortedGrade.slice(0, 3);

        res.send(betterThree);

        logger.info(`GET /grade/betterGrades/:subject/:type - ${betterGrades}`);
    } catch (error) {
        next(error);
    }
})

router.delete("/delete/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const dataJSON = JSON.parse(await fs.readFile(fileName));
        const userIndex = validateUserExists(dataJSON.grades, id)

        if (userIndex > -1) {
            dataJSON.grades = dataJSON.grades.filter(grade => grade.id !== Number(id));

            await fs.writeFile(fileName, JSON.stringify(dataJSON, null, 2));
    
            res.send('User deleted successfully!');

            logger.info(`DELETE /grade/delete/:id - ${id}`);
        } else {
            throw new Error('This id does not exist!');
        }
    } catch (error) {
        next(error);
    }
})

router.patch("/updateGrade/:id", async (req, res, next) => {
    try {
        const newGrade = req.body;
        const id = req.params.id;
        const dataJSON = JSON.parse(await fs.readFile(fileName));
        const userIndex = validateUserExists(dataJSON.grades, id)
        const updateGrade = dataJSON.grades[userIndex]

        if (updateGrade) {
            updateGrade.student = newGrade.student;
            updateGrade.subject = newGrade.subject;
            updateGrade.type = newGrade.type;
            updateGrade.value = newGrade.value;

            await fs.writeFile(fileName, JSON.stringify(dataJSON, null, 2));
        
            res.send(updateGrade);

            logger.info(`UPDATE /grade/updateGrade/:id - ${JSON.stringify(dataJSON.grades[indexGrade])}`);
        } else {
            throw new Error('This id does not exist!');
        }
    } catch (error) {
        next(error);
    }
})

router.use((error, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} ${error.message}`);
    res.status(400).send({ error: error.message});
});

/**
 * Validate if user exists on JSON file
 * @param {Array} grades list of all grades
 * @param {String} userId user's id
 * @returns {Number} index of user, if it does not exits returns -1
 */
function validateUserExists(grades = [], userId = '') {
    return grades.findIndex(grade => grade.id === Number(userId))
}

export default router;