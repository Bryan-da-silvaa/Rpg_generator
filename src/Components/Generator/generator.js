import React from 'react';

import './generator.scss'

import perso from '../../utils/list-generator.json'

class Generator extends React.Component {
    constructor() {
        super();
        this.genre = this.getGenreRandom();
        this.state = {
            avatar : perso.avatar[this.getRandom(1, 10)][this.genre],
            name: perso.name[this.getRandom(1, 10)][this.genre],
            title: perso.title[this.getRandom(1, 10)][this.genre],
            race: perso.race[this.getRandom(1, 7)],
            classe: perso.classe[this.getRandom(1, 7)],
            resume: perso.resume[this.getRandom(1, 5)][this.genre]
        }
    }

    changePerso() {
        this.setGenre(this.getGenreRandom());
        this.setState({
            avatar: perso.avatar[this.getRandom(1, 10)][this.getGenre()],
            name: perso.name[this.getRandom(1, 10)][this.getGenre()],
            title: perso.title[this.getRandom(1, 10)][this.getGenre()],
            race: perso.race[this.getRandom(1, 7)],
            classe: perso.classe[this.getRandom(1, 7)],
            resume: perso.resume[this.getRandom(1, 5)][this.genre]
        })
        document.getElementById('avatar').src = this.state.avatar;
        document.getElementById('name').textContent = this.state.name;
        document.getElementById('title').textContent = this.state.title;
        document.getElementById('race').textContent = this.state.race;
        document.getElementById('classe').textContent = this.state.classe;
        document.getElementById('resume').innerHTML = this.state.name + this.state.resume
    }

    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getGenreRandom() {
        const random = this.getRandom(0, 1);
        if (random === 0) {
            return 'feminin';
        }
        else if (random === 1) {
            return 'masculin';
        }
    }

    getGenre() {
        return this.genre;
    }

    setGenre(genre) {
        this.genre = genre;
    }

    render() {
        return (
            <div className='Generator'>
                <div className='container-card'>
                    <div className='container-avatar-perso'>
                        <div className='container-avatar'>
                            <img fetchpriority="high" id='avatar' src={'/images/avatar/avatar.png' || this.state.avatar} alt='Avatar du personnage'/>
                        </div>
                        <div className='container-info-perso'>
                            <div className='grid-info'>
                                <p className='perso'><strong>Name</strong> <span>:</span></p>
                                <p id='name'>{'?' || this.state.name}</p>
                            </div>
                            <div className='border-top grid-info'>
                                <p className='perso'><strong>Title</strong> <span>:</span></p>
                                <p id='title'>{'?' || this.state.title}</p>
                            </div>
                            <div className='border-top grid-info'>
                                <p className='perso'><strong>Race</strong> <span>:</span></p>
                                <p id='race'>{'?' || this.state.race}</p>
                            </div>
                            <div className='border-top grid-info'>
                                <p className='perso'><strong>Classe</strong> <span>:</span></p>
                                <p id="classe">{'?' || this.state.classe}</p>
                            </div>
                        </div>
                    </div>
                    <div className='container-history'>
                        <div>
                            <strong>Histoire</strong>
                            <p className='history' id='resume'>
                                {'?' || this.state.resume}
                            </p>
                        </div>
                    </div>
                </div>
                <Generate_btn/>
            </div>
        )
    }
}

export class Generate_btn extends Generator {
    render() {
        return (
            <div className='generate-btn'>
                <button onClick={() => this.changePerso()}>GENERATE</button>
            </div>
        )
    }
}

export default Generator
