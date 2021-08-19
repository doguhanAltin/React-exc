import {useEffect, useState} from 'react'
import uniqueString from 'unique-string';


function Index({setActList ,actlist}) {
    const [actNameInput,setActNameInput] = useState({"actName":"","isCompleted":false,"id":""});

    useEffect(()=>{
        setActNameInput({"actName":"","isCompleted":false,"id":uniqueString()})
    },[actlist])



    const submitForm = (e)=>{
        e.preventDefault()
        if(actNameInput.actName===""){
            return false
        }
        setActList([...actlist, actNameInput])
    }

    return (
<form onSubmit= {submitForm}> 
    <input className="new-todo" name ="actName" placeholder="Add activity"  value ={actNameInput.actName} onChange= {(e)=>{
        setActNameInput({...actNameInput,[e.target.name]:e.target.value} )
    }}/>

</form>
    )
}

export default Index
