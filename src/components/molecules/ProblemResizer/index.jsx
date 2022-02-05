import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { PauseCircleOutlined } from '@ant-design/icons';
import { Wrapper, Divider } from './styles';

function ProblemResizer({ onResize }) {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseMove = useCallback(
    ({ clientX }) => {
      if (isMouseDown) {
        onResize(clientX, window.innerWidth - clientX);
      }
    },
    [isMouseDown, onResize],
  );

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

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
      <PauseCircleOutlined />
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
