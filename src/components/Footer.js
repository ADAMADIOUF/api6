import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            fermentum odio vitae dui vehicula, in efficitur velit aliquam.
            Phasellus non ligula quis sem consectetur tristique.
          </p>
        </div>
        <div className='footer-section'>
          <h4>Contact Us</h4>
          <p>
            Address: 123 Main Street, City, Country
            <br />
            Email: info@example.com
            <br />
            Phone: 123-456-7890
          </p>
        </div>
        <div className='footer-section'>
          <h4>Follow Us</h4>
          <div className='social-icons'>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-facebook-f'></i>
            </a>
            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram'></i>
            </a>
            <a
              href='https://www.twitter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-twitter'></i>
            </a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>
          &copy; {new Date().getFullYear()} Perfume Website. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
