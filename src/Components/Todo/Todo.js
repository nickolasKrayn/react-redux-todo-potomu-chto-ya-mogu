import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Todo.css';

class Todo extends Component {

    render() {
        let todoStyle = {};

        if (this.props.isChecked) {
            todoStyle = {
                textDecoration: 'line-through'
            };
        }

        return (<div className="todo-container">
            <div className="todo-container__task-id">{this.props.id}</div>
            <div className="todo-container__task-title" style={todoStyle}>{this.props.title}</div>

            <div className="todo-container__task-delete">
                <button onClick={this.props.deleteTask}>delete</button>
            </div>
            <div className="todo-container__task-check-box">
                <label>
                    <input
                        name="isFinished"
                        type="checkbox"
                        checked={this.props.isChecked}
                        onChange={this.props.changeStatus} />
                </label>
            </div>
            <div className="cb"></div>
        </div>);
    }
}

const mapStateToProps = (state, props) => {
    return props;
}

const mapMergeStateWithDipatch = (props, { dispatch }) => {
    let id = props.id;
    return {
        ...props,
        changeStatus: () => {
            dispatch({ type: 'CHANGE_TASK_STATUS', id: id, isChecked: !props.isChecked });
        },
        deleteTask: () => {
            dispatch({ type: 'DELETE_TASK', id: id });
        }
    };
}

export default connect(mapStateToProps, null, mapMergeStateWithDipatch)(Todo);