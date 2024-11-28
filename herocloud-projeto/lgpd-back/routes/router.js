import express from 'express';
let router = express.Router();

import userController from './UserController.js';
import courseController from './CourseController.js';
import evaluationController from './EvaluationController.js';
import teacherController from './TeacherController.js';

router.get("/", function(req,res){
    console.log("Oii");
    res.status(200).json({message:"Oii"})
});

router.use("/", userController);
router.use("/", teacherController);
router.use("/", evaluationController);
router.use("/", courseController);

export default router;