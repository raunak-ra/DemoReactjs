import React from 'react';

class Nav extends React.Component{
    render(){
        return (
            <div className="input_div"> 
            <input type="text" class="input" placeholder="Task to do.." />
          <button className="addButton"><i className="fas fa-plus"></i></button>
          </div>
        );
    }
}

module.exports = Nav;