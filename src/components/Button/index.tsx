import { Link } from "react-router-dom";
import { ButtonType } from "../../types/ButtonType";
import './styles.scss';
import { useTranslation } from 'react-i18next';

export default function Button({
    action
}: ButtonType) {
    const { t } = useTranslation();

    return (
        <Link to={`${action}`} className='lg-button'>
            {t('header.messageButton')}
        </Link>
    );
}