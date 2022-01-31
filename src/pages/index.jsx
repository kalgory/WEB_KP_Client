import ProblemList from '../components/molecules/ProblemList';

const problems = [
  { title: 'first', level: 1 },
  { title: 'second', level: 2 },
];

function Home() {
  return <ProblemList problems={problems} />;
}

export default Home;
