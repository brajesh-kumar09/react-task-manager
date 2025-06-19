import React, { useEffect, useState } from 'react'
import users from '../users';

export default function LoginForm(Props:any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function changehandler(e:any) {
    e.preventDefault();

    const correctuser = users.find(u=> u.username===username && u.password === password);
    if(correctuser){
      Props.onLogin(correctuser);
      setUsername('');
      setPassword('');
    } else {
      setMessage('Invalid username or password');
    }
  }
  useEffect(()=>{
    setMessage('');
  },[username,password]);

  return (
    <div className='LoginForm'>
      <form action="submit" onSubmit={changehandler}>
        <input type="text" placeholder='Enter your Username' id='username' value={username} onChange={(e)=>setUsername(e.target.value)} required/>
        <input type="password" placeholder='Password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        <button className='addbtn' type="submit">Login</button>
      </form>
      <p className='errortxt'>{message}</p>
    </div>
  )
}
