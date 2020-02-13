import React, { Component } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

export default class ToDoItem extends Component {
    render() {
        const { title, handleDeleteItem, handleEditItem } = this.props
        return (
            <li className='list-group-item  text-capitalize d-flex justify-content-between my-'>
                <h6> {title} </h6>
                <div className='todo-icon'>
                    <button onClick={handleEditItem} className='text-success mx-2'>
                        <CreateIcon />

                    </button>

                    <button onClick={handleDeleteItem} className='text-danger mx-2'>
                        <DeleteIcon />
                    </button>

                </div>
            </li>
        )
    }
}
