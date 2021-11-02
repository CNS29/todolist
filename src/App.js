import './App.css';
import React from "react";
import TaskControl from './Components/TaskControl';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import { connect } from 'react-redux';
import * as actions from "./Actions/actions"

class App extends React.Component {

  openTaskForm = () => {
    if(this.props.updateTask) {
      this.props.openForm();    
    }else {
      this.props.toggleForm();
    }
    this.props.clearUpdateTask(null);
  }

  render() {
    let {isDisplayForm} = this.props;
    return (
      <div className = "container">
        <div className = "text-center mx-15">
          <h1>Quản lý công việc</h1>
        </div>
        <hr/>
        <div className = "row">  
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <TaskForm />
          </div>
          <div className= {isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8": "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button type="button" className="btn btn-primary" onClick = {this.openTaskForm}>
              <span className = "fa fa-plus mr-3"></span>
              Thêm công việc
            </button>
            <TaskControl />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    updateTask: state.updateTask,
    isDisplayForm: state.displayForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleForm: () => dispatch(actions.toggleForm()),
    openForm: () => dispatch(actions.openForm()),
    clearUpdateTask: (task) => dispatch(actions.updateTask(task))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
