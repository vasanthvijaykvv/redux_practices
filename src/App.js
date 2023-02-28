import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {add,remove,update} from "./redux/User"
function App() {
  const {userslist} = useSelector(state => state.fuser);
  const [id, setId] = useState("");
  const [ name, setName] = useState("")
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th> Id </th>
          <th> Name</th>
          
        </tr>
      </thead>
      <tbody>
        {userslist.map((u,i) => {
          return (
            <tr key ={i}>
            <td>{i+1}</td>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td><button onClick={() => dispatch(remove(u.id))}>delete</button>
            <button onClick={() => dispatch(update({id : u.id, name : "update"}))}>update</button></td>
           
          </tr>
          )
        })}       
      </tbody>
    </Table>
    <br></br>
    <div><lable>Id :</lable><input type="text" value ={id} 
    onChange={(e) => setId(e.target.value)}/></div>
    <div><lable>Name :</lable><input type="text" value ={name} 
    onChange={(e) => setName(e.target.value)}/> <button onClick={()=>{
             if(!id || !name){
              return
             }
             dispatch(add({id : id, name : name}))
             setId("");
             setName("")
    }}>Add</button></div>
    </div>
  );
}

export default App;
