import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt='Zoo' width='50px' className='rounded' />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/animaux'>Animaux</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;