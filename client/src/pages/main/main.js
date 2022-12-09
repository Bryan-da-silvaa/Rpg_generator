import './main.scss'
import Generator, { GenerateBtn } from '../../components/generator/generator'

const _object = {
    generate: {
        classname: 'btn generate-btn',
        name: 'Generate'
    },
    download: {
        classname: 'btn download-btn',
        name: 'Download'
    }
};

function Main () {
    return (
        <div className='generator'>
            <span className='titre'><h1>GÉNÉRER ALÉATOIREMENT DES PERSONNAGE DE <strong>RPG</strong></h1></span>
            <Generator />
            <GenerateBtn objet={_object.generate}/>
            <GenerateBtn objet={_object.download}/> 
        </div>
    )
}

export default Main
