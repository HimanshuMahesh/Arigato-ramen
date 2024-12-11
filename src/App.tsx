import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeInWhenVisible: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
    >
      {children}
    </motion.div>
  );
};

const App: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-background text-text font-lato">
      <header className="bg-primary text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-playfair">Arigato Ramen</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#hero" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">About</a></li>
              <li><a href="#bowls" className="hover:text-secondary transition-colors">Our Bowls</a></li>
              <li><a href="#ambiance" className="hover:text-secondary transition-colors">Ambiance</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center" style={{ backgroundImage: "url('/images/hero-background.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col md:flex-row items-center justify-center"
            >
              <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                <motion.img
                  src="/images/ramen-bowl.jpg"
                  alt="Delicious Ramen Bowl"
                  className="rounded-full w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] object-cover border-4 border-secondary shadow-lg"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              <div className="md:w-1/2 md:pl-12 text-white text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight font-playfair">
                  Warm your Soul, <br />
                  awaken your <span className="text-secondary">taste buds</span> with <br />
                  our flavorful <span className="text-secondary">ramen</span> 🍜
                </h2>
                <p className="mb-8 font-lato text-lg">
                  Get delicious ramen with a variety of flavors, explore the various variants and taste its deliciousness at Arigato, here at Namma Bengaluru
                </p>
                <div>
                  <motion.button 
                    className="bg-primary hover:bg-opacity-80 text-secondary px-6 py-3 text-lg font-montserrat mt-4 sm:mt-0 rounded"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openPopup}
                  >
                    Discover Our Ramen
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="relative bg-cover bg-center bg-no-repeat py-24 text-white" style={{ backgroundImage: "url('/images/arigato-interior.png')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 relative z-10">
            <FadeInWhenVisible>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center font-playfair">
                A Taste of Japan in Bangalore
              </h2>
            </FadeInWhenVisible>
            <div className="max-w-2xl mx-auto text-center">
              <FadeInWhenVisible>
                <p className="text-lg mb-6 font-lato">
                  Experience authentic Osaka-inspired ramen in the heart of Bangalore. Our carefully crafted bowls blend tradition with innovation, offering a unique dining experience for ramen enthusiasts and newcomers alike.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <p className="text-xl font-semibold italic font-sawarabi">
                  "いらっしゃいませ" – Welcome to flavor and warmth.
                </p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Our Bowls Section */}
        <section id="bowls" className="py-24 bg-cover bg-center" style={{ backgroundImage: "url('/images/ourbowls-bg.jpg')" }}>
          <div className="container mx-auto px-4">
            <FadeInWhenVisible>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white font-playfair">
                Discover Your Perfect Bowl
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <p className="text-xl mb-12 max-w-4xl mx-auto text-center text-white font-lato">
                Carefully crafted ramen bowls, bursting with flavor and comfort.
              </p>
            </FadeInWhenVisible>

            {/* Grid with Bowls */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Tonkotsu Ramen",
                  description: "Rich, creamy pork broth with tender pork belly, soft-boiled egg, and fresh toppings.",
                  imgSrc: "/images/Tonkotsu-Ramen.jpg"
                },
                {
                  name: "Shoyu Ramen",
                  description: "Light soy-based broth with chicken, nori, and a perfectly cooked egg.",
                  imgSrc: "/images/Shoyu-Ramen.jpg"
                },
                {
                  name: "Miso Ramen",
                  description: "Hearty miso-based broth with vegetables, tofu, and marinated pork.",
                  imgSrc: "/images/Miso-Ramen.jpg"
                },
                {
                  name: "Tantanmen",
                  description: "Spicy sesame and chili broth with ground pork and bok choy.",
                  imgSrc: "/images/Tantanmen-Ramen.jpg"
                }
              ].map((bowl, index) => (
                <FadeInWhenVisible key={index}>
                  <motion.div 
                    className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.img
                      src={bowl.imgSrc}
                      alt={bowl.name}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-white font-montserrat">
                        {bowl.name}
                      </h3>
                      <p className="text-gray-300 font-lato">{bowl.description}</p>
                    </div>
                  </motion.div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* Our Ingredients Section */}
        <section className="bg-primary text-white py-24">
          <div className="container mx-auto px-4">
            <FadeInWhenVisible>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center font-playfair">Fresh, Local Ingredients</h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <p className="text-xl mb-6 max-w-2xl mx-auto text-center font-lato">
                Handmade noodles, perfectly simmered broths, and the freshest local ingredients. Experience ramen the way it should be.
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <p className="text-lg font-semibold text-center italic font-sawarabi">
                From Japan's streets to Bangalore's tables - tradition meets freshness in every bowl.
              </p>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Ambiance Section */}
        <section id="ambiance" className="py-24 bg-gray-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <FadeInWhenVisible>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-playfair text-primary">
                  Experience Japan in Bangalore
                </h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <p className="text-xl mb-6 font-lato text-gray-700">
                  Step into a world where minimalist Japanese design meets Bangalore's urban charm. Enjoy authentic ramen in our cozy, inviting space.
                </p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Why Choose Arigato Ramen Section */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <FadeInWhenVisible>
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center font-playfair">Why Choose Arigato Ramen?</h2>
            </FadeInWhenVisible>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[ 
                {
                  title: "Authentic Japanese Ramen",
                  description: "Recipes inspired by the streets of Osaka, prepared with care and dedication."
                },
                {
                  title: "Fresh, Local Ingredients",
                  description: "Sourced daily from Bangalore's markets to guarantee freshness and flavor."
                },
                {
                  title: "Centrally Located",
                  description: "Easily accessible in JP Nagar, a must-visit for ramen lovers."
                },
                {
                  title: "Warm, Inviting Ambiance",
                  description: "A perfect blend of Japanese tradition and Bangalore's vibrant culture."
                }
              ].map((reason, index) => (
                <FadeInWhenVisible key={index}>
                  <motion.div 
                    className="bg-gray-800 p-6 rounded-lg shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 font-montserrat text-secondary">{reason.title}</h3>
                    <p className="font-lato text-gray-300">{reason.description}</p>
                  </motion.div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* Reservation Cards Section */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <FadeInWhenVisible>
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center font-playfair">Reserve Your Ramen Experience</h2>
            </FadeInWhenVisible>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Lunch Special", 
                  time: "11:00 AM - 3:00 PM", 
                  price: "₹499",
                  description: "Perfect for a quick, flavorful midday break. Includes a bowl of signature ramen and a side of gyoza.",
                  icon: "🍜"
                },
                { 
                  title: "Dinner Delight", 
                  time: "6:00 PM - 10:00 PM", 
                  price: "₹699",
                  description: "Indulge in our evening specialties. Enjoy any ramen, an appetizer, and a refreshing drink.",
                  icon: "🥢"
                },
                { 
                  title: "Weekend Feast", 
                  time: "All Day Saturday & Sunday", 
                  price: "₹799",
                  description: "The ultimate ramen experience. Try our chef's special, includes dessert and a traditional tea ceremony.",
                  icon: "🍵"
                }
              ].map((card, index) => (
                <FadeInWhenVisible key={index}>
                  <motion.div 
                    className="bg-gray-800 p-6 rounded-lg shadow-lg text-center border border-secondary"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-4xl mb-4">{card.icon}</div>
                    <h3 className="text-xl font-bold mb-2 font-montserrat text-secondary">{card.title}</h3>
                    <p className="text-gray-400 mb-4 font-lato">{card.time}</p>
                    <p className="text-2xl font-bold text-primary mb-4">{card.price}</p>
                    <p className="text-sm mb-6 font-lato text-gray-300">{card.description}</p>
                    <button 
                      className="bg-secondary text-primary px-6 py-2 rounded-full font-montserrat hover:bg-opacity-90 transition-colors"
                      onClick={() => alert("Booking feature coming soon!")}
                    >
                      Book Now
                    </button>
                  </motion.div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <FadeInWhenVisible>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white font-playfair">
                Ready for Your Ramen Adventure?
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <p className="text-xl mb-8 text-gray-200 font-lato">
                Join us for an unforgettable journey of flavors in the heart of Bangalore.
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <motion.button 
                className="bg-secondary text-primary px-8 py-3 text-lg font-montserrat rounded-full hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert("Reservation feature coming soon!")}
              >
                Reserve Your Table
              </motion.button>
            </FadeInWhenVisible>
          </div>
        </section>
      </main>

      {/* Popup */}
      {isPopupOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closePopup}
        >
          <div 
            className="bg-white p-6 relative max-w-[500px] rounded-lg shadow-lg"
          >
            <p className="text-center text-primary font-montserrat font-bold text-lg mb-4">
              Our Menu
            </p>
            <img 
              src="/images/Ramen-menu.jpg" 
              alt="Ramen Menu" 
              className="w-full object-cover"
            />
          </div>
        </div>
      )}

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-playfair">Arigato Ramen</h3>
              <p className="font-lato mb-4">Authentic Japanese ramen in the heart of Bangalore.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-playfair">Contact Us</h3>
              <p className="font-lato mb-2">123 Ramen Street, JP Nagar</p>
              <p className="font-lato mb-2">Bangalore, Karnataka 560078</p>
              <p className="font-lato mb-2">Phone: (080) 1234-5678</p>
              <p className="font-lato">Email: info@arigatoramen.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-playfair">Opening Hours</h3>
              <p className="font-lato mb-2">Monday - Friday: 11:00 AM - 10:00 PM</p>
              <p className="font-lato mb-2">Saturday - Sunday: 11:00 AM - 11:00 PM</p>
              <p className="font-lato mt-4 text-gray-400">
                * Last order 30 minutes before closing
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="font-lato text-gray-400">&copy; 2023 Arigato Ramen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

