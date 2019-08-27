import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./component/header.jsx"
import Container from "./component/container.jsx";
import Footer from "./component/footer.jsx";

class App extends React.Component{
    render(){
        return (
            <div>
              <Header />
              <Container />
              <Footer />
            </div>       
        );
    }
}

ReactDOM.render( <App />, document.getElementById('content'));