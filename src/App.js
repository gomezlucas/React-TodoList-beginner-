import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import ToDoInput from './components/ToDoInput';
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'


class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      title: this.state.item,
      id: this.state.id
    }

    this.setState({
      items: [...this.state.items, newItem],
      item: '',
      editItem: false,
      id: uuid()
    })
    console.log(this.state)
  }

  handleDeleteAll = () => {
    this.setState({
      items: []
    })
  }
  handleDeleteItem = (id) => {
    const newArray = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: newArray

    })


  }

  handleEditItem = (id) => {
    const item = this.state.items.filter(item => item.id === id)[0]
    const newArray = this.state.items.filter(item => item.id !== id)

    this.setState({
      items: newArray,
      item: item.title,
      id: id,
      editItem: true
    })

  }

  render() {
    return (
      <>
        <div className='container'>
          <div className='row'>
            <div className='col-10 col-md-8 mx-auto mt-4'>
              <h3 className='text-capitalize text-center'>
                To Do Input
            </h3>
              <ToDoInput
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                item={this.state.item}
                editItem={this.state.editItem}
              />
              <ToDoList
                items={this.state.items}
                handleDeleteAll={this.handleDeleteAll}
                handleDeleteItem={this.handleDeleteItem}
                handleEditItem={this.handleEditItem}
              />
            </div>
          </div>
        </div>

      </>
    )
  }
}


export default App
