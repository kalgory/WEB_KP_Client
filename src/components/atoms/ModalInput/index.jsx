import PropTypes from 'prop-types';

import { Input } from './styles';

function ModalInput({ type, placeholder, autoFocus, name }) {
  return <Input type={type} placeholder={placeholder} autoFocus={autoFocus} name={name} />;
}

ModalInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  name: PropTypes.string,
};

ModalInput.defaultProps = {
  autoFocus: false,
  name: '',
};

export default ModalInput;
