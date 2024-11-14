import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 ">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
        <div className="flex justify-center mt-4">
          <a href="#" className="mx-2 text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" className="mx-2 text-gray-400 hover:text-white">Terms of Service</a>
          <a href="#" className="mx-2 text-gray-400 hover:text-white">Contact Us</a>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.847c0-2.514 1.493-3.894 3.778-3.894 1.095 0 2.238.195 2.238.195v2.453h-1.26c-1.244 0-1.63.772-1.63 1.562v1.871h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22.46 6.011c-.797.354-1.653.593-2.553.701a4.482 4.482 0 0 0 1.963-2.481 9.06 9.06 0 0 1-2.853 1.091 4.487 4.487 0 0 0-7.656 4.087A12.732 12.732 0 0 1 1.671 4.15a4.484 4.484 0 0 0 1.388 5.99 4.488 4.488 0 0 1-2.033-.562v.057a4.488 4.488 0 0 0 3.596 4.394 4.479 4.479 0 0 1-2.025.077 4.489 4.489 0 0 0 4.191 3.114A9.013 9.013 0 0 1 0 19.54 12.713 12.713 0 0 0 6.904 21c8.39 0 12.986-6.952 12.986-12.985 0-.197-.004-.394-.012-.589A9.289 9.289 0 0 0 22.46 6.01z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/roshan__291" target='_blank' aria-label="Instagram" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.317 3.608 1.292.975.975 1.23 2.242 1.292 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.317 2.633-1.292 3.608-.975.975-2.242 1.23-3.608 1.292-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.317-3.608-1.292-.975-.975-1.23-2.242-1.292-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.317-2.633 1.292-3.608C5.518 2.48 6.785 2.225 8.151 2.163c1.265-.058 1.645-.07 4.849-.07M12 0C8.741 0 8.332.015 7.053.072 5.772.13 4.527.395 3.465 1.457 2.404 2.518 2.139 3.763 2.081 5.043.015 8.332 0 8.741 0 12s.015 3.668.072 4.947c.058 1.28.323 2.525 1.384 3.587 1.061 1.061 2.306 1.326 3.587 1.384C8.332 23.985 8.741 24 12 24s3.668-.015 4.947-.072c1.28-.058 2.525-.323 3.587-1.384 1.061-1.061 1.326-2.306 1.384-3.587.058-1.279.072-1.688.072-4.947s-.015-3.668-.072-4.947c-.058-1.28-.323-2.525-1.384-3.587-1.061-1.061-2.306-1.326-3.587-1.384C15.668.015 15.259 0 12 0zm0 5.838A6.163 6.163 0 1 0 12 18.164 6.163 6.163 0 0 0 12 5.838zm0 10.164A4.002 4.002 0 1 1 12 7.836a4.002 4.002 0 0 1 0 8.002zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
