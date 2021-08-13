import React from 'react';
import ReactDOM from 'react-dom';




class App extends React.Component {
    constructor(props){
        super(props);
        // The first way to initialize state (including the constructor)
        this.state = { lat: null, errorMessage: '' };
    }

    // The second way to initialize state (works the same without needing the constructor)
    state = { lat: null, errorMessage: '' };


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }) ,
            err => this.setState({ errorMessage: err.message })   
        );
    }

        render() {
            if (this.state.errorMessage && !this.state.lat) {
                return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <div> Lattitude: {this.state.lat}</div>
        }

        return <div>Loading...</div>;
    }
}

ReactDOM.render(
    <App/>, 
    document.querySelector('#root'));