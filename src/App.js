import { useState,useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddForm from './components/AddTask'
import axios from 'axios';
function App() {
  
  const [showAddTask, setShowTask ]=useState(false);
  const [tasks, setTasks] = useState([])

const deleteTask = (id) => {
axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then(res=>{
  const result = res.data;
  console.log('deleted');
})
  setTasks(tasks.filter((task) => task.id!==id));
}

const toggleReminder=(id)=>{
  setTasks(tasks.map( (task) => task.id ===id ? { ...task,reminder: !task.reminder } : task ));
}

const addTask = (task)=>{
  // const id = Math.floor(Math.random() * 1000000)+1;
  // const newTask = {id,...task}
  // setTasks([...tasks, newTask]);
  setTasks();
}

const addButtonToogle=()=>{
  setShowTask(!showAddTask)
}

useEffect(()=>{
  const fetchData = async ()=>{

    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res=>{
      const data = res.data;
      // console.log(data);
      setTasks(data);
    });
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const data = await res.json()
    // setTasks(data);
    //console.log(data[0]);
  }

  fetchData();
},[]);

  return (
    <div className="container">
     <Header addOn={addButtonToogle}/>
     { showAddTask && <AddForm addTask={addTask} taskToggle={showAddTask}/>}
     {tasks.length >0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : 'No task to show'}
    </div>
  );
}

export default App;
