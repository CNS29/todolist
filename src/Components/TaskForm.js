import React, { Component } from "react";
import {connect} from "react-redux";
import * as actions from "../Actions/actions";
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false
    }
  }

  componentWillReceiveProps(nextProps) {
    const data = nextProps.updateTask;
    if(data) {
      this.setState({
        id: data.id,
        name: data.name,
        status: data.status
      })
    }else {
      this.setState({
        id: "",
        name: "",
        status: false
      })
    }
  }

  onChange = (e) => {
    const target = e.target;
    const taskName = target.name;
    let value = target.value;
    if(taskName === "status") {
       value = value === "true" ? true: false
    }
    this.setState({
      [taskName]: value
    })
  }

  closeTaskForm = () => {
    this.props.closeForm()
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state)
    this.onClear();
    this.closeTaskForm()
  }

  onClear = () => {
    this.setState({
      name: "",
      status: false
    })
  }

  render() {
    const {name, status} = this.state;
    if(!this.props.isDisplayForm) return "";
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {this.props.updateTask ? "Cập Nhật Công Việc": "Thêm công việc"}
            <span className="fa fa-times-circle" onClick = {this.closeTaskForm}/>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit = {this.onSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input type="text" className="form-control" name="name" value = {name} onChange = {this.onChange}/>
            </div>
            <label>Trạng Thái :</label>
            <select className="form-control" name="status" value = {status} onChange = {this.onChange}>
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning mr-3">
                <span className="fa fa-plus mr-3" />Lưu Lại
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger" onClick = {this.onClear}>
                <span className="fa fa-close mr-3" />Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.displayForm,
    updateTask: state.updateTask
  }
} 

const mapSidpatchToProps = (dispatch) => {
  return {
    addTask: (task) => {
      dispatch(actions.addTask(task))
    },
    closeForm: () => dispatch(actions.closeForm())
  }
}

export default connect(mapStateToProps, mapSidpatchToProps)(TaskForm);