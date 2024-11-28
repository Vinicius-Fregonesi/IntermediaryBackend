import courseRepository from '../repositories/CourseRepository.js';

const saveCourse = (courseModel)=>{
    return courseRepository.saveCourse(CourseModel);
}

const getCourseById= (id)=>{
    return courseRepository.getCourseById(id);
}

const getAllCourses= ()=>{
    return courseRepository.getAllCourses();
}

const deleteCourseById= (id)=>{
    return courseRepository.deleteCourseById(id);
}

const updateCourseById= (id, courseModel)=>{
    return courseRepository.updateCourseById(id,courseModel);
}

const service = {
    saveCourse,
    getAllCourses,
    getCourseById,
    updateCourseById,
    deleteCourseById
}
export default service;