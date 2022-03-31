import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Divider } from './styles';

function ProblemResizer({ onResize }) {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseMove = useCallback(() => {}, [isMouseDown, onResize]);

  const handleMouseUp = () => setIsMouseDown(false);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove]);

  return (
    <Wrapper onMouseDown={() => setIsMouseDown(true)}>
      <Divider />
    </Wrapper>
  );
}

ProblemResizer.propTypes = {
  onResize: PropTypes.func,
};

ProblemResizer.defaultProps = {
  onResize: () => {},
};

export default ProblemResizer;
