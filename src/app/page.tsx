import Image from 'next/image'
import Project from '@/components/project';
import {ProjectData} from '@/common/Types';

export default function Home() {
  const projectDatas: ProjectData[] = [{
    id: 1,
    name: "sample1",
    date: new Date()
  },
  {
    id: 2,
    name: "sample2",
    date: new Date()
  },
  {
    id: 3,
    name: "sample3",
    date: new Date()
  }]
  return (
    <>
      <h1>プロジェクト一覧</h1>
      <ul>
      {projectDatas.map((projectData) => (
        <li>
          <Project projectData={projectData} />
        </li>
      ))}
      </ul>
    </>
  );
}
