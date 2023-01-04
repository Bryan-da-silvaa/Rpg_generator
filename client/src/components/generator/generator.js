import characters from '../../utils/list_generator.json'

function Generator () {
    let generateCharacter = [
        {id: 1},
        {id: 1},
        {id: 1}
    ]
    console.log(characters.avatar)
    return (
        <div className="box">
            <div className="box-perso">
                <div className="avatar-perso">
                    <img src='https://www.kanpai.fr/sites/default/files/styles/og/public/naruto-tag.jpg' />
                </div>
                <div className="info-perso">
                    <div className="firstname border-bottom">
                        <span><strong>First Name :</strong></span>
                        <span>Naruto</span>
                    </div>
                    <div className="title border-bottom">
                        <span><strong>Title :</strong></span>
                        <span>Le guerrier</span>
                    </div>
                    <div className="race border-bottom">
                        <span><strong>Race :</strong></span>
                        <span>Elfe</span>
                    </div>
                    <div className="classe">
                        <span><strong>Classe :</strong></span>
                        <span>Mage</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function GenerateBtn (props) {
    return (
        <button className={props.objet.classname}>{props.objet.name}</button>
    )
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default Generator
