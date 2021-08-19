import {useState} from 'react'
import uniqueString from 'unique-string';

function Index( {actList ,setActList}) {
    const [isFinished ,setIsFınıshed]=useState()
    let list= actList.filter((item)=>{
        if (isFinished==="1"){
            return item
        }else if (isFinished==="2"){
            return item.isCompleted===true
        }else{
        return item.isCompleted===false}
    })

    return (
        <div>
            
        <ul className="todo-list">
            
            {
            
            list.map((e,index)=>(
             <li key={e.id} > 
              
                     <label className="checkcontainer">{e.actName}
                     <input className="toggle" type="checkbox"  name = {e.id} onChange={(s)=>{ 
                           const copy = [...actList]  // Create a copy
                           copy[copy.findIndex((it)=>{return it.id===s.target.name})].isCompleted=!copy[copy.findIndex((it)=>{return it.id===s.target.name})].isCompleted
                           setActList(copy)
                         
                        }}  checked={ e.isCompleted ? true: false} />
                     
                     <span className="checkmark"></span>
                     <label>           
                 <span className="close" onClick= {
                     (s)=>{
                        let copy = [...actList]  // Create a copy
                        copy=   copy.filter((value)=>{ 
                            return value.id !== s.id;
                        });
                        setActList(copy)
                        console.log(s.target.id)

                        

                     
                     }



                 }>x</span></label>
                     </label>

   
                </li>
    ))}
        </ul>



           <button onClick={()=>setIsFınıshed("1")}>All</button>  
          <button onClick={()=>setIsFınıshed("2")}>Completed</button>  
          <button onClick={()=>setIsFınıshed("3")}>Continue</button>  
        </div>
    )
}
export default Index
