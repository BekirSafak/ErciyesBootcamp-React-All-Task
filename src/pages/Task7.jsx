import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Task7() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [selected, setSelected] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            setUsers(res.data);
        })

        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            setPosts(res.data);
        })
    }, [])

    useEffect(() => {
        if (users.length > 0 && posts.length > 0 && selectedUserId === null) {

            const defaultUserId = users[0].id;
            setSelectedUserId(defaultUserId);

            const defaultUserPosts = posts.filter(item => item.userId === defaultUserId);
            setSelected(defaultUserPosts);
        }
    }, [users, posts, selectedUserId]);

    const selectUsers = (e) => {
        const selectedUserId = e.target.value;
        const filteredPosts = posts.filter(item => item.userId == selectedUserId);
        setSelected(filteredPosts);
    }

    return (
        <div className='mx-auto w-full text-center'>
            <div className='bg-gray-500 text-center sticky top-0 p-3'>
                <select name="users" id="users" onChange={e => selectUsers(e)}>
                    {users.map(item =>
                        <option value={item.id} key={item.id}>{item.name}</option>
                    )}
                </select>
            </div>

            <div className='flex mx-auto justify-center w-full text-center'>
                <table>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selected.map(item => (
                            <tr key={item.id}>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    )
}



export default Task7