import React from 'react';
import './Accounts.css'
export default function Accounts({ accounts }) {
    if (!accounts) {
        return <></>
    }
    return (
        <>
            <h1 className='text-center my-5'>Accounts</h1>
            <div className='d-flex justify-content-center justify-items-center'>
                <div className='table-div'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col' className='table-data'>ID</th>
                                <th scope='col' className='table-data'>User ID</th>
                                <th scope='col' className='table-data'>Completed</th>
                                <th scope='col' className='table-data'>To DO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.todos.map((todo) => (
                                <tr key={todo.id}>
                                    <td className='table-data'>{todo.id}</td>
                                    <td className='table-data'>{todo.userId}</td>
                                    <td className='table-data'>{todo.completed ? "true" : "false" }</td>
                                    <td className='table-data'>{todo.todo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
