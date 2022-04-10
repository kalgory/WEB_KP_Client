import PropTypes from 'prop-types';

import { Wrapper } from './styles';

function Button({ onClick, children, disabled }) {
  return (
    <Wrapper
      type='button'
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Wrapper>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
};

export default Button;
