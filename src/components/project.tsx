import { ReactNode } from "react";

type ProjectProps = {
    children: ReactNode
    id: number
    date: Date
}

export default function Project({children, id, date}: ProjectProps) {
    return (
        <div>
            <h3>{id}</h3>
            <h4>{children}</h4>
            <p>期限：{date.toLocaleDateString()}</p>
            <a href="/task">詳細</a>
        </div>
    );
}