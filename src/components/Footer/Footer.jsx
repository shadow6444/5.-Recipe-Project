import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <div className="footer-links">
          <div>
            <h3>Pinch of Yum</h3>
            <ul>
              <li>
                <a href="https://pinchofyum.com/about">About</a>
              </li>
              <li>
                <a href="https://pinchofyum.com/blog">Blog</a>
              </li>
              <li>
                <a href="https://pinchofyum.com/recipes">Recipe Index</a>
              </li>
              <li>
                {" "}
                <a href="https://pinchofyum.com/resources">
                  Blogging Resources
                </a>
              </li>
              <li>
                {" "}
                <a href="https://pinchofyum.com/category/making-money-from-a-food-blog">
                  Income Reports
                </a>
              </li>
              <li>
                <a href="https://pinchofyum.com/sponsored-content">
                  Sponsored Content
                </a>
              </li>
              <li>
                {" "}
                <a href="https://pinchofyum.com/media-mentions">
                  Media Mentions
                </a>
              </li>
              <li>
                {" "}
                <a href="https://pinchofyum.com/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Food & Recipes</h3>
            <ul>
              <li>
                <a href="https://pinchofyum.com/everything-you-need-to-know-about-sugar-free-january">
                  Sugar Free January
                </a>
              </li>
              <li>
                <a href="https://pinchofyum.com/freezer-meals">
                  Freezer Meals 101
                </a>
              </li>
              <li>
                <a href="https://pinchofyum.com/recipes/quick-and-easy">
                  Quick and Easy Recipes
                </a>
              </li>
              <li>
                <a href="https://pinchofyum.com/recipes/instant-pot">
                  Instant Pot Recipes
                </a>
              </li>
              <li>
                <a href="https://pinchofyum.com/recipes/pasta">Pasta Recipes</a>
              </li>
              <li>
                <a href="https://pinchofyum.com/recipes/vegan">Vegan Recipes</a>
              </li>
              <li>
                <a href="https://pinchofyum.com/recipes/soup">Soup Recipes</a>
              </li>
              <li>
                <a href="https://pinchofyum.com/recipes/taco">Taco Recipes</a>
              </li>
              <li>
                <a href="https://pinchofyum.com/recipes/meal-prep">
                  Meal Prep Recipes
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="input-brands">
          <div className="footer-input text-center h-44">
            <h3>
              <span className="footer-style1">signup </span>
              <span className="footer-style2">for Email Updates</span>
            </h3>
            <p>Get a Free eCookbook with our top 25 recipes.</p>
            <div className="signup-container">
              <input className="signup" type="text" placeholder="First Name" />
              <input className="signup" type="email" placeholder="Email" />
              <button className="font-extrabold">GO</button>
            </div>
          </div>
          <h3 className="brands">our other brands</h3>
          <div className="brand">
            <a href="https://www.foodbloggerpro.com/">
              <img
              className="food-blog"
                src="/food-blogger-pro-logo.png"
                alt="food blogger logo"
              />
            </a>
            <a href="https://clariti.com/">
              <img
                src="/clariti-logo.svg"
                alt="Clariti Logo"
                className="clariti"
              />
            </a>
          </div>
        </div>
        <div className="social-links">
          <a href="https://www.instagram.com/pinchofyum">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.pinterest.com/pinchofyum/_created/">
            <i className="fab fa-pinterest"></i>
          </a>
          <a href="https://www.tiktok.com/@pinchofyum">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://www.facebook.com/pinchofyum">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com/pinchofyum">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className="copyright">
          <div className="copyright-logo">
            <h1>
              pinch <span className="of-style text-stone-400">of</span> yum
            </h1>
          </div>
          <div className="copyright-terms">
            <p>&copy; 2024 Pinch of Yum. All Rights Reserved.</p>
            <p>A Raptive Partner Site.</p>
          </div>
        </div>
      </section>
      <p className="policy">
        <a href="https://pinchofyum.com/privacy-policy">Privacy Policy</a>
        <a href="https://pinchofyum.com/terms-of-service">Terms</a>
      </p>
    </footer>
  );
};
export default Footer;
