import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

function NavigationButton({ href, children, disabled }) {
  const router = useRouter();

  return (
    <Wrapper
      type='button'
      disabled={disabled}
      onClick={() => router.push(href)}
    >
      {children}
    </Wrapper>
  );
}

NavigationButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

NavigationButton.defaultProps = {
  disabled: false,
};

export default NavigationButton;
