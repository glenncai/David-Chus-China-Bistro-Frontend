import './Spinner.css';
import BeatLoader from 'react-spinners/BeatLoader';

export const Spinner = () => {
  const renderSpinner = () => {
    return (
      <div className="spinner-container">
        <BeatLoader
          loading={true}
          size={30}
          color={'var(--primary-white)'}
          speedMultiplier={1}
        />
      </div>
    );
  };

  return <>{renderSpinner()}</>;
};
