import Image from 'next/image'
import Task from '@/components/task';

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <h2>いつかやらなきゃ</h2>
          <Task />
        </li>
        <li>
          <h2>今週中にやらなきゃ</h2>
          <Task />
        </li>
        <li>
          <h2>今、頑張ってます！</h2>
          <Task />
        </li>
        <li>
          <h2>終わったー！</h2>
          <Task />
        </li>
      </ul>
    </main>
  );
}
