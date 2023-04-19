import { Link } from 'react-router-dom';
import fb from '../assets/footer/fb.png';
import twitter from '../assets/footer/twitter.png';
import './footer.css';

function Footer() {
    return (
        <footer className='bg-primary'>
            <div className='text-white text-center'>© 2023 MyZoo - Tout droits réservés</div>
            <div className='row no-gutters align-items-center text-center pt-2'>
                <div className='col-3'>
                    <a href='#' className='d-block' target='_blank'>
                        <img src={fb} alt='facebook' className='img-footer-link' />
                    </a>
                </div>
                <div className='col-3'>
                    <a href='#' className='d-block' target='_blank'>
                        <img src={twitter} alt='twitter' className='img-footer-link' />
                    </a>
                </div>
                <div className='col-3'>
                    <Link to='/mentions' className='nav-link p-0 m-0 footer-link'>
                        Mentions légales
                    </Link>
                    <a href='mailto:contact@myzoo.com' className='nav-link p-0 m-0 footer-link'>
                        Envoyer un mail
                    </a>
                    <a href='https://myzoo-admin.eryan-portfolio.com/back/login' className='nav-link p-0 m-0 footer-link'>
                        Administration
                    </a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;