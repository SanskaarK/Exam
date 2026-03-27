import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useCart } from '../context/CartContext';

const coursesData = [
  { id: 1, title: 'Custom Product Design', price: '$25.00', image: '/img/courses/c1.jpg', tag: 'design', author: 'Cameron', authorImg: '/img/courses/author1.png' },
  { id: 2, title: 'Social Media Network', price: '$25.00', image: '/img/courses/c2.jpg', tag: 'design', author: 'Cameron', authorImg: '/img/courses/author2.png' },
  { id: 3, title: 'Computer Engineering', price: '$25.00', image: '/img/courses/c3.jpg', tag: 'design', author: 'Cameron', authorImg: '/img/courses/author3.png' }
];

const PopularCourses = ({ className = "popular_courses" }) => {
  const { addToCart } = useCart();

  useEffect(() => {
    if (window.initActiveCourse) {
      window.initActiveCourse();
    }
  }, []);

  return (
    <>
      {/*================ Start Popular Courses Area =================*/}
      <div className={className}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="main_title">
                <h2 className="mb-3">Our Popular Courses</h2>
                <p>
                  Replenish man have thing gathering lights yielding shall you
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-carousel active_course">
                {coursesData.map(course => (
                  <div className="single_course" key={course.id}>
                    <div className="course_head">
                      <img className="img-fluid" src={course.image} alt={course.title} />
                    </div>
                    <div className="course_content">
                      <span className="price">{course.price}</span>
                      <span className="tag mb-4 d-inline-block">{course.tag}</span>
                      <h4 className="mb-3">
                        <Link to="/course-details">{course.title}</Link>
                      </h4>
                      <p>
                        One make creepeth man bearing their one firmament won't fowl meat over sea
                      </p>
                      <button 
                        className="genric-btn primary py-2 px-3 mt-2 w-100" 
                        onClick={() => addToCart(course)}
                        style={{ border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                      >
                        Add to Cart
                      </button>
                      <div className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
                        <div className="authr_meta">
                          <img src={course.authorImg} alt={course.author} />
                          <span className="d-inline-block ml-2">{course.author}</span>
                        </div>
                        <div className="mt-lg-0 mt-3">
                          <span className="meta_info mr-4">
                            <Link to="#"> <i className="ti-user mr-2"></i>25 </Link>
                          </span>
                          <span className="meta_info">
                            <Link to="#"> <i className="ti-heart mr-2"></i>35 </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================ End Popular Courses Area =================*/}
    </>
  );
};

export default PopularCourses;
