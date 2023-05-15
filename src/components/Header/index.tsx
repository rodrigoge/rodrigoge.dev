import './styles.scss';
import { Link } from 'react-router-dom';
import Button from '../Button';
import SwitchTheme from '../SwitchTheme';
import SwitchLanguage from '../SwitchLanguage';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t } = useTranslation();

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

                <nav>
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
                </nav>

                <Button action='/' text="Let's chat" />
            </header>
        </div>
    );
}