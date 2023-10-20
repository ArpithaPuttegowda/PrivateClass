import PropTypes from 'prop-types';

const ExamplePropTypes = (props) => {
  return (
    <div>
      <p> Name:{props.name}</p>
      <p> Loc:{props.loc}</p>
      <p>PinCode:{props.pincode}</p>
      <div>
        {props.students.map((student) => {
          return <p key={student}>{student}</p>;
        })}
      </div>
    </div>
  );
};

ExamplePropTypes.propTypes = {
  name: PropTypes.string,
  loc: PropTypes.string,
  pincode: PropTypes.number,
  students: PropTypes.arrayOf(PropTypes.string),
};

ExamplePropTypes.defaultProps = {
    name: 'Sachin',
    loc: 'Mumbai',
    pincode: 12345,
    students: [],
  };

export default ExamplePropTypes;
