import React, { useState } from 'react';

export default function TaskForm(props:any) {
  const [taskname,setTaskName]= useState('');
  const [taskDesc,setTaskDesc]= useState('');
  const [taskDline,setTaskDline]= useState(new Date().toISOString().split('T')[0]);

  function clickhandle(e: React.FormEvent) {
    e.preventDefault();
    const newTask={
      name: taskname,
      desc: taskDesc,
      deadline: taskDline,
      completed: false
    };
    props.onAddTask(newTask);
    setTaskName('');
    setTaskDesc('');
    setTaskDline(new Date().toISOString().split('T')[0]);
  }
  return (
    <div className='TaskForm'>
      <h3 id='taskformheading'>Add New Task</h3>
      <form action="submit" className='form' onSubmit={clickhandle}>
        <label htmlFor="taskname">Task Name</label>
        <input type="text" data-ms-editor="false" placeholder='Task Heading' id='taskname' value={taskname} onChange={(e)=>setTaskName(e.target.value)} required/>
        <label htmlFor="taskDesc">Task Details</label>
        <input type="text" data-ms-editor="false" id='taskDesc' value={taskDesc} onChange={(e)=>setTaskDesc(e.target.value)} required/>
        <label htmlFor="taskDline">Deadline</label>
        <input type="date" data-ms-editor="false" id='taskDline' value={taskDline} onChange={(e)=>setTaskDline(e.target.value)}/>
        <button type="submit" className='addbtn'>Add Task</button>
      </form>
    </div>
  )
}
