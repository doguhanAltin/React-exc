import {useState} from 'react'
import List from './toDoListScreen/List'
import Form from './toDoListScreen/Form'
function Index() {
    const [actList ,setActList] = useState([])
    return (
        <div>
         <Form setActList={setActList} actlist={actList}/>
         <List actList={actList} setActList={setActList} />   
        </div>
    )
}

export default Index
