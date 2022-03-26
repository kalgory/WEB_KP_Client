import PropTypes from 'prop-types';

import { Wrapper } from './styles';

function HeaderButton({ onClick, children }) {
  return (
    <Wrapper
      type='button'
      onClick={onClick}
    >
      {children}
    </Wrapper>
  );
}

HeaderButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default HeaderButton;
