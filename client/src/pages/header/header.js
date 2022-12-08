import './header.scss'

function Header () {
    return (
        <header className='header'>
            <h1 onClick={reload}><span>RPG</span> Generator</h1>
        </header>
    )
}

function reload () {
    window.location.reload()
}

export default Header
