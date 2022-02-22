import PropTypes from 'prop-types';

import { Wrapper } from './styles';

function ModalButton({ children, type }) {
  return <Wrapper type={type}>{children}</Wrapper>;
}

ModalButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.node,
};

ModalButton.defaultProps = {
  type: 'button',
};

export default ModalButton;
