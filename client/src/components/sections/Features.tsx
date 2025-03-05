import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Target, Trophy, Brain, Lock, LineChart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "CTF Challenges",
    description: "Test your skills with capture the flag challenges"
  },
  {
    icon: Target,
    title: "Learning Paths",
    description: "Structured paths for beginners to experts"
  },
  {
    icon: Trophy,
    title: "Achievements",
    description: "Earn badges and climb the leaderboard"
  },
  {
    icon: Brain,
    title: "Skill Building",
    description: "Practice with real-world scenarios"
  },
  {
    icon: Lock,
    title: "Security Labs",
    description: "Hands-on experience in secure environments"
  },
  {
    icon: LineChart,
    title: "Progress Tracking",
    description: "Monitor your learning journey"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Features() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-background to-background" />

      {/* Animated gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Platform Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to master cybersecurity skills in one place
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={item}>
              <Card className="group relative overflow-hidden bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="p-8 relative">
                  <feature.icon className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}