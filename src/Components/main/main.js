import './main.scss'
import { Generate_btn } from '../Generator/generator'

function Main () {
    return (
        <div className='Main'>
            <div className='container-title'>
                <h1><strong className='title-color'>RPG</strong> Generator</h1>
                <p>
                    Générer aléatoirement un personnage pour vos parties de <strong>jdr</strong> ou de <strong>jeux vidéos</strong>
                </p>
                <Generate_btn />
            </div>
        </div>
    )
}

export default Main
