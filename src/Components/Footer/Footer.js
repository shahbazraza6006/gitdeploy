import React from 'react';
import { FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';
import "./Footer.css";
const Footer = () => {
  return (
    
<div style={{backgroundColor:"#0A173E"}}> 
<div className="text-center footertext p-8" >
  <h2 className="text-4xl font-semibold text-white mb-4 ">
    The secret weapon that humans have over AI is intuition. <br></br>
   " Your intuition tells you to join our great community."
  </h2>
  <div className="flex justify-center space-x-8 mb-4"> {/* Added mb-4 for margin-bottom */}
    <a href="#" className="text-white mt-10 hover:text-gray-300">
      <FaInstagram size={40} />
    </a>
    <a href="#" className="text-white  m-10 hover:text-gray-300">
      <FaGithub size={40} />
    </a>
    <a href="#" className="text-white m-10 hover:text-gray-300">
      <FaFacebook size={40} />
    </a>
  </div>
</div>

<footer class="bg-white dark:bg-gray-900" style={{backgroundColor:"#060818"}}>
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl  text-white font-semibold whitespace-nowrap dark:text-white">BitWit</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline">WhitePaper</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline">FAQs</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Products</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Earn</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Press</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class=" sm:flex sm:items-center sm:justify-between">
  <span class="text-sm text-center text-gray-500 dark:text-gray-400">
    © 2024 <a href="https://flowbite.com/" class="hover:underline">BitWit™</a>. All Rights Reserved.
  </span>
</div>

    </div>
</footer>
</div>
  );
};

export default Footer;
