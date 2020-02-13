import React, { Component } from 'react'
import ToDoItem from './ToDoItem';

export default class ToDoList extends Component {
    render() {
        console.log(this.props)
        const { items, handleDeleteAll, handleDeleteItem, handleEditItem} = this.props
        return (
            <ul className='list-group my-5'>
                <h3 className='text-capitalize text-center'>
                    ToDo List
                </h3>
                {
                        items.map(item => {
                        return <ToDoItem 
                        title={item.title} 
                        key={item.id}
                        handleDeleteItem={()=> handleDeleteItem(item.id)}
                        handleEditItem={()=> handleEditItem(item.id)}
                       
                        />  
                    })

                }

                <button onClick={handleDeleteAll} type='button' className='btn btn-danger btn-block text-capitalize mt-5'>
                    Clear list
            </ button>
            </ul>

        )
    }
}
