import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/showcases', label: 'Showcases' },
    { path: '/policy', label: 'Policy' },
    { path: '/terms', label: 'Terms' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-green-500/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <motion.img
                src="https://cdn.discordapp.com/icons/1312686770663718932/4e5f58a6631a6b3a10b88619f4cce028.png?size=1024"
                className="h-10 w-10 rounded-full ring-2 ring-green-500/20"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              />
              <motion.span
                className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Titanic Admin
              </motion.span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div key={item.path} whileHover={{ scale: 1.05 }}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://discord.gg/xdNsAC9Xmm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="group animate-glow">
                    <span>Join Discord</span>
                    <MessageSquare className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-green-500/10 hover:text-white focus:outline-none"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl"
          >
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-green-500/10 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://discord.gg/xdNsAC9Xmm"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block"
              >
                <Button className="w-full group animate-glow">
                  <span>Join Discord</span>
                  <MessageSquare className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
