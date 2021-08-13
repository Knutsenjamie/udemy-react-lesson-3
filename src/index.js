import React from 'react';
import ReactDOM from 'react-dom';




class App extends React.Component {
    constructor(props){
        super(props);
       
     
        this.state = { lat: null, errorMessage: '' };
        
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude });
            },
        
            err => {
                this.setState({ errorMessage: err.message });
            }
        );
    }



    render() {
        return (
            <div>
                Lattitude: {this.state.lat}
                <br/>
                Error: {this.state.error}
            </div>
        );
    }
    // when making a return statement with multiple lines (return ();), don't forget to get rid of the semicolon at the end of the div, since you moved it to the parenthesis. Common mistake!
}

ReactDOM.render(
    <App/>, 
    document.querySelector('#root'));