import PropTypes from 'prop-types';

import { Button } from './styles';

function ModalButton({ children }) {
  return <Button type='button'>{children}</Button>;
}

ModalButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalButton;
