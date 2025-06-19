import "./App.css";
import CompletedTask from "./components/CompletedTask";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import users from './users';

function App() {
  interface User {
    username: string;
    password: string;
    name: string;
  }
  const [isloginUser,setisloginUser] = useState<User | null>(null);
  const [tasks, setTaskhai] = useState<any[]>([]);
  const [doneTasks, setdoneTask] = useState<any[]>([]);

  useEffect(()=>{
    if(isloginUser){
      const saved = localStorage.getItem(`${isloginUser.username}_tasks`);
      setTaskhai(saved ? JSON.parse(saved) : []);
      const completedSaved = localStorage.getItem(`${isloginUser.username}_doneTasks`);
      setdoneTask(completedSaved ? JSON.parse(completedSaved) : []);
    }
  },[isloginUser]);
  useEffect(()=>{ //refresh hone pe login nhi
    const savedUser = localStorage.getItem("loggedinUser");
    savedUser && setisloginUser(JSON.parse(savedUser));
  },[]);

  function addTask(nayaTask: any) {
    setTaskhai([...tasks, nayaTask]);
  }
  function delTask(index: any) {
    const afterDelTasks = tasks.filter((_, i) => i !== index);
    setTaskhai(afterDelTasks);
  }
  useEffect(() => {
    if(isloginUser){
      localStorage.setItem(`${isloginUser.username}_tasks`, JSON.stringify(tasks));
    }
  },[tasks, isloginUser]);

  function compTask(doneTaskaaya:any, index: any) {
    const doneMarked = { ...doneTaskaaya, completed: true };
    delTask(index);
    setdoneTask([...doneTasks, doneMarked]);
  }
  function delcTask(cindex: any) {
    const cTasks = doneTasks.filter((_, j) => j !== cindex);
    setdoneTask(cTasks);
  }
  useEffect(()=>{
    if(isloginUser){
      localStorage.setItem(`${isloginUser.username}_doneTasks`, JSON.stringify(doneTasks));
    }
  },[doneTasks, isloginUser]);

  function logincheck(credential:any) {
    setisloginUser(credential);
    localStorage.setItem("loggedinUser",JSON.stringify(credential));
  }
  function logout() {
    setisloginUser(null);
    localStorage.removeItem("loggedinUser");
  }

  return (
    <div className="App">
      <Header checklogin={isloginUser} logoutkaftn={logout} />
      {!isloginUser?(<>
          <LoginForm onLogin={logincheck}/>
          <p>Dummy Users (Use any)</p>
          {users.map(u=>(<small>Username: {u.username}, Password: {u.password}<br/></small>))}
        </>): (
        <>
          <TaskForm onAddTask={addTask} />
          <div className="taskAndComp">
            <TaskList updatedTask={tasks} onDelTask={delTask} onComplete={compTask} />
            <CompletedTask completedTasks={doneTasks} onDelcTask={delcTask}/>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
