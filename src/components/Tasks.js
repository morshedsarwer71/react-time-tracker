const tasks = [
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
]

const Tasks = () => {
    return (
        <>
            {tasks.map((task)=>(
            <h3>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
