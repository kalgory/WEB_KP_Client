import ProblemListTile from 'src/components/atoms/ProblemListTile';

function ProblemList({ problems }) {
  return problems.map(({ title, level, id }) => (
    <ProblemListTile key={id} level={level} title={title} />
  ));
}

export default ProblemList;
