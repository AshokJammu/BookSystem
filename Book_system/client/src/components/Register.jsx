import React from 'react'

class Register extends React.Component{
    render(){
        return(
            <div>
                <form class="form-inline form-center">
                <div class="form-group mb-2">
                  <label for="staticEmail2" class="sr-only">Email</label>
                  <input type="text" class="form-control" id="staticEmail2" value="username" />
                </div>
                <br/>
                <br/>
                <div class="form-group mx-sm-3 mb-2">
                  <label for="inputPassword2" class="sr-only">CreatePassword</label>
                  <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
                </div>
                <div class="form-group mx-sm-3 mb-2">
                  <label for="inputPassword2" class="sr-only">ConfirmPassword</label>
                  <input type="password" class="form-control" id="inputPassword2" placeholder="confirmPassword" />
                </div>
                <div class="form-group mx-sm-3 mb-2">
                  <label for="inputPassword2" class="sr-only">Mobile</label>
                  <input type="text" class="form-control" id="inputPassword2" placeholder="mobile" />
                </div>
                <button type="submit" class="btn btn-primary mb-2">Register</button>
            </form>
            </div>
        )
    }
}

export default Register