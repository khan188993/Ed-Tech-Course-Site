import React from 'react';

const Checkout = () => {
   return (
      <div>
         <div className="flex justify-center px-6 my-12">
            {/* <!-- Row --> */}
            <div className="w-full xl:w-3/4 lg:w-11/12 flex md:flex-row flex-col items-center">
               {/* <!-- Col --> */}
               <div className="w-full h-auto  lg:block lg:w-5/12 bg-cover rounded-l-lg">
                  <div class="bg-gray-100 p-6 rounded-lg">
                     <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                     <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                     <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                     <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  </div>
               </div>
               {/* <!-- Col --> */}
               <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                  <h3 className="pt-4 text-2xl text-center">Confirm Order!</h3>
                  <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                     <div className="mb-4 md:flex md:justify-between">
                        <div className="mb-4 md:mr-2 md:mb-0">
                           <label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                              First Name
                           </label>
                           <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name" />
                        </div>
                        <div className="md:ml-2">
                           <label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                              Last Name
                           </label>
                           <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name" />
                        </div>
                     </div>
                     <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                           Email
                        </label>
                        <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                     </div>
                     <div className="mb-4 md:flex md:justify-between">
                        <div className="mb-4 md:mr-2 md:mb-0">
                           <label className="block mb-2 text-sm font-bold text-gray-700" for="password">
                              Password
                           </label>
                           <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                           <p className="text-xs italic text-red-500">Please choose a password.</p>
                        </div>
                        <div className="md:ml-2">
                           <label className="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                              Confirm Password
                           </label>
                           <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="c_password" type="password" placeholder="******************" />
                        </div>
                     </div>
                     <div className="mb-6 text-center">
                        <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
                           Register Account
                        </button>
                     </div>
                     <hr className="mb-6 border-t" />
                     <div className="text-center">
                        <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="#">
                           Forgot Password?
                        </a>
                     </div>
                     <div className="text-center">
                        <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="./index.html">
                           Already have an account? Login!
                        </a>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Checkout;
