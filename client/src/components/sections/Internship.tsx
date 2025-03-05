import { motion } from "framer-motion";
import { InternshipForm } from "@/components/InternshipForm";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Rocket, Award } from "lucide-react";

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
          <h2 className="text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Looking for passionate individuals who want to shape the future of cybersecurity education
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
                <h3 className="text-2xl font-bold mb-4">Important Note</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground mb-4">
                    We're not a company - we're a community of cybersecurity enthusiasts building the future of security education.
                    We don't offer certifications or traditional internship letters.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    What we offer is real experience: Your ideas will shape our platform, your decisions will matter,
                    and you'll be part of building something that helps others learn cybersecurity effectively.
                  </p>
                  <p className="text-muted-foreground">
                    If you're looking for a certificate to add to your LinkedIn profile, this isn't for you.
                    But if you want to make a real impact in cybersecurity education, let's talk.
                  </p>
                </div>

                <InternshipForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary/5 rounded-lg p-6"
              >
                <h4 className="text-xl font-semibold mb-4">What You'll Get</h4>
                <ul className="space-y-4">
                  {[
                    {
                      icon: Star,
                      text: "Direct involvement in platform decisions"
                    },
                    {
                      icon: Rocket,
                      text: "Real impact on cybersecurity education"
                    },
                    {
                      icon: Award,
                      text: "Experience building a real-world platform"
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
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}