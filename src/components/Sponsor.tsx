import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, HandHelping, ShieldCheck, Coins, ArrowRight, Sparkles } from "lucide-react";

export default function Sponsor() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-ping delay-0"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/40 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-primary/20 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-primary/50 rounded-full animate-ping delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold mb-12 border border-primary/20">
          <Sparkles className="w-5 h-5" />
          <span>Make a Difference</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
          Support{" "}
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            MindoraHealth
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed">
          Every young person deserves access to mental health care. Your support helps us provide AI-powered mental health solutions to young people across Africa and beyond.
        </p>

        {/* Enhanced Impact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 max-w-7xl mx-auto">
          <Card className="group border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />

            <CardHeader className="flex flex-col items-center pb-6 pt-12 relative z-10">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-center group-hover:text-primary transition-colors">
                AI-Powered Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-center leading-relaxed text-lg pb-12 relative z-10">
              Help develop AI tools to detect mental health issues early and provide timely interventions.
            </CardContent>
          </Card>

          <Card className="group border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />

            <CardHeader className="flex flex-col items-center pb-6 pt-12 relative z-10">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <HandHelping className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-center group-hover:text-primary transition-colors">
                Affordable Therapy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-center leading-relaxed text-lg pb-12 relative z-10">
              Support virtual therapy sessions for underserved youth across Africa.
            </CardContent>
          </Card>

          <Card className="group border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />

            <CardHeader className="flex flex-col items-center pb-6 pt-12 relative z-10">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <ShieldCheck className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-center group-hover:text-primary transition-colors">
                Self-Help Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-center leading-relaxed text-lg pb-12 relative z-10">
              Fund mental health resources like games, e-books, and therapeutic exercises.
            </CardContent>
          </Card>

          <Card className="group border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />

            <CardHeader className="flex flex-col items-center pb-6 pt-12 relative z-10">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <Coins className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-center group-hover:text-primary transition-colors">
                Breaking Stigma
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-center leading-relaxed text-lg pb-12 relative z-10">
              Help create a culture of acceptance and understanding around mental health.
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Call to Action */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Join the Movement – Donate Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Every contribution, big or small, has a lasting impact. Choose how you want to support mental health transformation across Africa and beyond.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <Button className="group bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-3">
                One-time Donation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-10 py-6 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-3">
                Monthly Giving
                <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </span>
            </Button>

            <Button className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 rounded-2xl text-xl font-bold transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-3">
                Corporate Partnerships
                <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
