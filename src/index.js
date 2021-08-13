import React from 'react';
import ReactDOM from 'react-dom';




class App extends React.Component {
    constructor(props){
        super(props);
       
        // this is the ONLY TIME we do direct assignment of this.state... since we are initializing it!
        this.state = { lat: null };
        // move this outside the render method so that you don't end up double-fetching location. This is why it is important to leave state changes outside render method. Double fetching will cause things to slow down otherwise. 
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude });
            },
            // ^ above we are updating state (so have to use setState); and calling the coordinates of our current locations latitude (coords and latitiude are built in with the geolocation function)

            // we did not do this.state.lat = position.coords.latitude. YOU NEVER WANT TO do a direct assignment to your state object!!! The exception is when we initialize our state in our constructor function. 
            (err) => console.log(err)
        );
    }



    render() {
        return <div>Lattitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(
    <App/>, 
    document.querySelector('#root'));