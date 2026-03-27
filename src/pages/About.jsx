import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

const About = () => {
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
                  <h2>About Us</h2>
                  <div className="page_link">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Home Banner Area =================*/}

      {/*================ Start About Area =================*/}
      <section className="about_area section_gap">
        <div className="container">
          <div className="row h_blog_item">
            <div className="col-lg-6">
              <div className="h_blog_img">
                <img className="img-fluid" src="/img/about.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="h_blog_text">
                <div className="h_blog_text_inner left right">
                  <h4>Welcome to our Institute</h4>
                  <p>
                    Subdue whales void god which living don't midst lesser
                    yielding over lights whose. Cattle greater brought sixth fly
                    den dry good tree isn't seed stars were.
                  </p>
                  <p>
                    Subdue whales void god which living don't midst lesser yieldi
                    over lights whose. Cattle greater brought sixth fly den dry
                    good tree isn't seed stars were the boring.
                  </p>
                  <Link className="primary-btn" to="#">
                    Learn More <i className="ti-arrow-right ml-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================ End About Area =================*/}

      {/*================ Start Feature Area =================*/}
      <section className="feature_area section_gap_top title-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="main_title">
                <h2 className="mb-3 text-white">Awesome Feature</h2>
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

      <Testimonials />
    </>
  );
};

export default About;
