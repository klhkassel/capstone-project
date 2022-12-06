import React, { useState } from 'react'

class AddFeeding extends React.Component {
    state = {
        dog: '',
        user: '',
        date: ''
    };
    
    add = (e) => {
        e.preventDefault();
        if (this.state.date ==='' || this.state.user ==='') {
            alert('All fields mandatory');
            return;
        }
        this.props.addFeedingHandler(this.state);
        this.setState({ date: '', user: ''});
    }
    
    // function generateDate(){
    //     let currentTime = new Date();                
    //     return currentTime;
    // };

    render() {
        return (
            <div className='feeding'>
                    <h1>Feeding</h1>
                <form className='feeding-form' onSubmit={this.add}>
                    <h3>Add Walk</h3>
                    <div className='field'>
                    <label>Date:</label>
                        <input 
                        type='text'
                        name='date'
                        value={this.state.date}
                        onChange={(e) => this.setState({date: e.target.value})}         
                        /><br />
                    <label>User:</label>
                    <input 
                        type='text'
                        name='user'
                        value={this.state.user}
                        onChange={(e) => this.setState({user: e.target.value})}          
                        /><br />
                    <button>Add Feeding</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddFeeding;
