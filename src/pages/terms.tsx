import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { GradientBackground } from '@/components/ui/gradient-background'
import { Shield, AlertTriangle, Lock } from 'lucide-react'

export default function Terms() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const terms = [
    {
      title: 'External Servers',
      icon: Shield,
      content: 'No external serversides / code executors (gets blocked by AI ss detector)'
    },
    {
      title: 'Game Security',
      icon: Lock,
      content: 'No snitching of infected games'
    },
    {
      title: 'Communication Policy',
      icon: AlertTriangle,
      content: 'Don\'t communicate about Torrent (automatic blacklist thanks to AI moderation systems)'
    }
  ]

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
            <span className="gradient-text">Terms of Service</span>
          </motion.h1>

          <Card className="backdrop-blur-xl bg-black/40">
            <div className="p-8">
              <div className="space-y-8">
                {terms.map((term, index) => (
                  <motion.div
                    key={term.title}
                    className="glass-card p-6 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-lg bg-green-500/10">
                        <term.icon className="h-6 w-6 text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold gradient-text">{term.title}</h3>
                    </div>
                    <p className="text-gray-300">{term.content}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-12 p-6 rounded-xl bg-green-500/5 border border-green-500/10"
                {...fadeInUp}
                transition={{ delay: 0.6 }}
              >
                <p className="text-gray-300 leading-relaxed">
                  By using our service, you agree to comply with these terms. Violation of any of these terms may result in immediate termination of your account and access to our services.
                </p>
              </motion.div>

              <motion.p 
                className="mt-8 text-sm text-gray-400 text-center"
                {...fadeInUp}
                transition={{ delay: 0.7 }}
              >
                These terms are subject to change at any time. It is your responsibility to check for updates to these terms regularly.
              </motion.p>
            </div>
          </Card>
        </motion.div>
      </div>
    </GradientBackground>
  )
}