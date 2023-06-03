import './styles.scss';
import { Link } from 'react-router-dom';
import SwitchThemeComponent from '../SwitchThemeComponent';
import SwitchLanguageComponent from '../SwitchLanguageComponent';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function HeaderComponent() {
    const { t } = useTranslation();
    const [isClick, setIsClick] = useState(false);

    async function clickMenu() {
        if (isClick) {
            setIsClick(false);
        } else {
            setIsClick(true);
        }
    }

    return (
        <div className="header-container">
            <header>
                <Link to="/" className='logo-image'>
                    <div className="logo">
                        <span>R</span>
                        <span>G</span>
                        <span>.</span>
                    </div>
                </Link>

                <nav className={`${isClick ? "on" : ""}`}>
                    <ul>
                        <Link to="/" className='menu-item'>
                            {t('header.home')}
                        </Link>
                        <Link to="/about" className='menu-item'>
                            {t('header.about')}
                        </Link>
                        <Link to="/projects" className='menu-item'>
                            {t('header.project')}
                        </Link>
                        <span className='menu-item'>
                            <SwitchLanguageComponent />
                        </span>
                        <span className='menu-item'>
                            <SwitchThemeComponent />
                        </span>
                    </ul>

                    <div className="menu-bars" onClick={clickMenu}>
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>
                </nav>
            </header>
        </div>
    );
}