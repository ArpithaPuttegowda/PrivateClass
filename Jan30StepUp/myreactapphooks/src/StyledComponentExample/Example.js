import styled from "styled-components";

// Custom component
const Example = () => {
  return <div>Hello, World!</div>;
};

// Styled component
const StyledApp = styled(Example)`
  color: red;
  font-size: 16px;
  /* Add more styles as needed */
`;

function MainApp() {
  return (
    <div>
      <StyledApp />
    </div>
  );
}

export default MainApp;
