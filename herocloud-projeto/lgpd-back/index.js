import {express} from 'express';
import {pkg} from 'body-parser';
import {router} from './routes/router.js';
import sequelize from './utils.js/database.js';
import assocoation from './models/Associations.js';


const app = express();
const {json, urlendconded} = pkg;

app.use(json());
app.use(urlendconded({extended: true}));

(async ()=>{
    try{
        assocoation.associations();
        await sequelize.sync();
        app.listen(3000, function(){
            console.log("Listening from 3000");
        });
    } catch(err){
        console.log(err);
    }
})();


app.use("/", router);