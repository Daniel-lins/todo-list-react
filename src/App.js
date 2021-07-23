import React, {useState} from 'react';
import './app.css';
import "./Componets/Tasks"
import Tasks from './Componets/Tasks';




const App = () => {

  const [tasks, setTasks] = useState([{
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    }


  ]);


  return (
     <>
    <div className="container">
      <Tasks />
       </div> 
   
    </>

  );


};

export default App;