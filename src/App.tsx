import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

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
      <Header />
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-24" style={{ backgroundImage: "url('/images/hero-background.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2 flex justify-center">
                <img
                  src="/images/ramen-bowl.jpg"
                  alt="Delicious Ramen Bowl"
                  className="rounded-full w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] object-cover border-4 border-secondary shadow-lg"
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
                  <button 
                    className="bg-primary hover:bg-opacity-80 text-secondary px-6 py-3 text-lg font-montserrat mt-4 sm:mt-0 rounded transition-transform transform hover:scale-105"
                    onClick={openPopup}
                  >
                    Discover Our Ramen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* About Us Section */}
<section id="about" className="bg-background text-text py-8 sm:py-12">
  <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-primary font-playfair">
      Welcome to Arigato Ramen – A Taste of Japan in Bangalore
    </h2>
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
      <div className="md:w-[35%]">
        <img
          src="./images/arigato-interior.png"
          alt="Arigato Ramen Restaurant"
          className="rounded-lg shadow-lg mx-auto w-full"
        />
      </div>
      <div className="md:w-[55%]">
        <p className="text-lg mb-4 font-lato">
          Arigato Ramen is where the rich flavors of Japan meet the vibrant energy of Bangalore. Our ramen bowls are inspired by the bustling streets of Osaka and are carefully prepared to deliver an authentic Japanese dining experience. Whether you're a ramen enthusiast or new to this iconic dish, each bowl offers a fusion of tradition and innovation.
        </p>
        <p className="text-lg mb-4 font-lato">
          Our aim is to create a space where the comfort of Japanese ramen blends seamlessly with the cosmopolitan vibe of Bangalore.
        </p>
        <p className="text-xl font-semibold text-center md:text-left italic text-primary font-sawarabi">
          "いらっしゃいませ(Irasshaimase)" – Come in and experience warmth and flavor.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Our Bowls Section */}
<section id="bowls"
  className="py-12 sm:py-20"
  style={{
    backgroundImage: `url('/images/ourbowls-bg.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="container mx-auto px-4">
    <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-background font-playfair">
      Discover Your Perfect Bowl at Arigato Ramen
    </h2>
    <p className="text-xl mb-12 max-w-4xl mx-auto text-center text-background font-lato">
    designed to showcase the depth of Japanese ramen, using carefully selected ingredients to deliver bowls that are as flavorful as they are comforting.
    </p>

    {/* Grid with Bowls */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          name: "Tonkotsu Ramen",
          description:
            "This creamy, rich pork broth is simmered for 12 hours to achieve its deep flavor and velvety texture. Topped with tender slices of pork belly, a soft-boiled egg, bamboo shoots, and spring onions, it's the ultimate indulgence.",
          imgSrc: "/images/Tonkotsu-Ramen.jpg"
        },
        {
          name: "Shoyu Ramen",
          description:
            "A lighter, more delicate broth based on soy sauce. Its subtle, savory flavor is balanced by fresh toppings like chicken, nori (seaweed), and a soft-boiled egg. Perfect for those who enjoy a flavorful yet lighter ramen experience.",
          imgSrc: "/images/Shoyu-Ramen.jpg"
        },
        {
          name: "Miso Ramen",
          description:
            "Featuring a robust and earthy miso-based broth, this bowl is packed with umami flavor. The miso blends perfectly with vegetables, tofu, and marinated pork, making it a hearty and filling choice.",
          imgSrc: "/images/Miso-Ramen.jpg"
        },
        {
          name: "Tantanmen",
          description:
            "For spice lovers, our Tantanmen is the perfect choice. A bold, spicy sesame and chili broth, this bowl is sure to leave a lasting impression. The ground pork, bok choy, and a dash of chili oil provide a fiery yet well-balanced experience.",
          imgSrc: "/images/Tantanmen-Ramen.jpg"
        }
      ].map((bowl, index) => (
        <div key={index} className="bg-background rounded-lg shadow-lg p-6">
          <img
            src={bowl.imgSrc}
            alt={bowl.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-primary font-montserrat">
            {bowl.name}
          </h3>
          <p className="text-text font-lato">{bowl.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Our Ingredients Section */}
        <section className="bg-primary text-background py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center font-playfair">Traditional Craft, Fresh Ingredients</h2>
            <p className="text-xl mb-6 max-w-4xl mx-auto text-center font-lato">
            Craving a real ramen experience? Look no further. Our noodles are handmade daily, and our broths are simmered to perfection. Plus, we use only the freshest ingredients from around Bangalore. It's ramen the way it should be.
            </p>
            <p className="text-xl font-semibold text-center italic font-sawarabi">
              From the timeless streets of Japan to the tables of Bangalore, each bowl represents a perfect blend of tradition and freshness.
            </p>
          </div>
        </section>

{/* Static Eat Noods Strip */}
<section className="bg-pink-200 py-4">
  <div className="container mx-auto text-center">
    <p className="font-playfair text-red-300 text-2xl">
      $$ EAT NOODS, FEEL GOOD $$
    </p>
  </div>
</section>

{/* Ambiance Section */}
<section className="py-8 sm:py-12 bg-background">
  <div className="container mx-auto px-6 md:px-12">
    <div className="flex flex-col md:flex-row items-center md:justify-between">
      
      {/* Left Section - Text and Heading */}
      <div className="md:w-[55%] mb-8 md:mb-0 md:pr-4"> 
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-primary font-playfair">
          Step Into Japan, Here in Bangalore
        </h2>
        <p className="text-xl mb-4 font-lato text-text">
          The ambiance at Arigato Ramen is a mix of minimalist Japanese design and the urban charm of Bangalore. Our cozy space features traditional wooden interiors and a relaxed atmosphere, creating the perfect setting to enjoy a comforting bowl of ramen.
        </p>
        <p className="text-xl font-lato text-text">
          Whether it's a quick meal or a leisurely dinner, Arigato Ramen provides an authentic Japanese dining experience right in the heart of Bangalore.
        </p>
      </div>
      {/* Right Section - Image */}
      <div className="md:w-[40%] sm:w-full mb-8 md:mb-0 md:pl-4"> 
        <div className="relative w-[325px] h-[325px] mx-auto"> 
          <img
            src="/images/ambience.jpg" 
            alt="Arigato Ramen Interior"
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
</section>

{/* Why Choose Arigato Ramen Section */}
<section className="relative bg-cover bg-center py-12 sm:py-20" style={{ backgroundImage: "url('/images/whyus.jpg')" }}>
  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center font-playfair text-white">Why Choose Arigato Ramen?</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {[ 
        {
          title: "Authentic Japanese Ramen",
          description: "Our recipes are inspired by the streets of Osaka, prepared with care and dedication."
        },
        {
          title: "Fresh, Local Ingredients",
          description: "Sourced daily from Bangalore's markets to guarantee freshness and flavor."
        },
        {
          title: "Centrally Located",
          description: "Situated in JP Nagar, Arigato Ramen is easily accessible and a must-visit for ramen lovers."
        },
        {
          title: "Warm, Inviting Ambiance",
          description: "A mix of Japanese tradition and Bangalore's vibrant culture, offering the perfect dining experience."
        }
      ].map((reason, index) => (
        <div key={index} className="bg-background text-text p-6 rounded-lg shadow-lg">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-primary font-montserrat">{reason.title}</h3>
          <p className="font-lato">{reason.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Pricing Section */}
<section id="pricing"
  className="py-6 sm:py-8"  // Further reduced padding to decrease height
  style={{
    backgroundColor: "#EDE2CE" // Background color from the uploaded palette
  }}
>
  <div className="container mx-auto px-6 md:px-12">  {/* Added more padding between the screen edges */}
    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center font-playfair"
      style={{ color: "#181C14" }}  // Primary dark color for the title
    >
      Arigato Ramen Reservation Pricing
    </h2>
    <p className="text-xl mb-8 max-w-4xl mx-auto text-center font-lato"
      style={{ color: "#3E4039" }}  // Text color for the description
    >
      Secure your seat at our exclusive ramen bar in Bangalore. Choose a reservation package to savor your perfect ramen experience.
    </p>

    {/* Grid with Pricing Tiers */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          tier: "Classic",
          price: "Free",
          description:
            "A traditional ramen experience. Perfect for first-time visitors looking to explore the flavors of Arigato Ramen.",
          features: [
            "1 Hour Reservation Slot",
            "Access to All Menu Items",
            "Cozy Seating",
            "Free Refills of Green Tea"
          ],
          bgColor: "#3E4039"
        },
        {
          tier: "Premium",
          price: "₹500 /person",
          description:
            "The Premium experience offers exclusive seating and personalized service for a very refined visit at Arigato Ramen.",
          features: [
            "2 Hour Reservation Slot",
            "Seating by the Chef's Counter",
            "Personalized Ramen Selection",
            "Complimentary Sake"
          ],
          bgColor: "#5E6A59"
        },
        {
          tier: "VIP",
          price: "₹1000 /person",
          description:
            "An unparalleled experience for the ultimate ramen enthusiast. Includes private dining and chef's tasting menu.",
          features: [
            "3 Hour Reservation Slot",
            "Private Dining Room",
            "Chef's Tasting Menu",
            "Complimentary Pairing Drinks"
          ],
          bgColor: "#181C14"
        }
      ].map((plan, index) => (
        <div
          key={index}
          className="rounded-lg shadow-lg p-6 transform transition-transform duration-500 hover:scale-105"
          style={{
            backgroundColor: plan.bgColor,  // Use the new palette colors for each plan
            color: "#EDE2CE"  // Text color from the palette for content inside the cards
          }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-center font-montserrat">
            {plan.tier}
          </h3>
          <p className="text-4xl font-bold mb-4 text-center font-montserrat">
            {plan.price}
          </p>
          <p className="text-lg mb-6 text-center font-lato">
            {plan.description}
          </p>
          <ul className="mb-6 space-y-2 font-lato">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center justify-center">
                <span className="mr-2">✔️</span> {feature}
              </li>
            ))}
          </ul>
          <button
            className="bg-white text-black font-bold py-2 px-4 rounded-lg w-full"
            onClick={() => alert("Reservation feature coming soon!")}
          >
            Reserve Now
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

      </main>
{/* Popup */}
{isPopupOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" 
          onClick={closePopup} // Close popup when clicking anywhere on the screen
        >
          <div 
            className="bg-black bg-opacity-70 p-6 relative max-w-[500px] rounded-lg shadow-lg"
          >
            {/* Popup Header Text */}
            <p className="text-center text-secondary font-montserrat font-bold text-lg mb-4">
              Tap anywhere to return
            </p>
            
            {/* Popup Image */}
            <img 
              src="/images/Ramen-menu.jpg" 
              alt="Ramen Menu" 
              className="w-full object-cover" // No rounded corners, no white background
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;
