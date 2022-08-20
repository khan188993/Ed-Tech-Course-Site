import React from 'react';
import SingleBlog from './SingleBlog/SingleBlog';

const Blogs = () => {
   return (
      <section className="text-gray-600 body-font">
         <div className="py-24">
            {/* title */}
            <div class="flex flex-wrap w-full mb-20">
               <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Blogs</h1>
                  <div class="h-1 w-20 bg-indigo-500 rounded"></div>
               </div>
               <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
            </div>
            {/* blogs */}
            <div className="flex flex-wrap -m-4">
               <SingleBlog />
               <SingleBlog />
               <SingleBlog />
            </div>
         </div>
      </section>
   );
};

export default Blogs;
