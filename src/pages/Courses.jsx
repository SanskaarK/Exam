import { Link } from 'react-router-dom';
import PopularCourses from '../components/PopularCourses';

const Courses = () => {
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
                  <h2>Courses</h2>
                  <div className="page_link">
                    <Link to="/">Home</Link>
                    <Link to="/courses">Courses</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Home Banner Area =================*/}

      <PopularCourses className="popular_courses section_gap_top" />

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

      {/*================ Start Feature Area =================*/}
      <section className="feature_area section_gap">
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
    </>
  );
};

export default Courses;
