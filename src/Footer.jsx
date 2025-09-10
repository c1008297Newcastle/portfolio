import {Link} from "react-router-dom";

function handler() {
    window.scrollTo(0, 0)
}

function Footer() {
    return (
        <nav id="div-footer" style={{
            display: 'flex',
            width: '100%',
            height: '75px',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Link to='/license' onClick={handler}>License</Link>
        </nav>
    )
}

export default Footer;