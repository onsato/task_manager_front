import Image from 'next/image'
import Project from '@/components/project';

export default function Home() {
  const projectData:
  {
    id: number,
    name: string,
    date: Date
  } = {
    id: 1,
    name: "sample1",
    date: new Date()
  }
  return (
    <>
      <h1>プロジェクト一覧</h1>
      <ul>
        <li>
          <Project id={projectData.id} date={projectData.date}>{projectData.name}</Project>
        </li>
      </ul>
    </>
  );
}
