
import React, { Component } from 'react'
import connect from '../../modules/connect'
import './index.scss'

class Login extends Component {
    constructor (props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        console.log(this.props)
    }
    handleSubmit (e) {
        e.preventDefault()
        let username = this.username.value
        let password = this.password.value
        this.props.commons_actions.login({
            username, password,
            success:() => {
                this.props.history.replace('/')
            }
        })
    }

    render() {
        return (

            <div className="app-login">
                <div className="app-location">
                    <h2>Welcome to Locaticus</h2>
                    <div className="line"><span></span></div>
                    <div className="location">
                        <img src="images/Login/location.png" className="img-responsive" alt="" />
                    </div>
                    <form onSubmit = { this.handleSubmit }>
                        <input required ref = { el => this.username = el } type="text" className="text" placeholder="E-mail address"/>
                        <input required ref = { el => this.password = el } type="password" />
                        <div className="submit">
                            <input type="submit" value="Sign in" />
                        </div>
                        <div className="clear"></div>
                        <div className="new">
                            <h3><a href="#">Forgot password ?</a></h3>
                            <h4><a href="#">New here ? Sign Up</a></h4>
                            <div className="clear"></div>
                        </div>
                    </form>
                </div>
                <div className="copy-right">
                        <p>Copyright &copy; 2015.Company name All rights reserved.More Templates 
                            <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from 
                            <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a>
                        </p>
                </div>
            </div>
        )
    }
}

export default connect(Login, 'commons')