import React, { Component } from "react";
import TaskItem from "./TaskItem";
import {connect} from "react-redux";
import * as actions from "../Actions/actions"
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
        let value = target.value;
        if(name === "filterStatus") {
            value = +value;
        }
        const data = {
            name: name === "filterName"? value: this.state.filterName,
            status: name === "filterStatus"? value: this.state.filterStatus
        }
        this.setState({
            [name]: value
        })
        this.props.filter(data)
    }
  render() {
        let {task, filterItem, sort} = this.props;
        if(filterItem.name !== "") {
            task = task.filter(taskItem => {
                return taskItem.name.toLowerCase().includes(filterItem.name.toLowerCase()) === true;
            });
        }
        if(filterItem.status > -1) {
            task = task.filter(taskItem => {
                return +taskItem.status === filterItem.status;
            });
        }
        if(filterItem.keyword !== "") {
          task = task.filter(taskItem => {
            return taskItem.name.toLowerCase().includes(filterItem.keyword.toLowerCase()) === true;
          }); 
        }
        if(sort) {
            if(sort.by === "name") {
                task.sort((a, b) => {
                    if(a.name > b.name) {
                    return sort.value;
                    }else if(a.name < b.name) {
                    return -sort.value;
                    } else {
                    return 0;
                    }
                })
            }else {
                task.sort((a, b) => {
                    if(a.status > b.status) {
                    return -sort.value;
                    }else if(a.status < b.status) {
                    return sort.value;
                    } else {
                    return 0;
                    }
                })
            }
        }
        const element = task.map((item, index) => {
            return <TaskItem 
            key = {item.id} 
            id = {index} 
            task = {item} 
            />
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

const mapStateToProps = (state) => {
    return {
        task: state.reducerTasks,
        filterItem: state.filter,
        sort: state.sort
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filter: (data) => dispatch(actions.filter(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TaskList);