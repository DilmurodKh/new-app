import React from 'react'

const Input = ({label,state, setState}) => {
  return (
    <>
        <div className="form-floating">
          <input
           type="email"
            class="form-control mb-2"
            id="floatingInput"
            placeholder={label}
            value={state}
            onChange={e=>{setState(e.target.value)}}
            />
          <label for="floatingInput">{label}</label>
         </div>
    </>
  )
}

export default Input