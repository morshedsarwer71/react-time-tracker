import { useState } from 'react'


const Tasks = () => {

    //state and useState hook

    const [tasks, setState] = useState([
        {
            id:1,
            text:'Meeting with docktor',
            day:'feb 6th 1:30pm',
            reminder:true
        },
        {
            id:2,
            text:'Meeting school',
            day:'feb 6th 2:30pm',
            reminder:true
        },
        {
            id:3,
            text:'food shooping',
            day:'feb 6th 3:30pm',
            reminder:false
        }
    ])

    return (
        <>
            {tasks.map((task)=>(
            <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
