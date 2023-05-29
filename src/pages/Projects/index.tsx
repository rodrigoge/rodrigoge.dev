import Header from '../../components/Header';
import LinePattern from '../../components/LinePattern';
import './styles.scss';
import Lottie from 'lottie-react';
import error404Animation from '../../assets/404-error-animation.json';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="project-container">
        <div className="content-container">
          <h1 className='drop-in-1ms'>{t('project.projectTitle')}</h1>
          <h2 className='drop-in-1200ms'>{t('project.projectDescription')}</h2>
        </div>
        <div className='content-animation drop-in-1500ms'>
          <Lottie
            animationData={error404Animation}
            loop
            className='lottie-animation'
          />
        </div>
      </div>
      <LinePattern />
    </>
  );
}