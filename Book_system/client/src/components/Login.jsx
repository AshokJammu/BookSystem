import React from 'react'
// import style from "./loginModule.css";

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        email: "" ,
        password:""     
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }
  handleLogin = () => {
    const {loginUserData} = this.props
    let obj = {
        email: this.state.email,
        password:this.state.password
    }
    loginUserData(obj)
}

  render(){
      return (
           <>
            <form class="form-inline form-center">
                <div class="form-group mb-2">
                  <label for="staticEmail2" class="sr-only">Email</label>
                  <input type="text" class="form-control" id="staticEmail2"  
                   name="email"
                   onChange={this.handleChange}
                    value={this.state.email} />
                </div>
                <br/>
                <br/>
                <div class="form-group mx-sm-3 mb-2">
                  <label for="inputPassword2" class="sr-only">Password</label>
                  <input type="password" class="form-control" id="inputPassword2" placeholder="Password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password} />
                </div>
                <button type="submit" class="btn btn-primary mb-2">Login</button>
            </form>
             </>
      )
  }
}

export default Login