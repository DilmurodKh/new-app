import { useState } from 'react'
import { icon } from '../constants'
import Input from '../ui/Input'

const Register = () => {
  
  const [email ,setEmail] = useState('')
  const [name ,setName] = useState('')
  const [pass ,setPass] = useState('')


  return (<div className='text-center mt-5'>
        <main className="form-signin w-25 m-auto">
      <form>
        <img className="mb-4" src={icon} alt="" width="72" height="57"/>
        <h1 className="h3 mb-3 fw-normal">Register</h1>

        <Input label={"Email"} state={email} setState={setEmail}/>
        <Input label={"User name"} state={name} setState={setName} />
        <Input label={"password"} state={pass} setState={setPass}/>
        

       
        <button className="btn btn-primary w-100 py-2" type="submit">Register</button>
        <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
      </form>
    </main>
    
    </div>
  )}

export default Register