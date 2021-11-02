import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../Actions/actions"
class TaskSortControl extends Component {

  onClick = (sortBy, sortValue) => {
      const sort = {
        by: sortBy,
        value: sortValue
      }
    this.props.sort(sort)
  }
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button type="button" className="btn-sort btn btn-primary">
          Xắp xếp
          <i className="fas fa-caret-square-down"></i>
          <ul className="sort-dropdown">
            <li onClick = {() => this.onClick("name", 1)}><i className="fas fa-sort-alpha-down"></i>Tên A-Z</li>
            <li onClick = {() => this.onClick("name", -1)}><i className="fas fa-sort-alpha-down-alt"></i>Tên Z-A</li>
            <li><hr /></li>
            <li onClick = {() => this.onClick("status", 1)}>Trạng thái kích họat</li>
            <li onClick = {() => this.onClick("status", -1)}>Trạng thái ẩn</li>
          </ul>
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      sort: (data) => dispatch(actions.sort(data))
  }
}

export default connect(null, mapDispatchToProps) (TaskSortControl);