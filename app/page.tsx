'use client';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [scrollY, setScrollY] = useState(0);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMenu = (category) => {
    setSelectedCategory(category);
    menuRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const menuItems = [
    {
      name: 'Classic Burger',
      category: 'burger',
      price: '$12',
      desc: 'Angus beef, cheddar, special sauce',
      img: 'https://plus.unsplash.com/premium_photo-1683619761492-639240d29ef5?w=800&q=80',
    },
    {
      name: 'BBQ Burger',
      category: 'burger',
      price: '$14',
      desc: 'Smoked bacon, BBQ sauce, onion rings',
      img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80',
    },
    {
      name: 'Vegan Burger',
      category: 'burger',
      price: '$13',
      desc: 'Plant-based patty, avocado, arugula',
      img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800&q=80',
    },
    {
      name: 'Margherita Pizza',
      category: 'pizza',
      price: '$15',
      desc: 'Fresh mozzarella, basil, tomato sauce',
      img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80',
    },
    {
      name: 'Pepperoni Pizza',
      category: 'pizza',
      price: '$17',
      desc: 'Double pepperoni, mozzarella, oregano',
      img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80',
    },
    {
      name: 'Truffle Pizza',
      category: 'pizza',
      price: '$22',
      desc: 'Black truffle, mushrooms, parmesan',
      img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
    },
    {
      name: 'Seafood Spaghetti',
      category: 'spaghetti',
      price: '$18',
      desc: 'Shrimp, mussels, calamari, white wine sauce',
      img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80',
    },
    {
      name: 'Carbonara',
      category: 'spaghetti',
      price: '$16',
      desc: 'Pancetta, egg yolk, parmesan, black pepper',
      img: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80',
    },
    {
      name: 'Aglio e Olio',
      category: 'spaghetti',
      price: '$14',
      desc: 'Garlic, olive oil, chili flakes, parsley',
      img: 'https://images.unsplash.com/photo-1673442635746-7dac9fc3e6ca?w=800&q=80',
    },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? menuItems
      : menuItems.filter((i) => i.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style jsx global>{`
        * { box-sizing: border-box; } body { overflow-x: hidden; margin: 0; padding: 0; }
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-25px) rotate(5deg); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 30px rgba(212,175,55,0.7), 0 0 60px rgba(212,175,55,0.4); } 50% { box-shadow: 0 0 50px rgba(212,175,55,1), 0 0 90px rgba(212,175,55,0.6); } }
        @keyframes shimmer { 0% { background-position: -1000px 0; } 100% { background-position: 1000px 0; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        .float { animation: float 4s ease-in-out infinite; } .glow { animation: glow 2.5s ease-in-out infinite; }
        .shimmer { background: linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent); background-size: 1000px 100%; animation: shimmer 3s infinite; }
        .fade-up { animation: fadeUp 0.8s ease-out forwards; }
      `}</style>

      {/* Hero with Parallax */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920)',
            transform: `translateY(${scrollY * 0.5}px) scale(${
              1 + scrollY * 0.0003
            })`,
            filter: 'brightness(0.6)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
        <div
          className="absolute top-20 left-10 text-9xl float opacity-15"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          🍕
        </div>
        <div
          className="absolute top-40 right-20 text-8xl float opacity-15"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
            animationDelay: '1s',
          }}
        >
          🍔
        </div>
        <div
          className="absolute bottom-40 left-1/4 text-7xl float opacity-15"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            animationDelay: '2s',
          }}
        >
          🍝
        </div>
        <div
          className="relative z-10 text-center px-4 fade-up max-w-6xl mx-auto"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <h1
            className="text-7xl md:text-9xl font-bold mb-6 shimmer"
            style={{
              color: '#d4af37',
              textShadow:
                '0 0 50px rgba(212,175,55,0.9), 0 0 100px rgba(212,175,55,0.5)',
              letterSpacing: '-3px',
            }}
          >
            TestRestau
          </h1>
          <p
            className="text-3xl md:text-4xl mb-14 font-light"
            style={{ color: '#ffd700' }}
          >
            Luxury Dining Experience
          </p>
          <div className="flex gap-5 justify-center flex-wrap">
            <button
              onClick={() => scrollToMenu('pizza')}
              className="glow px-12 py-6 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-full text-xl font-bold hover:scale-110 transition-all duration-300"
            >
              🍕 Pizza
            </button>
            <button
              onClick={() => scrollToMenu('burger')}
              className="glow px-12 py-6 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-full text-xl font-bold hover:scale-110 transition-all duration-300"
              style={{ animationDelay: '0.3s' }}
            >
              🍔 Burgers
            </button>
            <button
              onClick={() => scrollToMenu('spaghetti')}
              className="glow px-12 py-6 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-full text-xl font-bold hover:scale-110 transition-all duration-300"
              style={{ animationDelay: '0.6s' }}
            >
              🍝 Spaghetti
            </button>
          </div>
        </div>
      </div>

      {/* Menu with Parallax */}
      <div
        ref={menuRef}
        className="py-28 px-4 max-w-7xl mx-auto"
        style={{
          background: 'linear-gradient(180deg, black, #1a1a1a, black)',
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      >
        <div className="text-center mb-20">
          <h2
            className="text-6xl md:text-8xl font-bold mb-5"
            style={{
              color: '#d4af37',
              textShadow: '0 0 40px rgba(212,175,55,0.6)',
            }}
          >
            Our Menu
          </h2>
          <p className="text-2xl text-gray-400">Handcrafted with passion</p>
        </div>
        <div className="flex gap-5 justify-center mb-20 flex-wrap">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-9 py-5 rounded-full font-bold transition-all duration-300 text-lg ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-yellow-600 to-yellow-700 scale-110 shadow-2xl'
                : 'bg-gray-800 hover:bg-gray-700 hover:scale-105'
            }`}
          >
            All Items
          </button>
          <button
            onClick={() => setSelectedCategory('pizza')}
            className={`px-9 py-5 rounded-full font-bold transition-all duration-300 text-lg ${
              selectedCategory === 'pizza'
                ? 'bg-gradient-to-r from-yellow-600 to-yellow-700 scale-110 shadow-2xl'
                : 'bg-gray-800 hover:bg-gray-700 hover:scale-105'
            }`}
          >
            🍕 Pizza
          </button>
          <button
            onClick={() => setSelectedCategory('burger')}
            className={`px-9 py-5 rounded-full font-bold transition-all duration-300 text-lg ${
              selectedCategory === 'burger'
                ? 'bg-gradient-to-r from-yellow-600 to-yellow-700 scale-110 shadow-2xl'
                : 'bg-gray-800 hover:bg-gray-700 hover:scale-105'
            }`}
          >
            🍔 Burgers
          </button>
          <button
            onClick={() => setSelectedCategory('spaghetti')}
            className={`px-9 py-5 rounded-full font-bold transition-all duration-300 text-lg ${
              selectedCategory === 'spaghetti'
                ? 'bg-gradient-to-r from-yellow-600 to-yellow-700 scale-110 shadow-2xl'
                : 'bg-gray-800 hover:bg-gray-700 hover:scale-105'
            }`}
          >
            🍝 Spaghetti
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredItems.map((item, i) => (
            <div
              key={i}
              className="fade-up bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden hover:scale-105 hover:-translate-y-3 transition-all duration-500 border-2 border-yellow-700/40 hover:border-yellow-500 shadow-2xl group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-72 overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                  style={{
                    filter: 'brightness(0.95) contrast(1.15) saturate(1.2)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-8">
                <h3
                  className="text-3xl font-bold mb-4"
                  style={{ color: '#d4af37' }}
                >
                  {item.name}
                </h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {item.desc}
                </p>
                <p
                  className="text-5xl font-bold"
                  style={{
                    color: '#ffd700',
                    textShadow: '0 0 25px rgba(255,215,0,0.6)',
                  }}
                >
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        className="py-20 px-4 text-center max-w-7xl mx-auto"
        style={{ background: 'linear-gradient(180deg, #1a1a1a, black)' }}
      >
        <div className="max-w-4xl mx-auto">
          <h3
            className="text-6xl font-bold mb-10"
            style={{
              color: '#d4af37',
              textShadow: '0 0 35px rgba(212,175,55,0.6)',
            }}
          >
            Visit Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-3xl mb-4">📍 Location</p>
              <p className="text-gray-400 text-2xl">Tangier, Morocco</p>
            </div>
            <div>
              <p className="text-3xl mb-4">📞 Contact</p>
              <a
                href="https://wa.me/21206123"
                className="text-yellow-500 hover:text-yellow-400 transition-colors font-bold text-2xl"
              >
                +212 06123
              </a>
              <p className="text-gray-500 mt-2">(Click to WhatsApp)</p>
            </div>
          </div>
          <div className="mt-20 text-gray-600">
            <p className="text-lg">© 2026 TestRestau - Luxury Dining</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
