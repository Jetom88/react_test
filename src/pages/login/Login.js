import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './Login.scss';


class Login extends Component {
    goToMain = () => {
        this.props.history.push('/main');
    }

    render() {
        return (
                <div className="loginBody">
                    <div className="cotainer">
                        <header>
                            <h1 className="logo">Tomstagram <i className="fas fa-dog"></i></h1>
                        </header>

                        <section>
                            <article>
                                <div className="loginBox">
                                    <form>
                                        <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" className="loginInput info" />
                                        <input type="password" placeholder="비밀번호" className="loginInput password" />
                                        {/* <Link to="/main">
                                            <button className="loginBtn">로그인</button>
                                        </Link> */}

                                        <button className="loginBtn" onClick={this.goToMain}>로그인</button>
                                    </form>
                                </div>
                            </article>
                        </section>

                        <footer>
                            {/* <a href="#" target="_blank" class="forget_password">비밀번호를 잊으셨나요?</a> */}
                        </footer>
                    </div>
                </div>
        )
    }

}

export default Login;