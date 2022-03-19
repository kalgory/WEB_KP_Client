import PropTypes from 'prop-types';

import { Wrapper } from './styles';

function ModalButton({ children, type, isLoading }) {
  return (
    <Wrapper type={type} isLoading={isLoading}>
      {children}
    </Wrapper>
  );
}

ModalButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.node,
  isLoading: PropTypes.bool,
};

ModalButton.defaultProps = {
  type: 'button',
  isLoading: false,
};

export default ModalButton;
