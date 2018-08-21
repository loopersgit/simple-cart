var React = require('react');
var ReactDOM = require('react-dom');
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navigation from '../components/Navigation.js';

import Input from '../components/inputField.js';

class NameForm extends React.Component {
   
    render() {
        return (
            <div className="container" >
                <Navigation />
                <Input />
            </div>
        );
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);