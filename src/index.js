import React from 'react';
import ReactDOM from 'react-dom';



//React requires you to define render()
class App extends React.Component {
    contructor(props){
        //you always need to call super(props); when doing the constructor to initilize state
        super(props);
        // lat is latitude. null because we don't know what the lat is YET
        this.state = { lat: null };
    }



    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );

        return <div>Lattitude: </div>
    }
}

ReactDOM.render(
    <App/>, 
    document.querySelector('#root'));