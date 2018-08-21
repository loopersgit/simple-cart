import React from 'react';
import axios from '../../node_modules/axios';
class Input extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {userName:'',password:''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       this.state = {inputList: [{id: 1,label: 'User Name',user: 'userName', handleChange: this.handleChange('userName')},
            { id: 2,label: 'Password',user: 'password',handleChange: this.handleChange('password')}]}

        }

    handleChange(key) {
        return function (index) {
            let inputList = this.state.inputList;

        inputList[index][key] = this.refs[key].value;
            this.setState({inputList});
        }.bind(this);

    }

    handleSubmit(event) {


        var data = {
            userName: this.state.userName,
            password: this.state.password,
        }

        // const url2 = 'http://localhost:3000/api/user/login';
        // axios.post(url2,{userCredentials:data})
        //     .then(resp => {
        //         let result = resp.data;
        //         console.log(result.data);
        //     })
        //     .catch(error => {
        //         if (error) {
        //             console.log(error);
        //         }
        //     })
        event.preventDefault();
    }

    render() {
        return (
            <div className=" row text-center">
                <form onSubmit={this.handleSubmit} className="col-lg-12 form-group">
                    {this.state.inputList.map((item, index) => <label key={item.id} className="col-lg-12">
                        {item.label}: <br />
                        <input key={item.id} type="text" className="form-control" ref={item['user']} onChange={item.handleChange.bind(this,index)} />
                    </label>)}
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Input;