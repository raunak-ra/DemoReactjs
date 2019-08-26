import React from 'react';
import ReactDOM from 'react-dom';
import Container from "./container.jsx";
import Nav from "./nav.jsx";

class App extends React.Component{
    render(){
        return (
            <div>
              <Nav />
           <Container />
            </div>       
        );
    }
}

ReactDOM.render( <App />, document.getElementById('content'));