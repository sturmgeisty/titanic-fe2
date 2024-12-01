import { motion } from 'framer-motion'
import { Shield, Zap, Lock, MessageSquare, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Animated background*/}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.1),transparent_50%)]" />
        <div className="absolute inset-0 cyber-grid opacity-20" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <img 
              src="https://media.discordapp.net/attachments/1312697488951480382/1312798709557362779/Test_00000.png?ex=674dce92&is=674c7d12&hm=ba35b85854b39e83ef7194502652f8bc7a44ce01cb0961ec73d9d3498b828e71&=&format=webp&quality=lossless&width=563&height=563"
              className="w-32 h-32 rounded-full ring-4 ring-green-500/30 animate-glow"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-6xl md:text-7xl font-bold mb-6 gradient-text"
          >
            Titanic Serverside
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-12"
          >
            Experience unlimited power with our premium serverside solution.
            Join thousands of satisfied users today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a 
              href="https://discord.gg/xdNsAC9Xmm"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button size="lg" className="w-full sm:w-auto group-hover:animate-glow">
                <span>Join Discord</span>
                <MessageSquare className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </Button>
            </a>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16 gradient-text"
          >
            Premium Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Secure', desc: 'Advanced security measures.' },
              { icon: Lock, title: 'Private', desc: 'Your data stays protected.' },
              { icon: Zap, title: 'Fast', desc: 'Lightning-fast performance.' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card p-8 rounded-xl hover:translate-y-[-8px] transition-all duration-300"
              >
                <feature.icon className="h-12 w-12 text-green-400 mb-6" />
                <h3 className="text-xl font-bold mb-4 gradient-text">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16 gradient-text"
          >
            Choose Your Plan
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'BASIC ACCESS',
                price: '€10',
                features: ['Full Basic Access', 'Immediate Support', 'Games up to 100 players'],
                link: 'https://titanic.bgng.io/product/basic-access'
              },
              {
                title: 'PLUS ACCESS',
                price: '€15',
                features: ['Full Plus Access', 'Priority Support', 'Games up to 250 players', 'Exclusive Updates'],
                link: 'https://titanic.bgng.io/product/plus-access',
                highlight: true
              },
              {
                title: 'ULTRA ACCESS',
                price: '€25',
                features: ['Full Ultra Access', 'Priority Support', 'No limit on player count', 'Exclusive Updates'],
                link: 'https://titanic.bgng.io/product/ultra-access'
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`glass-card rounded-xl p-8 ${plan.highlight ? 'border-green-500 shadow-green-500/20 shadow-lg' : ''}`}
              >
                {plan.highlight && (
                  <div className="text-green-400 text-sm font-medium mb-2">★ Most Popular</div>
                )}
                <h3 className="text-xl font-bold mb-4 gradient-text">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-2">Monthly License</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full">Get Started</Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
