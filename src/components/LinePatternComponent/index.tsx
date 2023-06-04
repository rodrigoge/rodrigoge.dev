import './styles.scss';

export default function LinePatternComponent() {
  return (
    <div className='background-line-pattern-container'>
      <div className='lines'>
        <span className='line first-line'></span>
        <span className='line second-line'></span>
        <span className='line third-line'></span>
        <span className='line fourth-line'></span>
        <span className='line fifth-line'></span>
        <span className='line sixth-line'></span>
      </div>
    </div>
  );
}