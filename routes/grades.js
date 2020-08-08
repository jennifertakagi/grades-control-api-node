import express from 'express';
import GradeController from '../controller/GradeController.js';

const router = express.Router();

router.post("/create", GradeController.createGrade);

router.get("/:id", GradeController.getGrade)

router.get("/totalGrade/:student/:subject", GradeController.getTotalGrade)

router.get("/meanGrade/:subject/:type", GradeController.getMeanGrade)

router.get("/threeBestGrades/:subject/:type", GradeController.getThreeBestGrades)

router.delete("/delete/:id", GradeController.deleteGrade)

router.patch("/updateGrade/:id", GradeController.updateGrade)

router.use((error, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} ${error.message}`);
    res.status(400).send({ error: error.message});
});

export default router;