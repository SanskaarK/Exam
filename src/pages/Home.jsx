import { Link } from 'react-router-dom';
import PopularCourses from '../components/PopularCourses';
import Testimonials from '../components/Testimonials';

const Home = () => {
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

      {/*================ Start Feature Area =================*/}
      <section className="feature_area section_gap_top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="main_title">
                <h2 className="mb-3">Awesome Feature</h2>
                <p>
                  Replenish man have thing gathering lights yielding shall you
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single_feature">
                <div className="icon"><span className="flaticon-student"></span></div>
                <div className="desc">
                  <h4 className="mt-3 mb-2">Scholarship Facility</h4>
                  <p>
                    One make creepeth, man bearing theira firmament won't great
                    heaven
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single_feature">
                <div className="icon"><span className="flaticon-book"></span></div>
                <div className="desc">
                  <h4 className="mt-3 mb-2">Sell Online Course</h4>
                  <p>
                    One make creepeth, man bearing theira firmament won't great
                    heaven
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single_feature">
                <div className="icon"><span className="flaticon-earth"></span></div>
                <div className="desc">
                  <h4 className="mt-3 mb-2">Global Certification</h4>
                  <p>
                    One make creepeth, man bearing theira firmament won't great
                    heaven
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================ End Feature Area =================*/}

      <PopularCourses />

      {/*================ Start Registration Area =================*/}
      <div className="section_gap registration_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="row clock_sec clockdiv" id="clockdiv">
                <div className="col-lg-12">
                  <h1 className="mb-3">Register Now</h1>
                  <p>
                    There is a moment in the life of any aspiring astronomer that
                    it is time to buy that first telescope. It’s exciting to think
                    about setting up your own viewing station.
                  </p>
                </div>
                <div className="col clockinner1 clockinner">
                  <h1 className="days">150</h1>
                  <span className="smalltext">Days</span>
                </div>
                <div className="col clockinner clockinner1">
                  <h1 className="hours">23</h1>
                  <span className="smalltext">Hours</span>
                </div>
                <div className="col clockinner clockinner1">
                  <h1 className="minutes">47</h1>
                  <span className="smalltext">Mins</span>
                </div>
                <div className="col clockinner clockinner1">
                  <h1 className="seconds">59</h1>
                  <span className="smalltext">Secs</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <div className="register_form">
                <h3>Courses for Free</h3>
                <p>It is high time for learning</p>
                <form
                  className="form_area"
                  id="myForm"
                  action="mail.html"
                  method="post"
                >
                  <div className="row">
                    <div className="col-lg-12 form_group">
                      <input
                        name="name"
                        placeholder="Your Name"
                        required=""
                        type="text"
                      />
                      <input
                        name="phone"
                        placeholder="Your Phone Number"
                        required=""
                        type="tel"
                      />
                      <input
                        name="email"
                        placeholder="Your Email Address"
                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                        required=""
                        type="email"
                      />
                    </div>
                    <div className="col-lg-12 text-center">
                      <button className="primary-btn">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================ End Registration Area =================*/}

      {/*================ Start Trainers Area =================*/}
      <section className="trainer_area section_gap_top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="main_title">
                <h2 className="mb-3">Our Expert Trainers</h2>
                <p>
                  Replenish man have thing gathering lights yielding shall you
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center d-flex align-items-center">
            <div className="col-lg-3 col-md-6 col-sm-12 single-trainer">
              <div className="thumb d-flex justify-content-sm-center">
                <img className="img-fluid" src="/img/trainer/t1.jpg" alt="" />
              </div>
              <div className="meta-text text-sm-center">
                <h4>Mated Nithan</h4>
                <p className="designation">Sr. web designer</p>
                <div className="mb-4">
                  <p>
                    If you are looking at blank cassettes on the web, you may be
                    very confused at the.
                  </p>
                </div>
                <div className="align-items-center justify-content-center d-flex">
                  <Link to="#"><i className="ti-facebook"></i></Link>
                  <Link to="#"><i className="ti-twitter"></i></Link>
                  <Link to="#"><i className="ti-linkedin"></i></Link>
                  <Link to="#"><i className="ti-pinterest"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 single-trainer">
              <div className="thumb d-flex justify-content-sm-center">
                <img className="img-fluid" src="/img/trainer/t2.jpg" alt="" />
              </div>
              <div className="meta-text text-sm-center">
                <h4>David Cameron</h4>
                <p className="designation">Sr. web designer</p>
                <div className="mb-4">
                  <p>
                    If you are looking at blank cassettes on the web, you may be
                    very confused at the.
                  </p>
                </div>
                <div className="align-items-center justify-content-center d-flex">
                  <Link to="#"><i className="ti-facebook"></i></Link>
                  <Link to="#"><i className="ti-twitter"></i></Link>
                  <Link to="#"><i className="ti-linkedin"></i></Link>
                  <Link to="#"><i className="ti-pinterest"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 single-trainer">
              <div className="thumb d-flex justify-content-sm-center">
                <img className="img-fluid" src="/img/trainer/t3.jpg" alt="" />
              </div>
              <div className="meta-text text-sm-center">
                <h4>Jain Redmel</h4>
                <p className="designation">Sr. Faculty Data Science</p>
                <div className="mb-4">
                  <p>
                    If you are looking at blank cassettes on the web, you may be
                    very confused at the.
                  </p>
                </div>
                <div className="align-items-center justify-content-center d-flex">
                  <Link to="#"><i className="ti-facebook"></i></Link>
                  <Link to="#"><i className="ti-twitter"></i></Link>
                  <Link to="#"><i className="ti-linkedin"></i></Link>
                  <Link to="#"><i className="ti-pinterest"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 single-trainer">
              <div className="thumb d-flex justify-content-sm-center">
                <img className="img-fluid" src="/img/trainer/t4.jpg" alt="" />
              </div>
              <div className="meta-text text-sm-center">
                <h4>Nathan Macken</h4>
                <p className="designation">Sr. web designer</p>
                <div className="mb-4">
                  <p>
                    If you are looking at blank cassettes on the web, you may be
                    very confused at the.
                  </p>
                </div>
                <div className="align-items-center justify-content-center d-flex">
                  <Link to="#"><i className="ti-facebook"></i></Link>
                  <Link to="#"><i className="ti-twitter"></i></Link>
                  <Link to="#"><i className="ti-linkedin"></i></Link>
                  <Link to="#"><i className="ti-pinterest"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================ End Trainers Area =================*/}

      {/*================ Start Events Area =================*/}
      <div className="events_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="main_title">
                <h2 className="mb-3 text-white">Upcoming Events</h2>
                <p>
                  Replenish man have thing gathering lights yielding shall you
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single_event position-relative">
                <div className="event_thumb">
                  <img src="/img/event/e1.jpg" alt="" />
                </div>
                <div className="event_details">
                  <div className="d-flex mb-4">
                    <div className="date"><span>15</span> Jun</div>

                    <div className="time-location">
                      <p>
                        <span className="ti-time mr-2"></span> 12:00 AM - 12:30 AM
                      </p>
                      <p>
                        <span className="ti-location-pin mr-2"></span> Hilton Quebec
                      </p>
                    </div>
                  </div>
                  <p>
                    One make creepeth man for so bearing their firmament won't
                    fowl meat over seas great
                  </p>
                  <Link to="#" className="primary-btn rounded-0 mt-3">View Details</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="single_event position-relative">
                <div className="event_thumb">
                  <img src="/img/event/e2.jpg" alt="" />
                </div>
                <div className="event_details">
                  <div className="d-flex mb-4">
                    <div className="date"><span>15</span> Jun</div>

                    <div className="time-location">
                      <p>
                        <span className="ti-time mr-2"></span> 12:00 AM - 12:30 AM
                      </p>
                      <p>
                        <span className="ti-location-pin mr-2"></span> Hilton Quebec
                      </p>
                    </div>
                  </div>
                  <p>
                    One make creepeth man for so bearing their firmament won't
                    fowl meat over seas great
                  </p>
                  <Link to="#" className="primary-btn rounded-0 mt-3">View Details</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="text-center pt-lg-5 pt-3">
                <Link to="#" className="event-link">
                  View All Event <img src="/img/next.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================ End Events Area =================*/}

      <Testimonials />
    </>
  );
};

export default Home;
