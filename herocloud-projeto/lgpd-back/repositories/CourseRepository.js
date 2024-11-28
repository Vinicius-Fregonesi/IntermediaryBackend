import Course from '../models/Course.js'


const saveCouse = async (userModel)=>{
    const save = await Couse.create(userModel);
    return save;
}

const getAllCouses = async ()=>{
    return await Couse.findAll(
        {order:[
            ['id','ASC']
        ]}
    );
}

const getCouseById = async (id)=>{
    return await Couse.findByPk(id);
}

const deleteCouseById = async(id)=>{
    return await Couse.destroy({ where:{id:id}});
}

const updateCouseById = async(id,userModel)=>{
    try {
        const result = await Couse.update(userModel, {where:{id:id}});
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
    saveCouse,
    getCouseById, 
    getAllCouses,
    deleteCouseById,
    updateCouseById
}

export default factory;