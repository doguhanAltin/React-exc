import { useState } from "react";

function Input(){
    const [form,setFrom]=useState({"name":"","surname":""})

    const ChangeInput = (e)=> {
        setFrom({...form, [e.target.name]:e.target.value})
    }
    return (<>
     Name <br />
     <input name="name" onChange={ChangeInput} value={form.name}>
     </input>
     <br />
     Surname <br />
     <input name="surname" onChange={ChangeInput} value={form.surname}>
     </input>
     <br />
     <div>  {`${form.name} ${form.surname}`}</div> 
    
     </>)


}

export default Input