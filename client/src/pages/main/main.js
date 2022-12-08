import './main.scss'
import Generator, { Generate_btn } from '../../components/generator/generator'

const _object = {
    classname: "generate-btn",
    name: "Generate"
};

function Main () {
    return (
        <div className='generator'>
            <span className='titre'><h1>GÉNÉRER ALÉATOIREMENT DES PERSONNAGE DE <strong>RPG</strong></h1></span>
            <Generator />
            <Generate_btn objet={_object}/> 
        </div>
    )
}

export default Main
