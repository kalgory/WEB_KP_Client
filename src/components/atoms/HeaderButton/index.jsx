import PropTypes from 'prop-types';

import { Wrapper } from './styles';

function Button({ onClick, children }) {
  return (
    <Wrapper
      type='button'
      onClick={onClick}
    >
      {children}
    </Wrapper>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
