import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(){
        super()
    }

    render() {
        return (
            <div className="container">
                sdfsdf
            </div>
        )
    }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);

