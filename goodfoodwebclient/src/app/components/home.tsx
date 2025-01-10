import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>GoodFood - Order & Deliver</title>
        <meta name="description" content="Delicious food delivered to your doorstep in minutes!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-500">GoodFood</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="text-gray-700 hover:text-green-500">Compte</a></li>
              <li><a href="#menu" className="text-gray-700 hover:text-green-500">Menus</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-green-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-green-500 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Fast. Fresh. Delivered.</h2>
            <p className="mb-6">Craving something delicious? Order now and let us bring your favorite meals to you!</p>
            <a
              href="#menu"
              className="bg-white text-green-500 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-100"
            >
              View Menu
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">Pourquoi ne pas rejoindre l'aventure GoodFood ?</h3>
            <p className="text-gray-700 mb-8">
              At Foodie Express, we pride ourselves on delivering quality food fast and fresh. With a wide variety of dishes,
              there's something for everyone!
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Wide Selection</h4>
                <p>Choose from hundreds of dishes from your favorite local restaurants.</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Fast Delivery</h4>
                <p>Get your food delivered in under 30 minutes, guaranteed.</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Fresh & Hot</h4>
                <p>We ensure your food arrives fresh and piping hot every time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">Our Popular Dishes</h3>
            <p className="text-gray-700 mb-8">Check out some of our customer favorites!</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <Image
                  src="/dish1.jpg"
                  alt="Delicious Pizza"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <h4 className="text-xl font-semibold mt-4">Margherita Pizza</h4>
                <p className="text-gray-500">$12.99</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <Image
                  src="/dish2.jpg"
                  alt="Sushi Platter"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <h4 className="text-xl font-semibold mt-4">Sushi Platter</h4>
                <p className="text-gray-500">$24.99</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <Image
                  src="/dish3.jpg"
                  alt="Classic Burger"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <h4 className="text-xl font-semibold mt-4">Classic Burger</h4>
                <p className="text-gray-500">$10.99</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-700 mb-8">Have questions? We're here to help!</p>
            <form className="max-w-lg mx-auto space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-lg"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-green-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Foodie Express. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
