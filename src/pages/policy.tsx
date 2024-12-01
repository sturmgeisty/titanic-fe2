import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { GradientBackground } from '@/components/ui/gradient-background'
import { Shield } from 'lucide-react'

export default function Policy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <GradientBackground className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <motion.div {...fadeInUp}>
          <motion.h1 
            className="text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">Privacy Policy</span>
          </motion.h1>

          <Card className="mb-8 backdrop-blur-xl bg-black/40">
            <div className="p-8">
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed mb-8"
                {...fadeInUp}
              >
                Torrent Serverside acknowledges the importance of your data and does its best at ensuring your data is securely stored in our systems. We will never sell or provide your user information or share it in any way, we respect your privacy.
              </motion.p>

              <motion.div 
                className="mb-12"
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-green-400 mb-6 flex items-center">
                  <Shield className="mr-2 h-6 w-6" />
                  Data We Collect
                </h2>
                <ul className="space-y-4">
                  {[
                    'HTTP requests body (sent to or through our service)',
                    'Discord Messages in Torrent Server / Bot Interactions',
                    'Roblox Account (used for linking for HTTP whitelist)',
                    'Scripts ran by your linked ROBLOX account',
                    'Chat logs of infected game servers (including those who aren\'t whitelisted)'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start space-x-3 text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <span className="text-green-400 mt-1">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                className="glass-card p-8 rounded-xl"
                {...fadeInUp}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-semibold text-green-400 mb-6">Refund Policy</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3">No Refunds</h3>
                    <p className="text-gray-300">
                      All sales are final, no refunds will be issued under any circumstances once the purchase is completed.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">No Exceptions:</h4>
                    <ul className="space-y-3 text-gray-300">
                      {[
                        'Change of Mind: If you change your mind after the purchase.',
                        'Misuse: If the product was used in a manner not intended by its design.',
                        'Technical Issues: If you encounter any technical issues, our support team is available to assist, but refunds will not be provided.'
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          <span className="text-green-400 mt-1">•</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.p 
                className="mt-8 text-gray-400 text-center"
                {...fadeInUp}
                transition={{ delay: 0.6 }}
              >
                By purchasing our product, you acknowledge that you have read and consent to the Privacy Policy and Refund Policy.
              </motion.p>
            </div>
          </Card>
        </motion.div>
      </div>
    </GradientBackground>
  )
}