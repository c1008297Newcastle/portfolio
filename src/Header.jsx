import {Link} from "react-router-dom";

function Header({shadow=true}){
    const setMargin = shadow ? '7px' : ''
    const setShadow = shadow ? '0px 7px 10px rgba(131, 130, 130, 0.47)' : ''
    return (
        <nav id="div-header" style={{
            display: 'flex',
            width: '100%',
            height: '75px',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: setMargin,
            boxShadow: setShadow
        }}>
            <Link to="/" style={{marginRight: '60px'}}>About</Link>
            <Link to="/portfolio" style={{marginRight: '60px'}}>Portfolio</Link>
            <Link to="/research" style={{marginRight: '60px'}}>Research</Link>
            <Link to="https://www.linkedin.com/in/elliot-hurley" style={{marginRight: '60px'}}><img src='../img/LI-In-Bug.png' alt='LinkedIn logo' height='30pt'></img></Link>
            <Link to="https://www.github.com/c1008297Newcastle"><img src='../img/github-mark.png' alt='GitHub logo' height='30pt'></img></Link>
        </nav>
    )
}

export default Header;