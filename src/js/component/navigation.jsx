import React, { Component } from 'react';

import TodoMain from './micro/TodoMain.jsx';
import Slist from './micro/slist.jsx';
import Modal from './micro/modal.jsx';
import User from './micro/user.jsx';
import Dept from './micro/dept.jsx';
import Logout from './micro/logout.jsx';
import DispTask from './micro/disptask.jsx';

class Navigation extends Component {
    constructor(props) {
        super(props);
         this.state = {
           items : [ 1,2,3,4]
         }
      }
     
    addItem(itemname)
    { 
         
        let newItem = this.state.items;
        newItem.push(itemname);
        this.setState(
            {
                items : newItem
            }
        )
    }
    render() { 
        return ( 
            <div className="nav">
           
            <TodoMain addItem={this.addItem.bind(this)}/> 
            <Slist />
            <Modal />
            <User />
            <Dept />
            <Logout />   
            <DispTask items={this.state.items} />  
           
          </div>
         );
    }
}
 
export default Navigation;
