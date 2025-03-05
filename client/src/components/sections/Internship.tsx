import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Star, Award } from "lucide-react";

export function Internship() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Join as an Intern</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Looking for passionate individuals to help shape the future of HackoSquad
          </p>
        </motion.div>

        <Card className="bg-card/30 backdrop-blur-sm border-primary/20">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">What You'll Get</h3>
                <ul className="space-y-4">
                  {[
                    {
                      icon: Star,
                      text: "Higher level platform privileges"
                    },
                    {
                      icon: Rocket,
                      text: "Direct involvement in platform development"
                    },
                    {
                      icon: Award,
                      text: "Recognition in the cybersecurity community"
                    }
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <item.icon className="w-5 h-5 text-primary" />
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <Button size="lg" className="mt-8">
                  Apply Now
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary/5 rounded-lg p-6"
              >
                <h4 className="text-xl font-semibold mb-4">Requirements</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Passion for cybersecurity</li>
                  <li>• Basic understanding of security concepts</li>
                  <li>• Willingness to learn and contribute</li>
                  <li>• Good communication skills</li>
                  <li>• Ability to work in a team</li>
                </ul>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
