import React from 'react';

export default function Task({ taskName }) {
    return (
        <div>
            <h3>Task Name</h3>
            <p>{taskName}</p>
            <p>期限</p>
            <a href="/task/detail">詳細</a>
        </div>
    );
}
