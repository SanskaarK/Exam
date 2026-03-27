import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <>
      {/*================ Start Home Banner Area =================*/}
      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner_content text-center">
                  <p className="text-uppercase">
                    Best online education service In the world
                  </p>
                  <h2 className="text-uppercase mt-4 mb-5">
                    One Step Ahead This Season
                  </h2>
                  <div>
                    <Link to="#" className="primary-btn2 mb-3 mb-sm-0">learn more</Link>
                    <Link to="#" className="primary-btn ml-sm-3 ml-0">see course</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================ End Home Banner Area =================*/}

      {/*================Blog Area =================*/}
      <section className="blog_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog_left_sidebar">
                <article className="row blog_item">
                  <div className="col-md-3">
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
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="blog_post">
                      <img src="/img/blog/main-blog/m-blog-1.jpg" alt="" />
                      <div className="blog_details">
                        <Link to="/single-blog">
                          <h2>Astronomy Binoculars A Great Alternative</h2>
                        </Link>
                        <p>MCSE boot camps have its supporters and its detractors. Some people do not
                          understand why you should have to spend money on boot camp when you can get
                          the MCSE study materials yourself at a fraction.</p>
                        <Link to="/single-blog" className="blog_btn">View More</Link>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="row blog_item">
                  <div className="col-md-3">
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
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="blog_post">
                      <img src="/img/blog/main-blog/m-blog-2.jpg" alt="" />
                      <div className="blog_details">
                        <Link to="/single-blog">
                          <h2>The Basics Of Buying A Telescope</h2>
                        </Link>
                        <p>MCSE boot camps have its supporters and its detractors. Some people do not
                          understand why you should have to spend money on boot camp when you can get
                          the MCSE study materials yourself at a fraction.</p>
                        <Link to="/single-blog" className="blog_btn">View More</Link>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="row blog_item">
                  <div className="col-md-3">
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
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="blog_post">
                      <img src="/img/blog/main-blog/m-blog-3.jpg" alt="" />
                      <div className="blog_details">
                        <Link to="/single-blog">
                          <h2>The Glossary Of Telescopes</h2>
                        </Link>
                        <p>MCSE boot camps have its supporters and its detractors. Some people do not
                          understand why you should have to spend money on boot camp when you can get
                          the MCSE study materials yourself at a fraction.</p>
                        <Link to="/single-blog" className="blog_btn">View More</Link>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="row blog_item">
                  <div className="col-md-3">
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
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="blog_post">
                      <img src="/img/blog/main-blog/m-blog-4.jpg" alt="" />
                      <div className="blog_details">
                        <Link to="/single-blog">
                          <h2>The Night Sky</h2>
                        </Link>
                        <p>MCSE boot camps have its supporters and its detractors. Some people do not
                          understand why you should have to spend money on boot camp when you can get
                          the MCSE study materials yourself at a fraction.</p>
                        <Link to="/single-blog" className="blog_btn">View More</Link>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="row blog_item">
                  <div className="col-md-3">
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
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="blog_post">
                      <img src="/img/blog/main-blog/m-blog-5.jpg" alt="" />
                      <div className="blog_details">
                        <Link to="/single-blog">
                          <h2>Telescopes 101</h2>
                        </Link>
                        <p>MCSE boot camps have its supporters and its detractors. Some people do not
                          understand why you should have to spend money on boot camp when you can get
                          the MCSE study materials yourself at a fraction.</p>
                        <Link to="/single-blog" className="blog_btn">View More</Link>
                      </div>
                    </div>
                  </div>
                </article>
                <nav className="blog-pagination justify-content-center d-flex">
                  <ul className="pagination">
                    <li className="page-item">
                      <Link to="#" className="page-link" aria-label="Previous">
                        <span aria-hidden="true">
                          <i className="ti-angle-left"></i>
                        </span>
                      </Link>
                    </li>
                    <li className="page-item"><Link to="#" className="page-link">01</Link></li>
                    <li className="page-item active"><Link to="#" className="page-link">02</Link></li>
                    <li className="page-item"><Link to="#" className="page-link">03</Link></li>
                    <li className="page-item"><Link to="#" className="page-link">04</Link></li>
                    <li className="page-item"><Link to="#" className="page-link">09</Link></li>
                    <li className="page-item">
                      <Link to="#" className="page-link" aria-label="Next">
                        <span aria-hidden="true">
                          <i className="ti-angle-right"></i>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </nav>
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

export default Blog;
