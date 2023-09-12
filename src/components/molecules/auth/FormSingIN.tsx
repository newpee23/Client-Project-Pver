import { useState } from "react";
import InputFieldAuth from "../../atoms/InputFieldAuth"

const FormSingIN = () => {
  const [formDataSingIN, setFormDataSingIN] = useState({
    username: '',
    password: ''
  });

  return (
    <div>
        <InputFieldAuth name="username" value={formDataSingIN.username} label="Username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" type="text" onChange={(e) => setFormDataSingIN({ ...formDataSingIN, username: e.target.value })} placeholder="Username"  required={true}/>
        <InputFieldAuth name="password" value={formDataSingIN.password} label="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" type="password" onChange={(e) => setFormDataSingIN({ ...formDataSingIN, password: e.target.value })} placeholder="Password"  required={true}/>
    </div>
  )
}

export default FormSingIN