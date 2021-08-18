import React, { Component } from "react";
import TaskItem from "./TaskItem";
class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: "",
            filterStatus: -1
        }
    }

    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.props.onFilter(
            name === "filterName" ? value: this.state.filterName,
            name === "filterStatus" ? value: this.state.filterStatus
        )
        this.setState({
            [name]: value
        })
    }
  render() {
        const {data} = this.props;
        const element = data.map((item, index) => {
            return <TaskItem 
            key = {item.id} 
            id = {index} 
            task = {item} 
            onUpdateStatus = {this.props.onUpdateStatus} 
            deletetask = {this.props.deletetask}
            updateTask = {this.props.updateTask}/>
        })
    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Trạng thái</th>
                    <th className="text-center">Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input type="text" 
                        name="filterName"
                        className="form-control"
                        onChange = {this.onChange}
                        />
                    </td>
                    <td>
                        <select 
                        name="filterStatus"
                        onChange = {this.onChange}
                        className="form-control">
                            <option value={-1}>Tất cả</option>
                            <option value={0}>Ẩn</option>
                            <option value={1}>Kích hoạt</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
                {element}
            </tbody>
        </table>
    )
  }
}


export default TaskList;