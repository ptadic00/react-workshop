import './Indicator.css';

const Indicator = ({ isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`indicator-container ${isActive ? 'indicator-yellow' : ''}`}
    />
  );
};

export default Indicator;
