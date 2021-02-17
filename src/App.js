import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {

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
  return (
    <div className="container">
     <Header />
     <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
