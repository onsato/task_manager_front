import { ReactNode } from "react";
import { TaskData } from "@/common/Types";

type TaskProps = {
    taskData: TaskData
}

export default function Task({ taskData }: TaskProps) {
    return (
        <div>
            <h2>タスク名：{taskData.name}</h2>
            <h3>タスクタイプ：{taskData.taskType}</h3>
            <p>期限：{taskData.date.toLocaleDateString()}</p>
            <a href={"/task?project_id=" + taskData.projectId + "&task_id=" + taskData.id}>詳細</a>
        </div>
    );
}
