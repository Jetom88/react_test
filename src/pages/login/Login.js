import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';


class Login extends Component {
    render() {
        return (
            <div className="loginBody">
                <div className="cotainer">
                    <header>
                        <h1 className="logo">Tomstagram <i className="fas fa-dog"></i></h1>
                    </header>

                    <section>
                        <article>
                            <div class="loginBox">
                                <form>
                                    <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" class="loginInput info" />
                                    <input type="password" placeholder="비밀번호" class="loginInput password" />
                                    <button class="loginBtn" disabled>로그인</button>
                                </form>
                            </div>
                        </article>
                    </section>

                    <footer>
                        <a href="#" target="_blank" class="forget_password">비밀번호를 잊으셨나요?</a>
                    </footer>
                </div>
            </div>
        )
    }

}

export default Login;