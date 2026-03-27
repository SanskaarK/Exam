import { Link } from 'react-router-dom';

const SingleBlog = () => {
  return (
    <>
      {/*================Home Banner Area =================*/}
      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="banner_content text-center">
                  <h2>Blog Details</h2>
                  <div className="page_link">
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/single-blog">Blog Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Home Banner Area =================*/}

      {/*================Blog Area =================*/}
      <section className="blog_area single-post-area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <div className="single-post row">
                <div className="col-lg-12">
                  <div className="feature-img">
                    <img className="img-fluid" src="/img/blog/feature-img1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-3  col-md-3">
                  <div className="blog_info text-right">
                    <div className="post_tag">
                      <Link to="#">Food,</Link>
                      <Link className="active" to="#">Technology,</Link>
                      <Link to="#">Politics,</Link>
                      <Link to="#">Lifestyle</Link>
                    </div>
                    <ul className="blog_meta list">
                      <li><Link to="#">Mark wiens<i className="ti-user"></i></Link></li>
                      <li><Link to="#">12 Dec, 2017<i className="ti-calendar"></i></Link></li>
                      <li><Link to="#">1.2M Views<i className="ti-eye"></i></Link></li>
                      <li><Link to="#">06 Comments<i className="ti-comment"></i></Link></li>
                    </ul>
                    <ul className="social-links">
                      <li><Link to="#"><i className="ti-facebook"></i></Link></li>
                      <li><Link to="#"><i className="ti-twitter"></i></Link></li>
                      <li><Link to="#"><i className="ti-github"></i></Link></li>
                      <li><Link to="#"><i className="ti-linkedin"></i></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 blog_details">
                  <h2>Astronomy Binoculars A Great Alternative</h2>
                  <p className="excert">
                    MCSE boot camps have its supporters and its detractors. Some people do not understand
                    why you should have to spend money on boot camp when you can get the MCSE study
                    materials yourself at a fraction.
                  </p>
                  <p>
                    Boot camps have its supporters and its detractors. Some people do not understand why
                    you should have to spend money on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has the willpower to actually
                    sit through a self-imposed MCSE training. who has the willpower to actually sit through
                    a self-imposed
                  </p>
                  <p>
                    Boot camps have its supporters and its detractors. Some people do not understand why
                    you should have to spend money on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has the willpower to actually
                    sit through a self-imposed MCSE training. who has the willpower to actually sit through
                    a self-imposed
                  </p>
                </div>
                <div className="col-lg-12">
                  <div className="quotes">
                    MCSE boot camps have its supporters and its detractors. Some people do not understand
                    why you should have to spend money on boot camp when you can get the MCSE study
                    materials yourself at a fraction of the camp price. However, who has the willpower to
                    actually sit through a self-imposed MCSE training.
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <img className="img-fluid" src="/img/blog/post-img1.jpg" alt="" />
                    </div>
                    <div className="col-6">
                      <img className="img-fluid" src="/img/blog/post-img2.jpg" alt="" />
                    </div>
                    <div className="col-lg-12 mt-25">
                      <p>
                        MCSE boot camps have its supporters and its detractors. Some people do not
                        understand why you should have to spend money on boot camp when you can get the
                        MCSE study materials yourself at a fraction of the camp price. However, who has
                        the willpower.
                      </p>
                      <p>
                        MCSE boot camps have its supporters and its detractors. Some people do not
                        understand why you should have to spend money on boot camp when you can get the
                        MCSE study materials yourself at a fraction of the camp price. However, who has
                        the willpower.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navigation-area">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                    <div className="thumb">
                      <Link to="#"><img className="img-fluid" src="/img/blog/prev.jpg" alt="" /></Link>
                    </div>
                    <div className="arrow">
                      <Link to="#"><i className="text-white ti-arrow-left"></i></Link>
                    </div>
                    <div className="detials">
                      <p>Prev Post</p>
                      <Link to="#">
                        <h4>Space The Final Frontier</h4>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                    <div className="detials">
                      <p>Next Post</p>
                      <Link to="#">
                        <h4>Telescopes 101</h4>
                      </Link>
                    </div>
                    <div className="arrow">
                      <Link to="#"><i className="text-white ti-arrow-right"></i></Link>
                    </div>
                    <div className="thumb">
                      <Link to="#"><img className="img-fluid" src="/img/blog/next.jpg" alt="" /></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comments-area">
                <h4>05 Comments</h4>
                <div className="comment-list">
                  <div className="single-comment justify-content-between d-flex">
                    <div className="user justify-content-between d-flex">
                      <div className="thumb">
                        <img src="/img/blog/c1.jpg" alt="" />
                      </div>
                      <div className="desc">
                        <h5><Link to="#">Emilly Blunt</Link></h5>
                        <p className="date">December 4, 2017 at 3:12 pm </p>
                        <p className="comment">
                          Never say goodbye till the end comes!
                        </p>
                      </div>
                    </div>
                    <div className="reply-btn">
                      <Link to="#" className="btn-reply text-uppercase">reply</Link>
                    </div>
                  </div>
                </div>
                <div className="comment-list left-padding">
                  <div className="single-comment justify-content-between d-flex">
                    <div className="user justify-content-between d-flex">
                      <div className="thumb">
                        <img src="/img/blog/c2.jpg" alt="" />
                      </div>
                      <div className="desc">
                        <h5><Link to="#">Elsie Cunningham</Link></h5>
                        <p className="date">December 4, 2017 at 3:12 pm </p>
                        <p className="comment">
                          Never say goodbye till the end comes!
                        </p>
                      </div>
                    </div>
                    <div className="reply-btn">
                      <Link to="#" className="btn-reply text-uppercase">reply</Link>
                    </div>
                  </div>
                </div>
                <div className="comment-list left-padding">
                  <div className="single-comment justify-content-between d-flex">
                    <div className="user justify-content-between d-flex">
                      <div className="thumb">
                        <img src="/img/blog/c3.jpg" alt="" />
                      </div>
                      <div className="desc">
                        <h5><Link to="#">Annie Stephens</Link></h5>
                        <p className="date">December 4, 2017 at 3:12 pm </p>
                        <p className="comment">
                          Never say goodbye till the end comes!
                        </p>
                      </div>
                    </div>
                    <div className="reply-btn">
                      <Link to="#" className="btn-reply text-uppercase">reply</Link>
                    </div>
                  </div>
                </div>
                <div className="comment-list">
                  <div className="single-comment justify-content-between d-flex">
                    <div className="user justify-content-between d-flex">
                      <div className="thumb">
                        <img src="/img/blog/c4.jpg" alt="" />
                      </div>
                      <div className="desc">
                        <h5><Link to="#">Maria Luna</Link></h5>
                        <p className="date">December 4, 2017 at 3:12 pm </p>
                        <p className="comment">
                          Never say goodbye till the end comes!
                        </p>
                      </div>
                    </div>
                    <div className="reply-btn">
                      <Link to="#" className="btn-reply text-uppercase">reply</Link>
                    </div>
                  </div>
                </div>
                <div className="comment-list">
                  <div className="single-comment justify-content-between d-flex">
                    <div className="user justify-content-between d-flex">
                      <div className="thumb">
                        <img src="/img/blog/c5.jpg" alt="" />
                      </div>
                      <div className="desc">
                        <h5><Link to="#">Ina Hayes</Link></h5>
                        <p className="date">December 4, 2017 at 3:12 pm </p>
                        <p className="comment">
                          Never say goodbye till the end comes!
                        </p>
                      </div>
                    </div>
                    <div className="reply-btn">
                      <Link to="#" className="btn-reply text-uppercase">reply</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment-form">
                <h4>Leave a Reply</h4>
                <form>
                  <div className="form-group form-inline">
                    <div className="form-group col-lg-6 col-md-6 name">
                      <input type="text" className="form-control" id="name" placeholder="Enter Name" onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Enter Name'} />
                    </div>
                    <div className="form-group col-lg-6 col-md-6 email">
                      <input type="email" className="form-control" id="email" placeholder="Enter email address"
                        onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Enter email address'} />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" onFocus={(e) => e.target.placeholder = ''}
                      onBlur={(e) => e.target.placeholder = 'Subject'} />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control mb-10" rows="5" name="message" placeholder="Messege"
                      onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Messege'} required=""></textarea>
                  </div>
                  <Link to="#" className="primary-btn">Post Comment</Link>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search Posts" />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button"><i className="ti-search"></i></button>
                    </span>
                  </div>{/* /input-group */}
                  <div className="br"></div>
                </aside>
                <aside className="single_sidebar_widget author_widget">
                  <img className="author_img rounded-circle" src="/img/blog/author.png" alt="" />
                  <h4>Charlie Barber</h4>
                  <p>Senior blog writer</p>
                  <div className="social_icon">
                    <Link to="#"><i className="ti-facebook"></i></Link>
                    <Link to="#"><i className="ti-twitter"></i></Link>
                    <Link to="#"><i className="ti-github"></i></Link>
                    <Link to="#"><i className="ti-linkedin"></i></Link>
                  </div>
                  <p>Boot camps have its supporters andit sdetractors. Some people do not understand why you
                    should have to spend money on boot camp when you can get. Boot camps have itssuppor
                    ters andits detractors.</p>
                  <div className="br"></div>
                </aside>
                <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title">Popular Posts</h3>
                  <div className="media post_item">
                    <img src="/img/blog/popular-post/post1.jpg" alt="post" />
                    <div className="media-body">
                      <Link to="/single-blog">
                        <h3>Space The Final Frontier</h3>
                      </Link>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="/img/blog/popular-post/post2.jpg" alt="post" />
                    <div className="media-body">
                      <Link to="/single-blog">
                        <h3>The Amazing Hubble</h3>
                      </Link>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="/img/blog/popular-post/post3.jpg" alt="post" />
                    <div className="media-body">
                      <Link to="/single-blog">
                        <h3>Astronomy Or Astrology</h3>
                      </Link>
                      <p>03 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="/img/blog/popular-post/post4.jpg" alt="post" />
                    <div className="media-body">
                      <Link to="/single-blog">
                        <h3>Asteroids telescope</h3>
                      </Link>
                      <p>01 Hours ago</p>
                    </div>
                  </div>
                  <div className="br"></div>
                </aside>
                <aside className="single_sidebar_widget ads_widget">
                  <Link to="#"><img className="img-fluid" src="/img/blog/add.jpg" alt="" /></Link>
                  <div className="br"></div>
                </aside>
                <aside className="single_sidebar_widget post_category_widget">
                  <h4 className="widget_title">Post Catgories</h4>
                  <ul className="list cat-list">
                    <li>
                      <Link to="#" className="d-flex justify-content-between">
                        <p>Technology</p>
                        <p>37</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="d-flex justify-content-between">
                        <p>Lifestyle</p>
                        <p>24</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="d-flex justify-content-between">
                        <p>Fashion</p>
                        <p>59</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="d-flex justify-content-between">
                        <p>Art</p>
                        <p>29</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="d-flex justify-content-between">
                        <p>Food</p>
                        <p>15</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="d-flex justify-content-between">
                        <p>Architecture</p>
                        <p>09</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="d-flex justify-content-between">
                        <p>Adventure</p>
                        <p>44</p>
                      </Link>
                    </li>
                  </ul>
                  <div className="br"></div>
                </aside>
                <aside className="single-sidebar-widget newsletter_widget">
                  <h4 className="widget_title">Newsletter</h4>
                  <p>
                    Here, I focus on a range of items and features that we use in life without
                    giving them a second thought.
                  </p>
                  <div className="form-group d-flex flex-row">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="ti-email" aria-hidden="true"></i></div>
                      </div>
                      <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter email"
                        onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Enter email'} />
                    </div>
                    <Link to="#" className="bbtns">Subcribe</Link>
                  </div>
                  <p className="text-bottom">You can unsubscribe at any time</p>
                  <div className="br"></div>
                </aside>
                <aside className="single-sidebar-widget tag_cloud_widget">
                  <h4 className="widget_title">Tag Clouds</h4>
                  <ul className="list">
                    <li><Link to="#">Technology</Link></li>
                    <li><Link to="#">Fashion</Link></li>
                    <li><Link to="#">Architecture</Link></li>
                    <li><Link to="#">Fashion</Link></li>
                    <li><Link to="#">Food</Link></li>
                    <li><Link to="#">Technology</Link></li>
                    <li><Link to="#">Lifestyle</Link></li>
                    <li><Link to="#">Art</Link></li>
                    <li><Link to="#">Adventure</Link></li>
                    <li><Link to="#">Food</Link></li>
                    <li><Link to="#">Lifestyle</Link></li>
                    <li><Link to="#">Adventure</Link></li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================Blog Area =================*/}
    </>
  );
};

export default SingleBlog;
