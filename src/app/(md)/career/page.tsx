import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, ArrowRight, Users } from "lucide-react";
import Link from "next/link";

export default function Careers() {
  return (
    <div className="container mx-auto px-4 py-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Join Our Mission at Mindora Health</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
        At Mindora Health, we are revolutionizing mental health care for young people across Africa.
        Be part of a team that’s making a difference with AI-powered and culturally sensitive solutions.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-col items-center">
            <Briefcase className="w-12 h-12 text-primary" />
            <CardTitle>Purpose-Driven Impact</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Work on projects that have a real impact on mental health for young Africans.
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-col items-center">
            <Users className="w-12 h-12 text-primary" />
            <CardTitle>Diverse & Inclusive Culture</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Thrive in a welcoming, innovative, and inclusive environment where your ideas matter.
          </CardContent>
        </Card>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
        <p className="text-muted-foreground mb-6">(To be posted soon)</p>
      </div>

      <div className="mt-10 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">Join Our Talent Community</h2>
        <p className="text-muted-foreground max-w-2xl mb-6">
          Even if there are no current openings that fit, stay connected! Be the first to know about new opportunities.
        </p>
        <Button asChild>
          <Link href="career/hall-of-fame" className="flex items-center gap-2">
            Visit Our Hall of Fame <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
