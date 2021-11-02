import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../Actions/actions"
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    }
  }

  onChange = (e) => {
    const target = e.target;
    const value = target.value;
    this.setState({
      keyword: value
    })
  }

  onSearch = () => {
    this.props.onSearch(this.state.keyword)
  }

  render() {

    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
            <input type="text"
                className="form-control mr-3"
                name="keyword" 
                placeholder="Nhập từ khóa...." 
                value = {this.state.keyword}
                onChange = {this.onChange}
            />
            <span className = "input-group-btn">
                <button className="btn btn-primary" type="button" onClick = {this.onSearch}>
                    <span className="fa fa-search mr-3"></span>Tìm
                </button>
            </span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (keyword) => dispatch(actions.search(keyword))

  }
}

export default connect(null, mapDispatchToProps) (Search);