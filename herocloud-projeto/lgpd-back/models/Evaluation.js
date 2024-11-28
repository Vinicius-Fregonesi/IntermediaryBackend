import { DataTypes } from "sequelize";
import sequelize from "../utils.js/database";

const Evaluation= sequelize.define('evaluations', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    concepts:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},
[{underscored:true}])
export default Evaluation;