import React from 'react';
import ReactDOM from 'react-dom';




class App extends React.Component {
    constructor(props){
        super(props);
       
        this.state = { lat: null };
    }



    render() {
        // never want to initialize state within render method. It will get called too frequently otherwise.
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );

        return <div>Lattitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(
    <App/>, 
    document.querySelector('#root'));