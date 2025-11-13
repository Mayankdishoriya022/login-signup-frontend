import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"

function Signup(){
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [number, setNumber]=useState("")
    const [password, setPassword]=useState("")
    async function Signup(e){
        e.preventDefault()
        const user={
            name:name,
            email:email,
            number:number,
            password:password
        }
        try{
            const res=await axios.post(" https://login-signup-backend-3.onrender.com/signup", user)
            toast.success(res.data.message)

        }
        catch(e){
            toast.error(e.response.data.error)

        }
       
    }
    return(
        <div className="flex justify-center items-center h-[100vh]">
        <form action="" className="border border-black rounded-md p-10 bg-blue-200 flex justify-center flex-col w-[400px]" onSubmit={Signup}>
        <label htmlFor="" className="m-4">Name:</label>
        <input type="text" name="name" id="" onChange={(e)=>setName(e.target.value)} />
        <br />
        <br />
        <label htmlFor="" className="m-4">Email:</label>
        <input type="email" name="email" id="" onChange={(e)=>setEmail(e.target.value)} />
        <br />
        <br />
        <label htmlFor="" className="m-4">Mobile Number:</label>
        <input type="number" name="number" id="" onChange={(e)=>setNumber(e.target.value)} />
        <br />
        <br />
        <label htmlFor="" className="m-4">Password:</label>
        <input type="password" name="password" id="" onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <br />
        <button className="m-4 border border-black rounded-md bg-blue-500" type="submit">Signup</button>
        </form>
        </div>
    )
}

export default Signup 