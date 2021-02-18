import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddForm from './components/AddTask'
function App() {
  
  const [showAddTask, setShowTask ]=useState(false);
  const [tasks, setTasks] = useState([
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
        text:'Food shooping',
        day:'feb 6th 3:30pm',
        reminder:false
    }
])

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id!==id));
}

const toggleReminder=(id)=>{
  setTasks(tasks.map( (task) => task.id ===id ? { ...task,reminder: !task.reminder } : task ));
}

const addTask = (task)=>{
  const id = Math.floor(Math.random() * 1000000)+1;
  const newTask = {id,...task}
  setTasks([...tasks, newTask]);
}

const addButtonToogle=()=>{
  setShowTask(!showAddTask)
}
  return (
    <div className="container">
     <Header addOn={addButtonToogle}/>
     { showAddTask && <AddForm addTask={addTask} taskToggle={showAddTask}/>}
     {tasks.length >0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : 'No task to show'}
    </div>
  );
}

export default App;
