import React, { Component } from 'react'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';


export default class ToDoInput extends Component {

    render() {
        const { handleChange, handleSubmit, item, editItem } = this.props
        return (
            <div className='card card-body my-3'>
                <form onSubmit={handleSubmit} >
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <div className='input-group-text bg-primary text-white'>
                                <LibraryBooksIcon />
                            </div>
                        </div>
                        <input
                            onChange={handleChange}
                            value={item}
                            type='text'
                            className='form-control'
                            placeholder='Add a toDo Item'

                        />
                    </div>
                    <button

                        type='submite'
                        className= 
                            {editItem? 'btn btn-block btn-success mt-3' : 'btn btn-block btn-primary mt-3' }>
                             {editItem ? 'Edit Item' : 'Add Item'}
                             </button>
                </form>
            </div>
        )
        
    }
  
}
