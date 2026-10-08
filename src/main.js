import './style.css'

/* ========================================
   ASSETS
======================================== */

import hero1 from './assets/hero 1.png'
import hero2 from './assets/hero 2.png'
import hero3 from './assets/hero 3.png'

import kanchiCotton from './assets/Kanchi Cotton.jpg'
import khadiCotton from './assets/Khadi Cotton.jpg'
import linenCotton from './assets/Linen Cotton.jpg'
import narayanpetCotton from './assets/Narayanpet Cotton.jpg'
import silkCotton from './assets/Silk Cotton.jpg'
import sungudiCotton from './assets/Sungudi Cotton.jpg'

import storyBanner from './assets/More Than Just Sarees.png'

import reel1 from './assets/Screenshot 2026-10-08 183755.png'
import reel2 from './assets/Screenshot 2026-10-08 183816.png'
import reel3 from './assets/Screenshot 2026-10-08 183832.png'
import reel4 from './assets/Screenshot 2026-10-08 183852.png'
import reel5 from './assets/Screenshot 2026-10-08 183908.png'
import reel6 from './assets/Screenshot 2026-10-08 183930.png'

import dp1 from './assets/dp 1.jpg'
import dp2 from './assets/dp 2.jpg'
import dp3 from './assets/dp 3.jpg'
import dp4 from './assets/dp 4.jpg'
import dp5 from './assets/dp 5.jpg'
import dp6 from './assets/dp 6.jpg'
import dp7 from './assets/dp 7.jpg'


/* ========================================
   HERO
======================================== */

const heroSlides = [
  hero1,
  hero2,
  hero3
]


/* ========================================
   CATEGORIES
======================================== */

const categories = [
  {
    name: 'Kanchi',
    image: kanchiCotton
  },
  {
    name: 'Khadi',
    image: khadiCotton
  },
  {
    name: 'Linen',
    image: linenCotton
  },
  {
    name: 'Narayanpet',
    image: narayanpetCotton
  },
  {
    name: 'Silk',
    image: silkCotton
  },
  {
    name: 'Sungudi',
    image: sungudiCotton
  }
]


/* ========================================
   PRODUCTS
======================================== */

const products = [
  {
    name: 'Kanchi Classic',
    image: kanchiCotton,
    price: '₹1,499',
    oldPrice: '₹1,899'
  },
  {
    name: 'Linen Grace',
    image: linenCotton,
    price: '₹1,299',
    oldPrice: '₹1,599'
  },
  {
    name: 'Silk Elegance',
    image: silkCotton,
    price: '₹1,799',
    oldPrice: '₹2,199'
  },
  {
    name: 'Narayanpet Edit',
    image: narayanpetCotton,
    price: '₹1,399',
    oldPrice: '₹1,749'
  },
  {
    name: 'Khadi Charm',
    image: khadiCotton,
    price: '₹1,199',
    oldPrice: '₹1,499'
  },
  {
    name: 'Sungudi Bloom',
    image: sungudiCotton,
    price: '₹1,099',
    oldPrice: '₹1,399'
  }
]


/* ========================================
   REELS
======================================== */

const reelImages = [
  reel1,
  reel2,
  reel3,
  reel4,
  reel5,
  reel6
]

const reelLoop = [
  ...reelImages,
  ...reelImages
]


/* ========================================
   REVIEWS
======================================== */

const reviews = [
  {
    name: 'Priya R.',
    image: dp1,
    text: 'Beautiful saree and lovely quality. The colour looked exactly like the pictures.'
  },
  {
    name: 'Meena S.',
    image: dp2,
    text: 'Loved the fabric and neat packaging. Really happy with my purchase.'
  },
  {
    name: 'Anitha K.',
    image: dp3,
    text: 'The saree was elegant and very comfortable. I received so many compliments.'
  },
  {
    name: 'Divya M.',
    image: dp4,
    text: 'Beautiful collection and good quality. The shopping experience was very smooth.'
  },
  {
    name: 'Kavya P.',
    image: dp5,
    text: 'Exactly what I expected. Lovely colours and a really premium feel.'
  },
  {
    name: 'Lakshmi V.',
    image: dp6,
    text: 'Very happy with the saree. The material and finishing were beautiful.'
  },
  {
    name: 'Swetha A.',
    image: dp7,
    text: 'One of my favourite purchases. I will definitely shop here again.'
  }
]


/* ========================================
   HTML GENERATORS
======================================== */

const categoryHTML = categories
  .map(
    (category) => `
      <a href="#" class="rack-item">

        <div class="rack-image-wrap">
          <img
            src="${category.image}"
            class="rack-image"
            alt="${category.name}"
          />
        </div>

        <span class="rack-name">
          ${category.name}
        </span>

      </a>
    `
  )
  .join('')


const productsHTML = products
  .map(
    (product) => `
      <article class="product-card">

        <div class="product-image-box">

          <img
            src="${product.image}"
            alt="${product.name}"
            class="product-image"
            draggable="false"
          />

          <span class="new-badge">
            NEW
          </span>

          <button
            class="product-heart"
            aria-label="Wishlist ${product.name}"
          >

            <svg viewBox="0 0 24 24">
              <path
                d="
                  M20.8 4.6
                  a5.5 5.5 0 0 0-7.8 0
                  L12 5.6
                  l-1-1
                  a5.5 5.5 0 0 0-7.8 7.8
                  l1 1
                  L12 21
                  l7.8-7.6
                  1-1
                  a5.5 5.5 0 0 0 0-7.8Z
                "
              />
            </svg>

          </button>

        </div>


        <div class="product-info">

          <div class="product-topline">
            HANDPICKED
            <span>•</span>
            NEW
          </div>


          <div class="product-details-row">

            <div>

              <h3>
                ${product.name}
              </h3>

              <div class="product-price">

                <span class="current-price">
                  ${product.price}
                </span>

                <span class="old-price">
                  ${product.oldPrice}
                </span>

              </div>

            </div>


            <button
              class="quick-cart-btn"
              aria-label="Add ${product.name} to cart"
            >

              <svg viewBox="0 0 24 24">

                <path
                  d="
                    M3 4h2
                    l2.1 10.1
                    a2 2 0 0 0 2 1.6
                    h7.8
                    a2 2 0 0 0 2-1.6
                    L20 8H7
                  "
                />

                <circle cx="10" cy="20" r="1.2"/>
                <circle cx="18" cy="20" r="1.2"/>

              </svg>

            </button>

          </div>

        </div>

      </article>
    `
  )
  .join('')


const reelsHTML = reelLoop
  .map(
    (image, index) => `
      <article class="reel-card">

        <img
          src="${image}"
          alt="Elara Weaves Reel ${(index % reelImages.length) + 1}"
          class="reel-image"
          draggable="false"
        />

        <div class="reel-play">
          <svg viewBox="0 0 24 24">
            <path d="M9 7L17 12L9 17Z"/>
          </svg>
        </div>

        <div class="reel-gradient"></div>

        <div class="reel-caption">
          <span>ELARA WEAVES</span>
          <small>Watch Reel</small>
        </div>

      </article>
    `
  )
  .join('')


const reviewsHTML = reviews
  .map(
    (review, index) => `
      <article
        class="review-card"
        data-review-index="${index}"
        data-pos="0"
      >

        <div class="review-image-box">

          <img
            src="${review.image}"
            alt="${review.name}"
            class="review-image"
            draggable="false"
          />

        </div>

        <div class="review-stars">
          ★★★★★
        </div>

        <p class="review-text">
          “${review.text}”
        </p>

        <div class="review-person">

          <strong>
            ${review.name}
          </strong>

          <span>
            ✓ Verified Buyer
          </span>

        </div>

      </article>
    `
  )
  .join('')


const reviewDotsHTML = reviews
  .map(
    (_, index) => `
      <button
        class="review-dot ${index === 0 ? 'active' : ''}"
        data-review-dot="${index}"
        aria-label="Review ${index + 1}"
      ></button>
    `
  )
  .join('')


/* ========================================
   PAGE
======================================== */

document.querySelector('#app').innerHTML = `

  <main class="site">


    <!-- HEADER -->

    <header class="header">

      <button class="menu-btn" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>


      <a href="#" class="brand">

        <div class="brand-text">

          <span class="brand-name">
            Elara Weaves
          </span>

          <span class="brand-sub">
            SAREES FOR EVERY YOU
          </span>

        </div>

      </a>


      <div class="header-actions">

        <button class="header-icon" aria-label="Wishlist">

          <svg viewBox="0 0 24 24">

            <path
              d="
                M20.8 4.6
                a5.5 5.5 0 0 0-7.8 0
                L12 5.6
                l-1-1
                a5.5 5.5 0 0 0-7.8 7.8
                l1 1
                L12 21
                l7.8-7.6
                1-1
                a5.5 5.5 0 0 0 0-7.8Z
              "
            />

          </svg>

          <span class="icon-count">
            0
          </span>

        </button>


        <button class="header-icon" aria-label="Cart">

          <svg viewBox="0 0 24 24">

            <path
              d="
                M3 4h2
                l2.1 10.1
                a2 2 0 0 0 2 1.6
                h7.8
                a2 2 0 0 0 2-1.6
                L20 8H7
              "
            />

            <circle cx="10" cy="20" r="1.2"/>
            <circle cx="18" cy="20" r="1.2"/>

          </svg>

          <span class="icon-count">
            0
          </span>

        </button>

      </div>

    </header>



    <!-- HERO -->

    <section class="hero-slider">

      <div class="hero-slide-frame">

        <img
          src="${hero1}"
          id="heroSlide"
          class="hero-slide-image"
          alt="Elara Weaves"
        />

        <div class="hero-dots">

          <button class="hero-dot active" data-index="0"></button>
          <button class="hero-dot" data-index="1"></button>
          <button class="hero-dot" data-index="2"></button>

        </div>

      </div>

    </section>



    <!-- CATEGORIES -->

    <section class="rack-section">

      <div class="rack-heading">

        <span class="rack-small-title">
          DISCOVER YOUR WEAVE
        </span>

        <h2>
          Explore the Rack
        </h2>

        <p>
          Handpicked sarees for every mood
        </p>

      </div>


      <div class="rack-scroll">
        ${categoryHTML}
      </div>

    </section>



    <!-- NEW ARRIVALS -->

    <section class="new-arrivals">

      <div class="arrivals-heading">

        <div>

          <span class="arrivals-small-title">
            JUST LANDED
          </span>

          <h2>
            New Arrivals
          </h2>

        </div>


        <a href="#" class="view-all">
          View All
          <span>→</span>
        </a>

      </div>


      <div class="products-grid">
        ${productsHTML}
      </div>

    </section>



    <!-- STORY -->

    <section class="story-section">

      <div class="story-card">

        <img
          src="${storyBanner}"
          alt="More Than Just Sarees"
          class="story-image"
        />

      </div>

    </section>



    <!-- REELS -->

    <section class="reels-section">

      <div class="reels-heading">

        <div>

          <span class="reels-small-title">
            FROM OUR INSTAGRAM
          </span>

          <h2>
            Reels & Real Moments
          </h2>

        </div>

        <a href="#" class="reels-follow">
          Follow Us ↗
        </a>

      </div>


      <div class="reels-window">

        <div class="reels-track">
          ${reelsHTML}
        </div>

      </div>

    </section>



    <!-- REVIEWS -->

    <section class="reviews-section">

      <div class="reviews-heading">

        <span class="reviews-small-title">
          LOVED BY YOU
        </span>

        <h2>
          What Our Customers Say
        </h2>

        <p>
          Real women. Real experiences. Real love.
        </p>

      </div>


      <div
        class="reviews-stage"
        id="reviewsStage"
      >
        ${reviewsHTML}
      </div>


      <div class="review-dots">
        ${reviewDotsHTML}
      </div>

    </section>



    <!-- FOOTER -->

    <footer class="site-footer">


      <!-- DESKTOP FOOTER -->

      <div class="footer-desktop">

        <div class="footer-desktop-grid">


          <!-- BRAND -->

          <div class="footer-brand-column">

            <div class="footer-brand-heading">

              <div class="footer-emblem">
                EW
              </div>

              <div>

                <h3>
                  Elara Weaves
                </h3>

                <span>
                  SAREES FOR EVERY YOU
                </span>

              </div>

            </div>


            <h4>
              Woven for every woman.
            </h4>


            <p class="footer-description">
              Handpicked premium sarees curated with care,
              blending timeless traditions with modern elegance.
            </p>

          </div>


          <!-- QUICK LINKS -->

          <div class="footer-column">

            <h5>
              Quick Links
            </h5>

            <a href="#">Home</a>
            <a href="#">Collections</a>
            <a href="#">New Arrivals</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>

          </div>


          <!-- CUSTOMER CARE -->

          <div class="footer-column">

            <h5>
              Customer Care
            </h5>

            <a href="#">Track Order</a>
            <a href="#">Shipping Policy</a>
            <a href="#">Return Policy</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>

          </div>


          <!-- CONTACT -->

          <div class="footer-contact">

            <h5>
              Contact
            </h5>


            <div class="contact-row">

              <svg viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2Z"/>
              </svg>

              <span>
                xxxxxx
              </span>

            </div>


            <div class="contact-row">

              <svg viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2Z"/>
              </svg>

              <span>
                xxxxxx
              </span>

            </div>


            <div class="contact-row">

              <svg viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <path d="M4 7l8 6 8-6"/>
              </svg>

              <span>
                xxxxxx@gmail.com
              </span>

            </div>


            <div class="contact-row">

              <svg viewBox="0 0 24 24">
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/>
                <circle cx="12" cy="10" r="2.5"/>
              </svg>

              <span>
                xxxxxx, Tamil Nadu
              </span>

            </div>


            <div class="footer-socials">

              <a href="#" aria-label="Instagram">
                IG
              </a>

              <a href="#" aria-label="Facebook">
                FB
              </a>

              <a href="#" aria-label="YouTube">
                YT
              </a>

              <a href="#" aria-label="WhatsApp">
                WA
              </a>

            </div>

          </div>

        </div>


        <div class="footer-bottom">

          <span>
            © 2026 Elara Weaves. All rights reserved.
          </span>

          <span>
            Sarees for every you.
          </span>

        </div>

      </div>



      <!-- MOBILE FOOTER -->

      <div class="footer-mobile">


        <div class="mobile-footer-brand">

          <div class="footer-emblem">
            EW
          </div>

          <div>

            <h3>
              Elara Weaves
            </h3>

            <span>
              SAREES FOR EVERY YOU
            </span>

          </div>

        </div>



        <div class="footer-accordion">


          <!-- INFORMATION -->

          <div class="footer-accordion-item">

            <button
              class="footer-accordion-button"
              type="button"
            >

              <span>
                INFORMATION
              </span>

              <span class="footer-chevron">
               ⌄
              </span>

            </button>


            <div class="footer-accordion-content">

              <a href="#">Home</a>
              <a href="#">Collections</a>
              <a href="#">New Arrivals</a>
              <a href="#">About Us</a>

            </div>

          </div>



          <!-- SUPPORT -->

          <div class="footer-accordion-item">

            <button
              class="footer-accordion-button"
              type="button"
            >

              <span>
                SUPPORT
              </span>

              <span class="footer-chevron">
               ⌄
              </span>

            </button>


            <div class="footer-accordion-content">

              <a href="#">Track Order</a>
              <a href="#">Shipping Policy</a>
              <a href="#">Return Policy</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>

            </div>

          </div>



          <!-- CONTACT -->

          <div class="footer-accordion-item">

            <button
              class="footer-accordion-button"
              type="button"
            >

              <span>
                GET IN TOUCH
              </span>

              <span class="footer-chevron">
               ⌄
              </span>

            </button>


            <div class="footer-accordion-content">

              <p>
                ☎ &nbsp; xxxxxx
              </p>

              <p>
                ☎ &nbsp; xxxxxx
              </p>

              <p>
                ✉ &nbsp; xxxxxx@gmail.com
              </p>

              <p>
                ⌖ &nbsp; xxxxxx, Tamil Nadu
              </p>


              <div class="footer-socials">

                <a href="#">IG</a>
                <a href="#">FB</a>
                <a href="#">YT</a>
                <a href="#">WA</a>

              </div>

            </div>

          </div>



          <!-- NEWSLETTER -->

          <div class="footer-accordion-item">

            <button
              class="footer-accordion-button"
              type="button"
            >

              <span>
                SUBSCRIBE OUR NEWSLETTER
              </span>

              <span class="footer-chevron">
               ⌄
              </span>

            </button>


            <div class="footer-accordion-content">

              <p class="newsletter-text">
                Be the first to know about new collections
                and special saree drops.
              </p>


              <form
                class="newsletter-form"
                id="newsletterForm"
              >

                <input
                  type="email"
                  placeholder="Enter your email"
                />

                <button type="submit">
                  Subscribe
                </button>

              </form>

            </div>

          </div>


        </div>


        <div class="mobile-footer-bottom">
          © 2026 Elara Weaves. All rights reserved.
        </div>

      </div>

    </footer>


  </main>
`



/* ========================================
   HERO AUTO SLIDER
======================================== */

const heroImage =
  document.querySelector('#heroSlide')

const heroDots =
  document.querySelectorAll('.hero-dot')

let currentHero = 0
let heroTimer = null
let heroChanging = false


function updateHeroDots() {

  heroDots.forEach(
    (dot, index) => {

      dot.classList.toggle(
        'active',
        index === currentHero
      )

    }
  )

}


function showHero(index) {

  if (heroChanging) return

  heroChanging = true


  if (index >= heroSlides.length) {
    index = 0
  }

  if (index < 0) {
    index = heroSlides.length - 1
  }


  currentHero = index


  heroImage.classList.add(
    'fade-out'
  )


  setTimeout(() => {

    heroImage.src =
      heroSlides[currentHero]

    updateHeroDots()

    heroImage.classList.remove(
      'fade-out'
    )

    heroChanging = false

  }, 220)

}


function startHeroSlider() {

  clearInterval(heroTimer)

  heroTimer =
    setInterval(() => {

      showHero(
        currentHero + 1
      )

    }, 3000)

}


heroDots.forEach(
  (dot) => {

    dot.addEventListener(
      'click',
      () => {

        showHero(
          Number(
            dot.dataset.index
          )
        )

        startHeroSlider()

      }
    )

  }
)


startHeroSlider()



/* ========================================
   PRODUCT DRAG
======================================== */

const productSlider =
  document.querySelector(
    '.products-grid'
  )

let productDragging = false
let productStartX = 0
let productScrollStart = 0


productSlider.addEventListener(
  'pointerdown',
  (event) => {

    if (
      event.target.closest(
        'button, a'
      )
    ) {
      return
    }


    productDragging = true

    productStartX =
      event.clientX

    productScrollStart =
      productSlider.scrollLeft

    productSlider.classList.add(
      'is-dragging'
    )

    productSlider.setPointerCapture?.(
      event.pointerId
    )

  }
)


productSlider.addEventListener(
  'pointermove',
  (event) => {

    if (!productDragging) return


    productSlider.scrollLeft =
      productScrollStart -
      (
        event.clientX -
        productStartX
      )

  }
)


function endProductDrag(event) {

  if (!productDragging) return

  productDragging = false

  productSlider.classList.remove(
    'is-dragging'
  )

  try {

    productSlider.releasePointerCapture?.(
      event.pointerId
    )

  } catch {}

}


productSlider.addEventListener(
  'pointerup',
  endProductDrag
)

productSlider.addEventListener(
  'pointercancel',
  endProductDrag
)



/* ========================================
   REVIEW CAROUSEL
======================================== */

const reviewCards =
  Array.from(
    document.querySelectorAll(
      '.review-card'
    )
  )

const reviewDots =
  Array.from(
    document.querySelectorAll(
      '.review-dot'
    )
  )

const reviewStage =
  document.querySelector(
    '#reviewsStage'
  )


let currentReview = 0
let reviewTimer = null
let reviewStartX = 0
let reviewCurrentX = 0


function getReviewPosition(index) {

  let position =
    index - currentReview

  const total =
    reviewCards.length


  if (position > total / 2) {
    position -= total
  }


  if (position < -total / 2) {
    position += total
  }


  return position

}


function updateReviews() {

  reviewCards.forEach(
    (card, index) => {

      card.dataset.pos =
        getReviewPosition(index)

    }
  )


  reviewDots.forEach(
    (dot, index) => {

      dot.classList.toggle(
        'active',
        index === currentReview
      )

    }
  )

}


function nextReview() {

  currentReview =
    (
      currentReview + 1
    ) %
    reviewCards.length

  updateReviews()

}


function previousReview() {

  currentReview =
    (
      currentReview -
      1 +
      reviewCards.length
    ) %
    reviewCards.length

  updateReviews()

}


function startReviewSlider() {

  clearInterval(reviewTimer)

  reviewTimer =
    setInterval(
      nextReview,
      2700
    )

}


reviewDots.forEach(
  (dot, index) => {

    dot.addEventListener(
      'click',
      () => {

        currentReview =
          index

        updateReviews()

        startReviewSlider()

      }
    )

  }
)


reviewStage.addEventListener(
  'pointerdown',
  (event) => {

    reviewStartX =
      event.clientX

    reviewCurrentX =
      event.clientX

  }
)


reviewStage.addEventListener(
  'pointermove',
  (event) => {

    reviewCurrentX =
      event.clientX

  }
)


reviewStage.addEventListener(
  'pointerup',
  () => {

    const distance =
      reviewCurrentX -
      reviewStartX


    if (distance < -40) {

      nextReview()

      startReviewSlider()

    } else if (distance > 40) {

      previousReview()

      startReviewSlider()

    }

  }
)


reviewStage.addEventListener(
  'mouseenter',
  () => {

    clearInterval(
      reviewTimer
    )

  }
)


reviewStage.addEventListener(
  'mouseleave',
  startReviewSlider
)


updateReviews()
startReviewSlider()



/* ========================================
   MOBILE FOOTER ACCORDION
======================================== */

const footerAccordionItems =
  document.querySelectorAll(
    '.footer-accordion-item'
  )


footerAccordionItems.forEach(
  (item) => {

    const button =
      item.querySelector(
        '.footer-accordion-button'
      )


    button.addEventListener(
      'click',
      () => {

        const alreadyOpen =
          item.classList.contains(
            'active'
          )


        footerAccordionItems.forEach(
          (otherItem) => {

            otherItem.classList.remove(
              'active'
            )

          }
        )


        if (!alreadyOpen) {

          item.classList.add(
            'active'
          )

        }

      }
    )

  }
)



/* ========================================
   NEWSLETTER DEMO
======================================== */

const newsletterForm =
  document.querySelector(
    '#newsletterForm'
  )


newsletterForm?.addEventListener(
  'submit',
  (event) => {

    event.preventDefault()

  }
)