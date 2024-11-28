import Teacher from '../models/Teacher.js'

const saveTeacher = async (userModel)=>{
    const save = await Teacher.create(userModel);
    return save;
}

const getAllTeachers = async ()=>{
    return await Teacher.findAll(
        {order:[
            ['id','ASC']
        ]}
    );
}

const getTeacherById = async (id)=>{
    return await Teacher.findByPk(id);
}

const deleteTeacherById = async(id)=>{
    return await Teacher.destroy({ where:{id:id}});
}

const updateTeacherById = async(id,userModel)=>{
    try {
        const result = await Teacher.update(userModel, {where:{id:id}});
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
    saveTeacher,
    getTeacherById, 
    getAllTeachers,
    deleteTeacherById,
    updateTeacherById
}

export default factory;