import React from 'react'
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle } from '@fortawesome/free-solid-svg-icons'
import GreekSalad from '../assets/greek salad.jpg'
import Bruchetta from '../assets/bruchetta.svg'
import LemonDessert from '../assets/lemon dessert.jpg'
import David from '../customer-data/david.jpg'
import Emily from '../customer-data/emily.jpg'
import John from '../customer-data/john.jpg'
import Sarah from '../customer-data/sarah.jpg'
import MarioAdrian from '../assets/Mario and Adrian b.jpg'
import RestaurantChef from '../assets/restaurant chef B.jpg'
import Restaurant from '../assets/restaurant.jpg'
import { Link, Route, Routes } from 'react-router-dom'
import Reservation from '../Reservation'

export const Main = () => {
  return (
    <main>
      <section className='hero-section'>
        <div className='container content'>
          <div className='tittle-container'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Dolor aliquip excepteur nostrud laborum culpa quis exercitation sint. Cillum irure sunt cupidatat tempor ad amet consectetur amet. Aute nulla qui consectetur ut. Nulla id fugiat eiusmod Lorem cupidatat.</p>
            <Link to="/reservation"> <button>Reserve a Table</button></Link>
          </div>
          <Routes>
          <Route path='/reservation' element={<Reservation /> }></Route>
          </Routes>
          <div className='image-container'>
            <div className='hero-image'>
            <img src={RestaurantChef} />
            </div>
          </div>
        </div>
      </section>
      <section className='menu-section container' id='menu'>
        <div className='container'>
            <div className='menu-section-heading'>
              <div className='menu-heading'>
                <h2>Specials</h2>
              </div>
              <div className='menu-main-button'>
                <button>Online Menu</button>
              </div>
            </div>
          <div className='menu-items'>
            <div className='menu-item'>
              <div className='menu-image'>
                <img className='menu-item-image' src={GreekSalad} />
              </div>
              <div className='menu-desc'>
                <div className='menu-desc-title'>
                  <h3>Greek Salad</h3>
                  <p>$12.99</p>
                </div>
                <div className='menu-desc-info'>
                  <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                </div>
                <div className='menu-cta'>
                  <p>Order a delivery</p>
                  <FontAwesomeIcon icon={faBicycle} style={{color: "#333333",}} />
                </div>
              </div>
            </div>
            <div className='menu-item'>
              <div className='menu-image'>
                <img className='menu-item-image' src={Bruchetta} />
              </div>
              <div className='menu-desc'>
                <div className='menu-desc-title'>
                  <h3>Bruchetta</h3>
                  <p>$12.99</p>
                </div>
                <div className='menu-desc-info'>
                  <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                </div>
                <div className='menu-cta'>
                  <p>Order a delivery</p>
                  <FontAwesomeIcon icon={faBicycle} style={{color: "#333333",}} />
                </div>
              </div>
            </div>
            <div className='menu-item'>
              <div className='menu-image'>
                <img className='menu-item-image' src={LemonDessert} />
              </div>
              <div className='menu-desc'>
                <div className='menu-desc-title'>
                  <h3>Lemon Dessert</h3>
                  <p>$12.99</p>
                </div>
                <div className='menu-desc-info'>
                  <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                </div>
                <div className='menu-cta'>
                  <p>Order a delivery</p>
                  <FontAwesomeIcon icon={faBicycle} style={{color: "#333333",}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='testimonials'>
        <div className='testimonial-main-container container'>
          <h2>Testimonials</h2>
          <div className='testimonial-container'>
            <div className='testimonial-box'>
              <div className='rating'>
                ⭐⭐⭐⭐⭐
              </div>
              <div className='customer'>
                <div className='customer-profile'>
                  <img src={John} />
                </div>
                <div className='customer-name'>
                  John D.
                </div>
              </div>
              <div className='customer-feedback'>
                "Delicious food and excellent service! Highly recommended."
              </div>
            </div>
            <div className='testimonial-box'>
              <div className='rating'>
                ⭐⭐⭐⭐
              </div>
              <div className='customer'>
                <div className='customer-profile'>
                  <img src={Sarah} />
                </div>
                <div className='customer-name'>
                  Sarah M.
                </div>
              </div>
              <div className='customer-feedback'>
                Great atmosphere and friendly staff. A must-visit restaurant!"
              </div>
            </div>
            <div className='testimonial-box'>
              <div className='rating'>
                ⭐⭐⭐⭐⭐
              </div>
              <div className='customer'>
                <div className='customer-profile'>
                  <img src={Emily} />
                </div>
                <div className='customer-name'>
                  Emily R.
                </div>
              </div>
              <div className='customer-feedback'>
              "Fantastic dining experience with a wide variety of mouthwatering dishes. Thank you for the wonderful service!"
              </div>
            </div>
            <div className='testimonial-box'>
              <div className='rating'>
                ⭐⭐⭐⭐⭐
              </div>
              <div className='customer'>
                <div className='customer-profile'>
                  <img src={David} />
                </div>
                <div className='customer-name'>
                  David L.
                </div>
              </div>
              <div className='customer-feedback'>
                "Impeccable service and the flavors in each dish were outstanding. A memorable culinary journey!"
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='about' id="about">
        <div className='container'>
          <div className='about-container'>
            <div className='about-info about-box'>
              <div className='about-title'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
              </div>
              <div className='about-desc'>
                Welcome to Little Lemon, an authentic Italian trattoria founded by Mario and Adrian, two passionate brothers from Italy. At our charming restaurant, we celebrate the vibrant flavors of lemons through delightful dishes like lemon-infused pasta and refreshing limoncello. Experience the essence of Italian cuisine and the warm hospitality of Mario and Adrian at Little Lemon, where every bite tells a story of their shared culinary heritage.
              </div>
            </div>
            <div className='about-container-images about-box'>
              <div className='about-images'>
                <div className='about-img-1 about-img'>
                  <img src={Restaurant} />
                </div>
                <div className='about-img-2 about-img'>
                  <img src={MarioAdrian} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
