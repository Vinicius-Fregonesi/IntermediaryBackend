import Evaluation from '../models/Evaluation.js'


const saveEvaluation = async (userModel)=>{
    const save = await Evaluation.create(userModel);
    return save;
}

const getAllEvaluations = async ()=>{
    return await Evaluation.findAll(
        {order:[
            ['id','ASC']
        ]}
    );
}

const getEvaluationById = async (id)=>{
    return await Evaluation.findByPk(id);
}

const deleteEvaluationById = async(id)=>{
    return await Evaluation.destroy({ where:{id:id}});
}

const updateEvaluationById = async(id,userModel)=>{
    try {
        const result = await Evaluation.update(userModel, {where:{id:id}});
        if(result[0]===1){
            return {message:"Usuário atualizado com sucesso"};
        } else{
            return {message:"Não foi possível encontrar o usuário ${id}", stuatus:404};
        }
    } catch (error) {
        console.error();
    }
}

const factory = {
    saveEvaluation,
    getEvaluationById, 
    getAllEvaluations,
    deleteEvaluationById,
    updateEvaluationById
}

export default factory;