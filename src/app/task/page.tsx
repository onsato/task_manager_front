import fetch from 'node-fetch';
import Task from '@/components/task';
import { TaskDetail } from '@/common/Types';

export default function TaskManagement ({ searchParams: { project_id, task_id }}: { searchParams: {project_id: number, task_id: number} }) {
    const taskDetail: TaskDetail = {
        id: task_id,
        name: "task" + task_id,
        deadLine: new Date(),
        message: "あれやるこれやる"
    }
    return (
        <div>
            <h1>プロジェクト名：{"sample" + project_id}</h1>
            <h2>タスク名：{taskDetail.name}</h2>
            <p>締め切り：{taskDetail.deadLine.toLocaleDateString()}</p>
            <p>内容：{taskDetail.message}</p>
        </div>
    );
}
