import React from "react"

const Formfield = (props) => {
    const {label, type, placeholder} = props;
    return (
        <>
        <div class="field">
        <label class="label">{label}</label>
        <div class="control">
          <input class="input" type={type} placeholder={placeholder} />
        </div>
      </div>
      
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
      </div>
      </>
    )
}

export default Formfield