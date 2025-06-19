import React from 'react'

export default function TaskList(Props:any) {
  return (
    <div className='TaskList'>
      <h3>Task List</h3>
      <div className="listofTasks">
        {Props.updatedTask.length===0?(<p className="emptylist">No task to show.</p>):(
          Props.updatedTask.map((task:any,index:any)=>(
            <div key={index} className='taskItem'>
              <div className='taskdetails'>
                <h5>{index+1}. {task.name}</h5>
                <p>- <small>{task.desc}</small></p>
                <small>Deadline: {task.deadline}</small>
              </div>
              <div id='checkbox'>
                <input type="checkbox" name="check" id="check" placeholder='mark as read' checked={task.completed} onChange={()=>Props.onComplete(task,index)}/>
                <small>Mark as Done</small>
              </div>
              <button type="button" className='dltbtn' onClick={()=>Props.onDelTask(index)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
