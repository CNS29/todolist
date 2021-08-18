import './App.css';
import React from "react";
import TaskControl from './Components/TaskControl';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      task: [],
      isDisplayTaskForm: false,
      updateTask: null
    }
  }

  componentDidMount() {
    if(localStorage && localStorage.getItem("task")) {
      this.setState({
        task: JSON.parse(localStorage.getItem("task")),
      })
    }
  }

  // Tạo chuỗi ngẫu nhiên vd: 5c1454d9-b1cc-1346-1cb7-c4aa46e46d0c
  s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID = () => {
    return this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + this.s4() + this.s4();
  }

  openTaskForm = () => {
    if(this.state.updateTask && this.state.isDisplayTaskForm) {
      this.setState({
        isDisplayTaskForm: true,
        updateTask: null
      })
    }else {
      this.setState({
        isDisplayTaskForm: !this.state.isDisplayTaskForm
      })
    }
  }

  closeTaskForm = (ischeck) => {
    this.setState({
      isDisplayTaskForm: ischeck
    })
  }

  onSubmit = (data) => {
    const {task} = this.state;
    if(!data.id && data.id === "") {
      const newData = {
        id: this.generateID(),
        taskName: data.name,
        status: data.status
      }
      task.push(newData)
    }else {
      const index = this.findIndex(data.id)
      const newData = {
        id: data.id,
        taskName: data.name,
        status: data.status
      }
      task[index] = newData;
    }
    this.setState({
      task : task,
      updateTask: null
    })
    localStorage.setItem("task", JSON.stringify(task));
  }

  findIndex = (data) => {
    const {task} = this.state;
    for(let i = 0; i < task.length; i++) {
      if(task[i].id === data) {
        return i;
      }
    }
  }

  onUpdateStatus = (data) => {
    const {task} = this.state;
    const index = this.findIndex(data)
    task[index].status = !task[index].status;
    this.setState({
      task: task
    })
    localStorage.setItem("task", JSON.stringify(task));
  }

  deleteTask = (data) => {
    const {task} = this.state;
    const index = this.findIndex(data)
    task.splice(index, 1)
    this.setState({
      task: task
    })
    localStorage.setItem("task", JSON.stringify(task));
    this.closeTaskForm();
  }

  updateTask = (data) => {
    if(data) {
      this.setState({
        isDisplayTaskForm: true,
        updateTask: data
      })
    }
  }
  
  onFilter = (filterName, filterStatus) => {
    filterStatus = +filterStatus
    console.log(filterName,filterStatus)
  }

  render() {
    const {task, isDisplayTaskForm, updateTask} = this.state;
    const displayTaskForm = isDisplayTaskForm ? <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <TaskForm onSubmit = {this.onSubmit} closeTaskForm = {this.closeTaskForm} updateTask = {updateTask}/></div> : "";
    return (
      <div className = "container">
        <div className = "text-center mx-15">
          <h1>Quản lý công việc</h1>
        </div>
        <hr/>
        <div className = "row">  
          {displayTaskForm}
          <div className= {isDisplayTaskForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8": "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button type="button" className="btn btn-primary" onClick = {this.openTaskForm}>
              <span className = "fa fa-plus mr-3"></span>
              Thêm công việc
            </button>
            <TaskControl />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList 
                data = {task} 
                onUpdateStatus = {this.onUpdateStatus} 
                deletetask = {this.deleteTask}  
                updateTask = {this.updateTask}
                onFilter = {this.onFilter}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
