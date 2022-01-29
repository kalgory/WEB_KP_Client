import { Card } from 'antd';
import PropTypes from 'prop-types';

function ProblemListTile({ title, level }) {
  return (
    <Card>
      <h1>{title}</h1>
      <h1>{level}</h1>
    </Card>
  );
}

ProblemListTile.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default ProblemListTile;
