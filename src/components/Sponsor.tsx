import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, HandHelping, ShieldCheck, Coins } from "lucide-react";

export default function Sponsor() {
  return (
    <div className="container mx-auto px-4 py-10 text-center">
      <h1 className="text-4xl font-bold text-purple-600 mb-6">
        Donate to Mindora Health
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
        Every young person deserves access to mental health care. Your support
        helps us provide AI-powered mental health solutions to young people
        across Africa.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-col items-center">
            <Heart className="w-12 h-12 text-purple-500" />
            <CardTitle>AI-Powered Monitoring</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Help develop AI tools to detect mental health issues early.
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-col items-center">
            <HandHelping className="w-12 h-12 text-purple-500" />
            <CardTitle>Affordable Therapy</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Support virtual therapy sessions for underserved youth.
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-col items-center">
            <ShieldCheck className="w-12 h-12 text-purple-500" />
            <CardTitle>Self-Help Resources</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Fund mental health resources like games, e-books, and exercises.
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-col items-center">
            <Coins className="w-12 h-12 text-purple-500" />
            <CardTitle>Breaking Stigma</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Help create a culture of acceptance around mental health.
          </CardContent>
        </Card>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Join the Movement – Donate Today</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Every contribution, big or small, has a lasting impact. Choose how you want to support mental health in Africa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-purple-600 hover:bg-purple-700">
            One-time Donation
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Monthly Giving
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Corporate Partnerships
          </Button>
        </div>
      </div>
    </div>
  );
}
