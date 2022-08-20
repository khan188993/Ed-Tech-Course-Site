import React from 'react';
import Banner from '../../components/Banner/Banner';
import Blogs from '../../components/Blogs/Blogs';
import Courses from '../../components/Courses/Courses';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LoginPage from '../LoginPage/LoginPage';

const Home = () => {
   return (
      <>
         <Header />
         <div className="container mx-auto w-full md:w-10/12">
            {/* header,banner,footer,courses,blogs,testimonial,contact */}
            <Banner />
            <Blogs/>
            <Courses />
            <Footer />
         </div>
      </>
   );
};

export default Home;
