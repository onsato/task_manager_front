import { ReactNode } from "react";
import { ProjectData } from "@/common/Types";

type ProjectProps = {
    projectData: ProjectData
}

export default function Project({projectData}: ProjectProps) {
    return (
        <div>
            <h3>プロジェクトID：{projectData.id}</h3>
            <h4>プロジェクト名：{projectData.name}</h4>
            <p>期限：{projectData.date.toLocaleDateString()}</p>
            <a href={"/project?project_id=" + projectData.id}>詳細</a>
        </div>
    );
}