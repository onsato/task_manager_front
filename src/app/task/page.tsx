import fetch from 'node-fetch';
import Task from '@/components/task';

type TaskProps = {
    taskName: string
}

export default function TaskManagement (data: TaskProps) {
    const taskName = fetch('http://localhost:4000')
    .then(response => response.json())
    .then(data => data.taskName);
    console.log("レスポンスデータ：", data);

    // if (!data.taskName) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div>
            <h1>プロジェクト名</h1>
        <ul>
            <li>
                <h2>いつかやらなきゃ</h2>
                <Task taskName={data.taskName} />
            </li>
            <li>
                <h2>今週中にやらなきゃ</h2>
                <Task taskName={data.taskName} />
            </li>
            <li>
                <h2>今、頑張ってます！</h2>
                <Task taskName={data.taskName} />
            </li>
            <li>
                <h2>終わったー！</h2>
                <Task taskName={data.taskName} />
            </li>
        </ul>
        </div>
    );
}

export async function getServerComponent(context) {
    console.log("ここ呼ばれてる？")
    const res = await fetch('http://localhost:4000');
    const data = await res.json();
    console.log(data);
  
    return { props: { data } };
  }

// async function getTaskProps() {
//     console.log("Propsを呼んでます");
//     const data = {
//         TaskName: "sample",
//     }
    
//     return {
//         props: {
//             TaskName: data.TaskName,
//         },
//     };
//   }