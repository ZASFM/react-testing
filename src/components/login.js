import { useState } from "react";
import axios from "axios";

const Login = () => {
   const [error, setError] = useState(false);
   const [username,setUsername]=useState('');
   const [password,setPassword]=useState('');
   const [user,setUser]=useState({});
   const [loading,setLoading]=useState(false);

   const handleClick=async(e)=>{
      e.preventDefault();
      setLoading(true);
      try{
         const {data}=await axios.get('https://jsonplaceholder.typicode.com/users/1');
         setUser(data);
      }
      catch(err){
         console.log(err);
      }
      setLoading(false);
   }

   return (
      <div className="container">
         <span className="user">{user.name}</span>
         <form>
            <input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)} value={username}/>
            <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button disabled={!username||!password} onClick={handleClick}>
               {loading?'Loading':'Login'}
            </button>
            <span data-testid="error" style={{visibility:error?'visible':'hidden'}}>Something went wrong</span>
         </form>
      </div>
   )
}

export default Login;