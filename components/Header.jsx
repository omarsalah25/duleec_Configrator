import '../assets/images/icons/duleec-logo.png'

function Header({ children }) {
    return (
        <div id='header'>
            <h1>
                <img src='../assets/images/icons/duleec-logo.png' className='icon' />
                <strong>Configurator</strong>
            </h1>
            {children}
            <p>© Copyright 2023 - Duleec by Crowd Digital Agency</p>
        </div>
    )
}

export default Header
