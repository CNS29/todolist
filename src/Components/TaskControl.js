import React, { Component } from "react";
import Search from "./Search";
import TaskSortControl from "./TaskSortControl";


class TaskControl extends Component {
  render() {
    return (
      <div className="row mt-15">
        {/* Search */}
        <Search />
        {/* Sort */}
        <TaskSortControl />
      </div>)
  }
}

export default TaskControl;