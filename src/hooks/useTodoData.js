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
        const {name, value, type, checked} = event.target

        setTodoData({
          ...todoData,
          [name]: type === "checkbox" ? checked : value
        });
    }
    return [todoData, handleChange, setTodoData];
}

export default useTodoData;