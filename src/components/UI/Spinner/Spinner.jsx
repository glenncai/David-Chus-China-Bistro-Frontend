import './Spinner.css';
import BeatLoader from 'react-spinners/BeatLoader';
import ClockLoader from 'react-spinners/ClockLoader';

export const Spinner = ({ type = 'beat' }) => {
  const renderSpinner = () => {
    return (
      <div
        className={
          type === 'beat' ? 'spinner-container' : 'spinner-container-backdrop'
        }
      >
        {type === 'beat' ? (
          <BeatLoader
            loading={true}
            size={30}
            color={'var(--primary-white)'}
            speedMultiplier={1}
          />
        ) : (
          <ClockLoader
            loading={true}
            size={30}
            color={'var(--primary-white)'}
            speedMultiplier={1}
          />
        )}
      </div>
    );
  };

  return <>{renderSpinner()}</>;
};
