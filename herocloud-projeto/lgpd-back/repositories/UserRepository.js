import User from '../models/User.js'
import sequelize from '../utils.js/database.js';

const saveUser = async (userModel)=>{
    const save = await User.create(userModel);
    return save;
}

const getAllUsers = async ()=>{
    return await User.findAll(
        {order:[
            ['id','ASC']
        ]}
    );
}

const getUserById = async (id)=>{
    return await User.findByPk(id);
}

const deleteUserById = async(id)=>{
    return await User.destroy({ where:{id:id}});
}

const updateUserById = async(id,userModel)=>{
    try {
        const result = await User.update(userModel, {where:{id:id}});
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
    saveUser,
    getUserById, 
    getAllUsers,
    deleteUserById,
    updateUserById
}

export default factory;