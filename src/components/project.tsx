import { ReactNode } from "react";
import { ProjectData } from "@/common/Types";

type ProjectProps = {
    children: ReactNode
    projectdata: ProjectData
}

export default function Project({children, projectdata}: ProjectProps) {
    return (
        <div>
            <h3>{projectdata.id}</h3>
            <h4>{children}</h4>
            <p>期限：{projectdata.date.toLocaleDateString()}</p>
            <a href="/task">詳細</a>
        </div>
    );
}