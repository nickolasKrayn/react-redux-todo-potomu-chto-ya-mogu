import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from './../Todo/Todo';

class TodoList extends Component {
    render() {
        return (<div>
            {this.props.TodoList.map((item) => (
                <Todo key={item.id} id={item.id} title={item.title} isChecked={item.checked} />
            ))}
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        TodoList: state.TodoListReducer
    }
}

export default connect(mapStateToProps)(TodoList);