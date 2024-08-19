import React, { useEffect, useState } from 'react';
import Tree from 'react-d3-tree';

interface Node {
  name: string;
  children?: Node[];
}

const generateRecursionTree = (n: number, from: string, to: string, aux: string): Node => {
  if (n === 1) {
    return { name: `${from} → ${to}` };
  }
  return {
    name: `Mover ${n}`,
    children: [
      generateRecursionTree(n - 1, from, aux, to),
      { name: `${from} → ${to}` },
      generateRecursionTree(n - 1, aux, to, from),
    ],
  };
};

interface RecursionTreeProps {
  numberOfDisks: number;
}

const RecursionTree: React.FC<RecursionTreeProps> = ({ numberOfDisks }) => {
  const [data, setData] = useState<Node | null>(null);

  useEffect(() => {
    const newData = generateRecursionTree(numberOfDisks, 'A', 'C', 'B');
    setData(newData);
  }, [numberOfDisks]);

  if (!data) return null;

  return (
    <div style={{ width: '100%', height: '500px', marginTop: '20px' }}>
      <Tree data={data} orientation="vertical" />
    </div>
  );
};

export default RecursionTree;
