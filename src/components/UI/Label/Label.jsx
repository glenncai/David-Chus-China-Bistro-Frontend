import './Label.css';

export const Label = ({ type = 'success', text }) => {
  let label_color = 'green';

  switch (type) {
    case 'success':
      label_color = 'green';
      break;
    case 'danger':
      label_color = 'red';
      break;
    case 'warn':
      label_color = 'orange';
      break;
    case 'info':
      label_color = 'blue';
      break;
    default:
      label_color = 'green';
      break;
  }

  return (
    <div className="d-flex justify-space-between align-items-center ml-2">
      <div className={`dot-${type} mr-2`}></div>
      <label style={{ color: label_color, marginTop: '4px' }}> {text}</label>
    </div>
  );
};
