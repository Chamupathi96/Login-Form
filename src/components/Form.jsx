import { useState } from "react"

const Form = () => {

const [userName,setUserName] = useState("");
const [password,setPassword] = useState("");

//State to store submitted data
const [submittedData,setSubmittedData] = useState(null);

const handleSubmit = (e) =>{
  e.preventDefault(); //prevent page reload;
  setSubmittedData({userName,password}); //save the submitted data
  setUserName(""); //Clear the UserName Field;
  setPassword(""); //Clear the Password Field;
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
       <h1 className="text-3xl font-bold mb-6">Login Form</h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-80 space-y-4">
       <div>
         <label className="block text-gray-700 font-semibold mb-2">
              <strong>userName</strong>
              <input 
              type="text"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                placeholder="Enter Your User Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
         </label>
         
       </div>
       <div>
         <label className="block text-gray-700 font-semibold mb-2">
              <strong>password</strong>
              <input 
              type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter Your Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
         </label>
         
       </div>
       <button type="submit" 
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
       >Login</button>
       </form>


        {/* Display submitted data */}

        {submittedData && (
            <div className="mt-8 p-4 bg-green-100 rounded-md shadow-lg">
              <h2 className="text-xl font-bold mb-4">Submitted Data :</h2>
              <p><strong>UserName:</strong>{submittedData.userName}</p>
              <p><strong>Password:</strong>{submittedData.password}</p>
            </div>
        )}


    </div>
   
  )
}

export default Form
