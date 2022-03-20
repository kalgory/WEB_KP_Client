import PropTypes from 'prop-types';

import { Input } from './styles';

function ModalInput({ type, placeholder, autoFocus, name, value }) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      autoFocus={autoFocus}
      name={name}
      value={value}
    />
  );
}

ModalInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
};

ModalInput.defaultProps = {
  autoFocus: false,
  name: '',
  value: '',
};

export default ModalInput;
