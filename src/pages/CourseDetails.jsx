import { Link } from 'react-router-dom';

const CourseDetails = () => {
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
                  <h2>Course Details</h2>
                  <div className="page_link">
                    <Link to="/">Home</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/course-details">Courses Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Home Banner Area =================*/}

      {/*================ Start Course Details Area =================*/}
      <section className="course_details_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 course_details_left">
              <div className="main_image">
                <img className="img-fluid" src="/img/courses/course-details.jpg" alt="" />
              </div>
              <div className="content_wrapper">
                <h4 className="title">Objectives</h4>
                <div className="content">
                  When you enter into any new area of science, you almost always find yourself with a
                  baffling new language of
                  technical terms to learn before you can converse with the experts. This is certainly
                  true in astronomy both in
                  terms of terms that refer to the cosmos and terms that describe the tools of the trade,
                  the most prevalent
                  being the telescope.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea
                  commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum.
                </div>

                <h4 className="title">Eligibility</h4>
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea
                  commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum.
                </div>

                <h4 className="title">Course Outline</h4>
                <div className="content">
                  <ul className="course_list">
                    <li className="justify-content-between d-flex">
                      <p>Introduction Lesson</p>
                      <Link className="primary-btn text-uppercase" to="#">View Details</Link>
                    </li>
                    <li className="justify-content-between d-flex">
                      <p>Basics of HTML</p>
                      <Link className="primary-btn text-uppercase" to="#">View Details</Link>
                    </li>
                    <li className="justify-content-between d-flex">
                      <p>Getting Know about HTML</p>
                      <Link className="primary-btn text-uppercase" to="#">View Details</Link>
                    </li>
                    <li className="justify-content-between d-flex">
                      <p>Tags and Attributes</p>
                      <Link className="primary-btn text-uppercase" to="#">View Details</Link>
                    </li>
                    <li className="justify-content-between d-flex">
                      <p>Basics of CSS</p>
                      <Link className="primary-btn text-uppercase" to="#">View Details</Link>
                    </li>
                    <li className="justify-content-between d-flex">
                      <p>Getting Familiar with CSS</p>
                      <Link className="primary-btn text-uppercase" to="#">View Details</Link>
                    </li>
                    <li className="justify-content-between d-flex">
                      <p>Introduction to Bootstrap</p>
                      <Link className="primary-btn text-uppercase" to="#">View Details</Link>
                    </li>
                    <li className="justify-content-between d-flex">
                      <p>Responsive Design</p>
                      <Link className="primary-btn text-uppercase" to="#">View Details</Link>
                    </li>
                    <li className="justify-content-between d-flex">
                      <p>Canvas in HTML 5</p>
                      <Link className="primary-btn text-uppercase" to="#">View Details</Link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>


            <div className="col-lg-4 right-contents">
              <ul>
                <li>
                  <Link className="justify-content-between d-flex" to="#">
                    <p>Trainer’s Name</p>
                    <span className="or">George Mathews</span>
                  </Link>
                </li>
                <li>
                  <Link className="justify-content-between d-flex" to="#">
                    <p>Course Fee </p>
                    <span>$230</span>
                  </Link>
                </li>
                <li>
                  <Link className="justify-content-between d-flex" to="#">
                    <p>Available Seats </p>
                    <span>15</span>
                  </Link>
                </li>
                <li>
                  <Link className="justify-content-between d-flex" to="#">
                    <p>Schedule </p>
                    <span>2.00 pm to 4.00 pm</span>
                  </Link>
                </li>
              </ul>
              <Link to="#" className="primary-btn2 text-uppercase enroll rounded-0 text-white">Enroll the course</Link>

              <h4 className="title">Reviews</h4>
              <div className="content">
                <div className="review-top row pt-40">
                  <div className="col-lg-12">
                    <h6 className="mb-15">Provide Your Rating</h6>
                    <div className="d-flex flex-row reviews justify-content-between">
                      <span>Quality</span>
                      <div className="star">
                        <i className="ti-star checked"></i>
                        <i className="ti-star checked"></i>
                        <i className="ti-star checked"></i>
                        <i className="ti-star"></i>
                        <i className="ti-star"></i>
                      </div>
                      <span>Outstanding</span>
                    </div>
                    <div className="d-flex flex-row reviews justify-content-between">
                      <span>Puncuality</span>
                      <div className="star">
                        <i className="ti-star checked"></i>
                        <i className="ti-star checked"></i>
                        <i className="ti-star checked"></i>
                        <i className="ti-star"></i>
                        <i className="ti-star"></i>
                      </div>
                      <span>Outstanding</span>
                    </div>
                    <div className="d-flex flex-row reviews justify-content-between">
                      <span>Quality</span>
                      <div className="star">
                        <i className="ti-star checked"></i>
                        <i className="ti-star checked"></i>
                        <i className="ti-star checked"></i>
                        <i className="ti-star"></i>
                        <i className="ti-star"></i>
                      </div>
                      <span>Outstanding</span>
                    </div>
                  </div>
                </div>
                <div className="feedeback">
                  <h6>Your Feedback</h6>
                  <textarea name="feedback" className="form-control" cols="10" rows="10"></textarea>
                  <div className="mt-10 text-right">
                    <Link to="#" className="primary-btn2 text-right rounded-0 text-white">Submit</Link>
                  </div>
                </div>
                <div className="comments-area mb-30">
                  <div className="comment-list">
                    <div className="single-comment single-reviews justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img src="/img/blog/c1.jpg" alt="" />
                        </div>
                        <div className="desc">
                          <h5><Link to="#">Emilly Blunt</Link>
                            <div className="star">
                              <span className="ti-star checked"></span>
                              <span className="ti-star checked"></span>
                              <span className="ti-star checked"></span>
                              <span className="ti-star"></span>
                              <span className="ti-star"></span>
                            </div>
                          </h5>
                          <p className="comment">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-list">
                    <div className="single-comment single-reviews justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img src="/img/blog/c2.jpg" alt="" />
                        </div>
                        <div className="desc">
                          <h5><Link to="#">Elsie Cunningham</Link>
                            <div className="star">
                              <span className="ti-star checked"></span>
                              <span className="ti-star checked"></span>
                              <span className="ti-star checked"></span>
                              <span className="ti-star"></span>
                              <span className="ti-star"></span>
                            </div>
                          </h5>
                          <p className="comment">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-list">
                    <div className="single-comment single-reviews justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img src="/img/blog/c3.jpg" alt="" />
                        </div>
                        <div className="desc">
                          <h5><Link to="#">Maria Luna</Link>
                            <div className="star">
                              <span className="ti-star checked"></span>
                              <span className="ti-star checked"></span>
                              <span className="ti-star checked"></span>
                              <span className="ti-star"></span>
                              <span className="ti-star"></span>
                            </div>
                          </h5>
                          <p className="comment">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================ End Course Details Area =================*/}
    </>
  );
};

export default CourseDetails;
