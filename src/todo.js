import React from 'react'
import "./Todo.css";
class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state={isEditing:false, task:this.props.task};
        this.handleRemove=this.handleRemove.bind(this);
        this.toggle=this.toggle.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleupdate=this.handleupdate.bind(this);
        this.handleTogglee=this.handleTogglee.bind(this);
       
    }
    handleRemove(){
        this.props.removeTodo(this.props.id);
    }
    toggle(){
        this.setState({isEditing:!this.state.isEditing});
    }
    handleupdate(evt)
    {
        evt.preventDefault();
        this.props.updateTodo(this.props.id,this.state.task);
        this.setState({isEditing:false});
    }
    handleChange(evt)
    {
        this.setState({[evt.target.name]:evt.target.value});
    }
    handleTogglee(evt)
    {
        this.props.toggleTodo(this.props.id);
    }
    render() {
        let result;
        if(this.state.isEditing)
        {
            result=(
                <div className='Todo'>
                    <form className='Todo-edit-form' onSubmit={this.handleupdate}>
                        <input type="text" value={this.state.task} name="task" onChange={this.handleChange}/>
                        <button>Save</button>
                    </form>
                </div>
            );
        }
        else {
            result=(
                <div className='Todo'>
                    <li className={this.props.completed ?'Todo-task completed':'Todo-task'} onClick={this.handleTogglee}>{this.props.task}</li>
                    <div className='Todo-buttons'>
                        <button onClick={this.toggle}><i class="fas fa-pen"></i></button>
                        <button onClick={this.handleRemove}><i class="fas fa-trash"></i></button>
                    </div>
            </div>
            );
        }
        return result;

    }
}
export default Todo;