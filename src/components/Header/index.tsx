import './styles.scss';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import Button from '../Button';
import SwitchTheme from '../SwitchTheme';

export default function Header() {
    return (
        <div className="header-container">
            <header>
                <Link to="/" className='logo-image'>
                    <img src={logoImg} alt="Logo Portfolio" />
                </Link>

                <nav>
                    <ul>
                        <Link to="" className='menu-item'>Home</Link>
                        <Link to="" className='menu-item'>About</Link>
                        <Link to="" className='menu-item'>Projects</Link>
                        <span className='menu-item'>Language</span>
                        <span className='menu-item'>
                            <SwitchTheme />
                        </span>

                    </ul>
                </nav>

                <Button action='/' text="Let's chat" />
            </header>
        </div>
    );
}