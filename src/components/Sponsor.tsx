import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, HandHelping, ShieldCheck, Coins } from "lucide-react";

export default function Sponsor() {
  return (
    <section className="relative overflow-hidden bg-accent/20">
      {/* Subtle floating accent for a calm, wellness feel */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-calm-300/20 dark:bg-calm-800/10 rounded-full blur-3xl animate-float-slow" />

      <div className="container relative mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-brand-600 dark:text-brand-400 mb-6">
          Donate to Mindora Health
        </h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Every young person deserves access to mental health care. Your support
          helps us provide AI-powered mental health solutions to young people
          across Africa.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="group rounded-2xl border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardHeader className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mb-4 group-hover:bg-brand-200 dark:group-hover:bg-brand-900/50 transition-colors">
                <Heart className="w-8 h-8 text-brand-500" />
              </div>
              <CardTitle>AI-Powered Monitoring</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Help develop AI tools to detect mental health issues early.
            </CardContent>
          </Card>

          <Card className="group rounded-2xl border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardHeader className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mb-4 group-hover:bg-brand-200 dark:group-hover:bg-brand-900/50 transition-colors">
                <HandHelping className="w-8 h-8 text-brand-500" />
              </div>
              <CardTitle>Affordable Therapy</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Support virtual therapy sessions for underserved youth.
            </CardContent>
          </Card>

          <Card className="group rounded-2xl border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardHeader className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mb-4 group-hover:bg-brand-200 dark:group-hover:bg-brand-900/50 transition-colors">
                <ShieldCheck className="w-8 h-8 text-brand-500" />
              </div>
              <CardTitle>Self-Help Resources</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Fund mental health resources like games, e-books, and exercises.
            </CardContent>
          </Card>

          <Card className="group rounded-2xl border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardHeader className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mb-4 group-hover:bg-brand-200 dark:group-hover:bg-brand-900/50 transition-colors">
                <Coins className="w-8 h-8 text-brand-500" />
              </div>
              <CardTitle>Breaking Stigma</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Help create a culture of acceptance around mental health.
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Join the Movement – Donate Today</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Every contribution, big or small, has a lasting impact. Choose how you want to support mental health in Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-xl bg-brand-600 hover:bg-brand-700 shadow-sm hover:shadow-md transition-shadow">
              One-time Donation
            </Button>
            <Button className="rounded-xl bg-brand-600 hover:bg-brand-700 shadow-sm hover:shadow-md transition-shadow">
              Monthly Giving
            </Button>
            <Button className="rounded-xl bg-brand-600 hover:bg-brand-700 shadow-sm hover:shadow-md transition-shadow">
              Corporate Partnerships
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
