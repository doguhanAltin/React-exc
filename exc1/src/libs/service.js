import axios from 'axios'
// async function GetData(user_id){
//     const {data}= await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`)
//     return data    
// }

  const GetData= (user_id)=> { 
      return new  Promise(
          async (resolve)=>{
    const {data}= await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    resolve(data);
}
)
    
  }

export default GetData
