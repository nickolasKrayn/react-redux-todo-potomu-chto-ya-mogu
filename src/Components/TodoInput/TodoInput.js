import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskTitle: '',
        }

        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    handleChangeInput(event) {
        this.setState({
            taskTitle: event.target.value,
        });
    }

    render() {
        var styles = {
            padding: '15px',
            textAlign: 'center',
        };

        return (
            <div style={styles}>
                <input type="text" value={this.state.taskTitle} onChange={this.handleChangeInput} />
                <button task_title={this.state.taskTitle} onClick={(event) => {
                    this.props.addTask(this.state.taskTitle);
                    this.setState({ taskTitle: '' });
                }}>Add</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        addTask: (taskTitle) => {
            if (taskTitle != '') {
                dispatch({ type: 'ADD_TASK', title: taskTitle });
            }
        }
    }
}

export default connect(null, mapDispatchToProps)(TodoInput);