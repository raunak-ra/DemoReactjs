import React, { Component } from 'react';

import TodoMain from './micro/TodoMain.jsx';
import Slist from './micro/slist.jsx';
import Modal from './micro/modal.jsx';
import User from './micro/user.jsx';
import Dept from './micro/dept.jsx';
import Logout from './micro/logout.jsx';
import DispTask from './micro/disptask.jsx';

class Navigation extends Component {
    render() { 
        return ( 
            <div className="nav">
           
            <TodoMain /> 
            <Slist />
            <Modal />
            <User />
            <Dept />
            <Logout />   
            <DispTask />  
           
          </div>
         );
    }
}
 
export default Navigation;
