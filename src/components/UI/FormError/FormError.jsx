import './FormError.css';

export const FormError = ({ touched, message }) => {
  if (!touched) {
    return <div className="touched-text">&nbsp;</div>;
  }

  if (message) {
    return <div className="message-text">* {message}</div>;
  }

  return <div className="valid-text">* Ok</div>;
};
