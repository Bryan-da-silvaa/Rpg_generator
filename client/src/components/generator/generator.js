function Generator (_object) {
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
                    <div className="lastname border-bottom">
                        <span><strong>Last Name :</strong></span>
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
            <div className="box-perso">
                <div className="avatar-perso">
                    <img src='https://www.kanpai.fr/sites/default/files/styles/og/public/naruto-tag.jpg' />
                </div>
                <div className="info-perso">
                    <div className="firstname border-bottom">
                        <span><strong>First Name :</strong></span>
                        <span>Naruto</span>
                    </div>
                    <div className="lastname border-bottom">
                        <span><strong>Last Name :</strong></span>
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
            <div className="box-perso">
                <div className="avatar-perso">
                    <img src='https://www.kanpai.fr/sites/default/files/styles/og/public/naruto-tag.jpg' />
                </div>
                <div className="info-perso">
                    <div className="firstname border-bottom">
                        <span><strong>First Name :</strong></span>
                        <span>Naruto</span>
                    </div>
                    <div className="lastname border-bottom">
                        <span><strong>Last Name :</strong></span>
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

export function Generate_btn (_object) {
    return (
        <button className={_object.className}>{_object.name}</button>
    )
}

export default Generator
