import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
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

export function Features() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-background to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Platform Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to master cybersecurity skills in one place
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}