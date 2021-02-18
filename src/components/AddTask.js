
import {useState} from 'react'
const AddTask = ({addTask}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setRemainder] = useState(false);

    const onSubmit = (e)=>{
        
        e.preventDefault();
        if(!text){
            alert('please enter valid email');
            return
        }

        addTask({text,day,reminder});
        setText('');
        setDay('');
        setRemainder(false);
    }

    return (

        <form className='add-form' onSubmit={onSubmit}>

            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder='add task' value={text} onChange={(e)=> setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type="text" placeholder='add task' value={day} onChange={(e)=> setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={(e)=> setRemainder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value='Save Task' className='btn btn-block'/>
            
        </form>
    )
}

export default AddTask
