import PropTypes from 'prop-types';

function Button({ label, onClick }) {
  return (
    <button onClick={onClick}>{label}</button>
  );
}

Button.prototype={
label:PropTypes.string,
onClick:PropTypes.func
}

Button.defaultProps = {
   label:"",
   onClick:()=>{}
  };

export default Button;
