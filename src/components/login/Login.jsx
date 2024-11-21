import { useState } from "react";
import {  useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();


  const handlesubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    navigate("/dashboard");
  }


  return (
    <div className="flex items-center justify-center mt-20">

      <form onSubmit={handlesubmit} className="border-orange-500 border  h-[80vh] w-[50vw] rounded-2xl flex items-center justify-center flex-col">
        <h1 className="font-bold text-orange-500 text-4xl">Sign Up</h1>

        <div className="p-5  flex flex-col mt-14">
          <label htmlFor="username" className="text-2xl">Username</label>
          <input required value={username} onChange={e => setUsername(e.target.value)} type="text" className="p-5 text-orange-500 bg-transparent border-orange-300 border rounded-lg h-[7vh] w-[30vw]" />
        </div>

        <div className="p-5  flex flex-col ">
          <label htmlFor="password" className="text-2xl">Password</label>
          <input required type="password" className="p-5 text-orange-500 bg-transparent border-orange-300 border rounded-lg h-[7vh] w-[30vw]" />
        </div>
       
        <button type="submit"  className="bg-orange-400 px-[9rem] py-3 rounded-lg mb-10">Submit</button>
      </form>
    </div>
  )
}