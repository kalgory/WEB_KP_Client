import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Table, Tag } from 'antd';

const columns = [
  {
    title: '제목',
    dataIndex: 'title',
  },
  {
    title: '레벨',
    dataIndex: 'level',
  },
  {
    title: '풀이 가능 언어',
    dataIndex: 'languages',
    render: (languages) =>
      languages.map((language) => <Tag key={language}>{language.toUpperCase()}</Tag>),
  },
];

function ProblemTable() {
  const router = useRouter();
  const [problems, setProblems] = useState([]);
  useEffect(() => {
    axios.get('/problems.json').then(({ data }) => setProblems(data));
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={problems}
      onRow={({ key }) => ({
        onClick: () => router.push(`/problems/${key}`),
      })}
    />
  );
}

export default ProblemTable;
