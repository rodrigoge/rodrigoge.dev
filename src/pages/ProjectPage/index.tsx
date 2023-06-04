import HeaderComponent from '../../components/HeaderComponent';
import LinePatternComponent from '../../components/LinePatternComponent';
import './styles.scss';
import Lottie from 'lottie-react';
import lottieAnimation from '../../assets/lottie-animation.json';
import { useTranslation } from 'react-i18next';

export default function ProjectPage() {
  const { t } = useTranslation();

  return (
    <>
      <HeaderComponent />
      <div className='project-container'>
        <div className='content-container'>
          <h1 className='drop-in-1ms'>{t('project.projectTitle')}</h1>
          <h2 className='drop-in-1200ms'>{t('project.projectDescription')}</h2>
          <div className='content-animation drop-in-1500ms'>
            <Lottie
              animationData={lottieAnimation}
              loop
              className='lottie-animation'
            />
          </div>
        </div>
      </div>
      <LinePatternComponent />
    </>
  );
}