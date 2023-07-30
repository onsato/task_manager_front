import fetch from 'node-fetch';
import Task from '@/components/task';
import {TaskData} from '@/common/Types';

export default function ProjectManagement ({ searchParams: { project_id }}: { searchParams: {project_id: number} }) {
    // const tasks = fetch('http://localhost:4000/task?id={id}')
    // .then(response => response.json())
    // .then(data => data.taskName);
    // console.log("レスポンスデータ：", data);

    // if (!data.taskName) {
    //     return <div>Loading...</div>;
    // }
    const projectName: string = "sample" + project_id
    const tasks: TaskData[] = [{
        id: 1,
        name: "task1",
        date: new Date(),
        taskType: 1,
        projectId: project_id
    },
    {
        id: 2,
        name: "task2",
        date: new Date(),
        taskType: 1,
        projectId: project_id
    },
    {
        id: 3,
        name: "task3",
        date: new Date(),
        taskType: 2,
        projectId: project_id
    }]

    return (
        <div>
            <h1>プロジェクト名：{projectName}</h1>
        <ul>
            {tasks.map((task) => (
                <li>
                    <Task taskData={task}></Task>
                </li>
            ))}
        </ul>
        </div>
    );
}
