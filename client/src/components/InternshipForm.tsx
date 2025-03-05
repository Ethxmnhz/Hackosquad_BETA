import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export function InternshipForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await addDoc(collection(db, "internship-applications"), {
        feedback,
        timestamp: new Date().toISOString(),
      });

      toast({
        title: "Success!",
        description: "Your application has been submitted. We'll review it and get back to you.",
      });
      setOpen(false);
      setFeedback("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-2">
          Join Our Mission
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Join HackoSquad Development</DialogTitle>
          <DialogDescription className="text-base space-y-4">
            <p>
              We're not a company - we're a community of cybersecurity enthusiasts building the future of security education.
              We don't offer certifications or traditional internship letters.
            </p>
            <p>
              What we offer is real experience: Your ideas will shape our platform, your decisions will matter,
              and you'll be part of building something that helps others learn cybersecurity effectively.
            </p>
            <p className="font-semibold">
              Share with us:
            </p>
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Textarea
              placeholder="What challenges have you faced while learning cybersecurity? How do existing platforms fall short? What would you change to make learning more effective?"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="min-h-[200px]"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
