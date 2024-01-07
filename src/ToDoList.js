import React from 'react'
import Todo from './todo'
import NewToDoForm from './NewToDoForm';
import "./ToDoList.css";
class ToDoList extends React.Component {
    constructor(props){ 
        super(props);
        this.state={todos:[]};
        this.create=this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update=this.update.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.togglecompletion=this.togglecompletion.bind(this);
    }
    create(newTodo)
    {
        this.setState({todos:[...this.state.todos, newTodo]});
    }
    remove(id)
    {
        this.setState({todos:this.state.todos.filter(t=> t.id !== id)});
    }
    update(id,updatedTask)
    {
        const updatedTodos=this.state.todos.map(todo=>{
            if(todo.id === id)
            {
                return{...todo,task:updatedTask};
            }
            return todo;
        });
        this.setState({todos:updatedTodos});
    }
    togglecompletion(id)
    {
        const updatedTodos=this.state.todos.map(todo=>{
            if(todo.id === id)
            {
                return{...todo,completed:!todo.completed};
            }
            return todo;
        });
        this.setState({todos:updatedTodos});
    }
    handleReset()
    {
        this.setState({todos:[]});
    }
    render() {
        const todos=this.state.todos.map(todo =>{
            return <Todo key={todo.id} id={todo.id} task={todo.task} completed={todo.completed} removeTodo={this.remove} updateTodo={this.update} toggleTodo={this.togglecompletion}/>
        })
        return(
            <div className='TodoList'>
                <center><h1>Todo List!</h1></center>
                <button className='al-item' onClick={this.handleReset}>Reset</button>
                <ul>
                    {todos}
                </ul>
                <NewToDoForm createTodo={this.create}/>
            </div>
        )
    }
}
export default ToDoList;