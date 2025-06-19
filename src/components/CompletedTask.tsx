import React from "react";

export default function CompletedTask(Props: any) {
  return (
    <div className="CompletedTask">
      <h3>Completed Task</h3>
      <div className="listofTasks">
        {Props.completedTasks.length === 0 ? (<p className="emptylist">No completed task to show.</p>) : (
          Props.completedTasks.map((ctask: any, cindex: any) => (
            <div key={cindex} className="taskItem">
              <div className="taskdetails"> 
                <h5>{cindex+1}. <del>{ctask.name}</del></h5>
                <p><small>- {ctask.desc}</small></p>
                <small>Completed on: {new Date().toISOString().split('T')[0]}</small>
              </div>
              <button type="button" className="dltbtn" onClick={() => Props.onDelcTask(cindex)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
