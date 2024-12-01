import { Shield, MessageSquare } from 'lucide-react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.img
            src="https://cdn.discordapp.com/icons/1312686770663718932/4e5f58a6631a6b3a10b88619f4cce028.png?size=1024"
            className="h-16 w-16 rounded-full ring-2 ring-green-500/20"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          
          <motion.div 
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="https://discord.gg/xdNsAC9Xmm"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button variant="outline" size="lg" className="animate-glow">
                <span>Join Our Discord</span>
                <MessageSquare className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </Button>
            </a>
            
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Shield className="h-5 w-5 text-green-400" />
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Titanic Serverside. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
