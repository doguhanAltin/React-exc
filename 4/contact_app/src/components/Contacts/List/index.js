import {useState} from 'react'

function List({contacts}) {
    const [filterText, setFilterText]= useState("")
    const filtered= contacts.filter((item)=>{
        return Object.keys(item).some((key)=>
        item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase()))
    })
    return (
        <div>
        <h1>CONTACTS</h1>
        <input placeholder="Ara" value={filterText} onChange={(e)=>{setFilterText(e.target.value)}}></input>
        <ul className="list">
            {filtered.map((item ,index)=> (
                <li key={index}>
                    <span>{item.fullname}</span>
                    <span>{item.phone_number}</span>
                    </li>
            ))}
        </ul>
        </div>
    )
}

export default List
