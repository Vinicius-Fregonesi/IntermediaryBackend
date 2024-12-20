import evaluationRepository from '../repositories/EvaluationRepository.js';


const saveEvaluation = (evaluationModel)=>{
    return evaluationRepository.saveEvaluation(EvaluationModel);
}

const getEvaluationById= (id)=>{
    return evaluationRepository.getEvaluationById(id);
}

const getAllEvaluations= ()=>{
    return evaluationRepository.getAllEvaluations();
}

const deleteEvaluationById= (id)=>{
    return evaluationRepository.deleteEvaluationById(id);
}

const updateEvaluationById= (id, evaluationModel)=>{
    return evaluationRepository.updateEvaluationById(id,evaluationModel);
}

const service = {
    saveEvaluation,
    getAllEvaluations,
    getEvaluationById,
    updateEvaluationById,
    deleteEvaluationById
}
export default service;