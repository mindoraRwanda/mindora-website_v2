import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import {  Star, Award } from "lucide-react";
import Link from "next/link";

const contributors = [
  {
    name: "Kwizera Rulinda",
    role: "CEO & Founder",
    image: "/images/kwizera.jpg",
  },
  {
    name: "Takudzwa Tarutira",
    role: "CTO & Co-Founder",
    image: "/images/takudzwa.jpg",
  },
  {
    name: "Muhire Leon Pierre",
    role: "Marketing Director & Co-Founder",
    image: "/images/muhire.jpg",
  },
  {
    name: "Gahire Hubert",
    role: "Project & Planning Officer",
    image: "/images/gahire.jpg",
  },
  {
    name: "Nizigama Noella",
    role: "Disability Inclusion Officer",
    image: "/images/noella.jpg",
  },
];

export default function HallOfFame() {
  return (
    <div className="container mx-auto px-4 py-10 text-center">
      <h1 className="text-4xl font-bold mb-6 flex justify-center items-center gap-2">
        <Star className="w-8 h-8 text-yellow-500" /> Hall of Fame
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
        Celebrating the dedicated contributors who have helped shape Mindora Health’s mission and impact.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contributors.map((person, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-col items-center">
              <Avatar className="w-24 h-24 mb-4">
                <img src={person.image} alt={person.name} className="rounded-full" />
              </Avatar>
              <CardTitle>{person.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">{person.role}</CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Award className="w-6 h-6 text-primary" /> Join Our Mission
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-6">
          Want to be part of something meaningful? Check out our <Link href="/career" className="text-primary underline">Careers</Link> page and join our growing team!
        </p>
      </div>
    </div>
  );
}
