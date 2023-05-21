import './styles.scss';
import { Link } from 'react-router-dom';
import Button from '../Button';
import SwitchTheme from '../SwitchTheme';
import SwitchLanguage from '../SwitchLanguage';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Header() {
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
                        <Link to="" className='menu-item'>
                            {t('header.home')}
                        </Link>
                        <Link to="" className='menu-item'>
                            {t('header.about')}
                        </Link>
                        <Link to="" className='menu-item'>
                            {t('header.project')}
                        </Link>
                        <span className='menu-item'>
                            <SwitchLanguage />
                        </span>
                        <span className='menu-item'>
                            <SwitchTheme />
                        </span>
                    </ul>

                    <div className="menu-bars" onClick={clickMenu}>
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>
                </nav>

                <span className="header-button">
                    <Button
                        action='/'
                        text="Let's chat"
                    />
                </span>
            </header>
        </div>
    );
}