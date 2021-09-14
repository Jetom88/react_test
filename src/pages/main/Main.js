import React, { Component } from 'react';
import './Main.scss';

class Main extends Component {
    render() {
        return (
            <div className="MainBody">
                <header>
                    <div className="nav_con">
                        <div className="logo_cons">
                            <img src="/images/instagram.png" alt="logo_img" />
                            <span className="logo_line"></span>
                            <h1 className="Mainlogo">Tomstagram <i className="fas fa-dog"></i></h1>
                        </div>

                        <form>
                            <input type="text" placeholder="검색" />
                            <i className="fas fa-search"></i>
                        </form>

                        <nav>
                            <div className="nav_icons">
                                <img src="/images/explore.png" alt="explore_img" className="nav_icons_bell" />
                                <img src="/images/heart.png" alt="heart_img" />
                                <img src="/images/profile.png" alt="profile_img" />
                            </div>
                        </nav>
                    </div>
                </header>

                <section>
                    <article>
                        <div className="main_container">
                            <div className="feeds_users">
                                <div className="feeds_users_info">
                                    <img src="/images/feed_user.jpeg" alt="feed_user_img" />
                                    <div className="feeds_users_info_txt">
                                        <p className="feeds_users_id">jetom_loopy</p>
                                        <p>Shinhyeri</p>
                                    </div>
                                </div>
                                <i className="fas fa-ellipsis-h"></i>
                            </div>

                            <div className="feeds_main_img">
                                <img src="/images/feed_main_img.png" alt="eed_main_img.png" />
                            </div>

                            <div className="feeds_info">
                                <div className="feeds_icons">
                                    <i className="fas fa-heart icon_padding"></i>
                                    <i className="far fa-comment icon_padding"></i>
                                    <i className="far fa-share-square icon_padding"></i>

                                    <i className="far fa-bookmark"></i>
                                </div>
                                <div className="feeds_comment_box">
                                    <div className="like_uesrs">
                                        <img src="/images/feed_comment_samll_img.jpeg" alt="feeds_commnet_small_img" />
                                        <p><span className="feeds_comment_uesrs_id">Jetom</span>님 <span className="feeds_comment_uesrs_id">외
                                    999명</span>이 좋아합니다.</p>
                                    </div>
                                    <div className="feeds_comment_uesrs">
                                        <p>
                                            <span className="feeds_comment_uesrs_id">Jetom_love</span>
                                            <span>제톰이 귀엽지않나여?!!!</span>
                                            <span className="comment_see_more">더 보기</span>
                                        </p>
                                    </div>
                                    <div className="feeds_comment_like_btn_box">
                                        <p>
                                            <span className="feeds_comment_uesrs_id">loopy_:3</span>
                                            <span> 5살 / 비숑 / 남자애기입니다!</span>
                                        </p>
                                        <p>
                                            <img className="like_btn" alt="like_btn" src="/images/heart.png" />
                                        </p>
                                    </div>
                                    <p className="feeds_comment_tiem">1분전</p>
                                </div>
                            </div>
                            <div className="comment_input">
                                <form>
                                    <input className="comment_input_txt" type="text" placeholder="댓글 달기..." />
                                    <button className="comment_btn" type="submit">게시</button>
                                </form>
                            </div>
                        </div>


                        <div className="sub_container">
                            <div className="feeds_profile">
                                <img src="/images/feed_user.jpeg" alt="feed_comment_small_img" className="feed_comment_small_img" />
                                <div className="small_info">
                                    <p className="feeds_user_info">jetom_loopy</p>
                                    <p>Shinhyeri</p>
                                </div>
                            </div>
                            <div className="feeds_story_container">
                                <div className="feeds_story_box">
                                    <div className="feeds_box_txt">
                                        <p>스토리</p>
                                        {/* <p><a href="#">모두보기</a></p> */}
                                    </div>
                                    <div className="story_users">
                                        <div className="story_users_info">
                                            <img src="/images/story_users_info_img.png" alt="story_users_info_img" />
                                            <div className="story_users_info_txt">
                                                <p>Shinhyeri</p>
                                                <p><span>16분전</span></p>
                                            </div>
                                        </div>
                                        <div className="story_users_info">
                                            <img src="/images/story_users_info_img2.png" alt="story_users_info_img" />
                                            <div className="story_users_info_txt">
                                                <p>SoonE</p>
                                                <p><span>30분전</span></p>
                                            </div>
                                        </div>
                                        <div className="story_users_info">
                                            <img src="/images/story_users_info_img3.png" alt="story_users_info_img" />
                                            <div className="story_users_info_txt">
                                                <p>BaBa</p>
                                                <p><span>45분전</span></p>
                                            </div>
                                        </div>
                                        <div className="story_users_info">
                                            <img src="/images/story_users_info_img4.png" alt="story_users_info_img" />
                                            <div className="story_users_info_txt">
                                                <p>Hacho</p>
                                                <p><span>1시간전</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="feeds_recommend_container">
                                <div className="feeds_recommend_box">
                                    <div className="feeds_box_txt">
                                        <p>회원님을 위한 추천</p>
                                        {/* <p><a href="#">모두보기</a></p> */}
                                    </div>
                                    <div className="feeds_recommend_users">
                                        <div className="recommend_users_info">
                                            <img src="/images/story_users_info_img2.png" alt="story_users_info_img" />
                                            <div className="recommend_users_info_txt">
                                                <p>SoonE</p>
                                                <p className="recommend_txt">JaeSoon님 외 5명이 알고있습니다.</p>
                                            </div>
                                            <div className="users_follow">
                                                {/* <a href="#" className="follow_link">팔로우</a> */}
                                            </div>
                                        </div>
                                        <div className="recommend_users_info">
                                            <img src="/images/story_users_info_img4.png" alt="story_users_info_img" />
                                            <div className="recommend_users_info_txt">
                                                <p>Hacho</p>
                                                <p className="recommend_txt">subin님 외 8명이 알고있습니다.</p>
                                            </div>
                                            <div className="uers_follow">
                                                {/* <a href="#" className="follow_link">팔로우</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="company_info">
                                <address>
                                    <ul>
                                        {/* <li><a href="#" target="_blank">Tomstagram 정보</a></li>
                                        <li><a href="#" target="_blank">지원</a></li>
                                        <li><a href="#" target="_blank">홍보 센터</a></li>
                                        <li><a href="#" target="_blank">API</a></li>
                                        <li><a href="#" target="_blank">채용 정보</a></li>
                                        <li><a href="#" target="_blank">개인정보처리방침</a></li>
                                        <li><a href="#" target="_blank">약관</a></li>
                                        <li><a href="#" target="_blank">디렉터리</a></li>
                                        <li><a href="#" target="_blank">프로필</a></li>
                                        <li><a href="#" target="_blank">해시태그</a></li>
                                        <li><a href="#" target="_blank">언어</a></li> */}
                                    </ul>
                                </address>
                                <p>&#x00A9; 2021 TOMSTAGRAM FROM SHINHYERI</p>
                            </div>

                        </div>
                    </article>
                </section>
            </div >
        )
    }
}

export default Main;