import './main.scss'
import Generator from '../../components/generator/generator'

function Main () {
    return (
        <div className='generator'>
            <span className='titre'><h1>GÉNÉRER ALÉATOIREMENT DES PERSONNAGE DE <strong>RPG</strong></h1></span>
            <Generator />
            <button className='generate-btn'>GENERATE</button>
        </div>
    )
}

export default Main
