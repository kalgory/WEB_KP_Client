import PropTypes from 'prop-types';

import { Wrapper } from './styles';

function ProblemHeader({ title }) {
  return <Wrapper>{title}</Wrapper>;
}

ProblemHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProblemHeader;
