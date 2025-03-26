
import { useState } from 'react'
import { icon } from '../constants'
import Input from '../ui/Input'

const Login = () => {
  

  const [name ,setName] = useState('')
  const [pass ,setPass] = useState('')


  return (<div className='text-center mt-5'>
        <main className="form-signin w-25 m-auto">
      <form>
        <img className="mb-4" src={icon} alt="" width="72" height="57"/>
        <h1 className="h3 mb-3 fw-normal">Please login</h1>

        
        <Input label={"User name"} state={name} setState={setName} />
        <Input label={"password"} state={pass} setState={setPass}/>

        <div className="form-check text-start my-3">
          <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
          <label className="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
        

       
        <button className="btn btn-primary w-100 py-2" type="submit">login</button>
        <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
      </form>
    </main>
    
    </div>
  )}

export default Login