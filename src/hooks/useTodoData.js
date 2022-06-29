import {useState} from 'react';


const useTodoData = () => {
    
    const [todoData, setTodoData] = useState({
        id: "",
        title: "",
        completed: false,
        time: "",
        priority: "",
        tag: ""
      });
      
      function handleChange(event) {
        setTodoData({
          ...todoData,
          [event.target.name]: event.target.value
        });
    }
    return [todoData, handleChange];
}

export default useTodoData;