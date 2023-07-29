import Image from 'next/image'
import Task from '@/components/task';

export default function ShowDetailTask() {
  return (
    <main>
        <h1>タスク名</h1>
      <ul>
        <li>
          <h2>作成日</h2>
        </li>
        <li>
          <h2>期限</h2>
        </li>
        <li>
          <h2>memo</h2>
        </li>
      </ul>
    </main>
  );
}
