import React, { Component } from "react";
class TaskItem extends Component {

  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id) //this.props.task.id: mỗi 1 TaskItem được truyền 1 taak
  }

  deleteTask = () => {
    this.props.deletetask(this.props.task.id)
  }

  updateTask = () => {
    this.props.updateTask(this.props.task)
  }

  render() {
    const {id, task} = this.props;
    return (
      <tr>
        <td>{id + 1}</td>
        <td>{task.taskName}</td>
        <td className="text-center status-item" onDoubleClick = {this.onUpdateStatus}>{task.status ? "Kích hoạt": "Ẩn"}</td>
        <td className="text-center">
          <button type="button" className="btn btn-warning px-3 mr-3" onClick = {this.updateTask}>
            <span className="fas fa-pencil-alt mr-2 mr-3" />Sửa
          </button>
          <button type="button" className="btn btn-danger px-4" onClick = {this.deleteTask}>
            <span className="fa fa-trash mr-3" />Xóa
          </button>
        </td>
      </tr>
    );
  }
}


export default TaskItem;