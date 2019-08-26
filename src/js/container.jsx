import React from 'react';

class Container extends React.Component{
    render(){
        return (
            <div className="container">
            <div className="item">
                <input type="text" className="item_input" value="Task 1" disabled />
                <button className="editButton">EDIT</button>
                <button className="removeButton">REMOVE</button>
             </div>
             </div>
        );
    }
}

module.exports = Container;


