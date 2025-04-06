import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar,  Briefcase, CheckCircle} from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getJobs } from "./action";

export default async function JobDetailsPage() { 
  const jobs = await getJobs();
  const jobDetails = jobs[0];

  if (!jobDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">No job details available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="pl-0 text-primary hover:text-primary/80 flex items-center gap-2">
            <Link href="/careers">
              <ArrowLeft className="w-4 h-4" /> Back to all positions
            </Link>
          </Button>
        </div>

        {/* Job Title and Info */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-foreground">{jobDetails.title}</h1>
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{jobDetails.location}</span>
            <span className="flex items-center gap-2"><Briefcase className="w-4 h-4" />{jobDetails.type}</span>
            {/* <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{jobDetails.schedule}</span> */}
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />Posted: {jobDetails.postedAt ? new Date(jobDetails.postedAt).toLocaleDateString() : "N/A"}</span>
          </div>
          <Card className="bg-background/60 border border-border/40 shadow-sm rounded-xl">
            <CardContent className="p-6 text-base leading-relaxed text-foreground">
              <p>{jobDetails.description}</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content and Sidebar */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Tabs */}
          <div className="md:col-span-2 space-y-6">
            <Tabs defaultValue="responsibilities" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-muted/40 backdrop-blur-md border rounded-lg overflow-hidden">
                <TabsTrigger value="responsibilities" className="py-2">Responsibilities</TabsTrigger>
                <TabsTrigger value="qualifications" className="py-2">Qualifications</TabsTrigger>
                <TabsTrigger value="benefits" className="py-2">Benefits</TabsTrigger>
              </TabsList>

              <TabsContent value="responsibilities" className="pt-6">
                <Card className="bg-background/60 border border-border/30 rounded-xl">
                  {/* <CardContent className="p-6">
                    <ul className="space-y-4">
                      {jobDetails.responsibilities?.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-foreground">
                          <CheckCircle className="w-5 h-5 text-primary mt-1" />
                          <span>{item.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent> */}
                </Card>
              </TabsContent>

              <TabsContent value="qualifications" className="pt-6">
                <Card className="bg-background/60 border border-border/30 rounded-xl">
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      {jobDetails.requirements?.split('\n').map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-foreground">
                          <CheckCircle className="w-5 h-5 text-primary mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="benefits" className="pt-6">
                <Card className="bg-background/60 border border-border/30 rounded-xl">
                  {/* <CardContent className="p-6">
                    <ul className="space-y-4">
                      {jobDetails.benefits?.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-foreground">
                          <Star className="w-5 h-5 text-primary mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent> */}
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-background/60 border border-border/30 rounded-xl">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Job Details</h3>
                <div className="text-sm space-y-3">
                  <div>
                    <p className="text-muted-foreground">Department</p>
                    {/* <p className="font-medium text-foreground">{jobDetails.department}</p> */}
                  </div>
                  <div>
                    <p className="text-muted-foreground">Salary Range</p>
                    <p className="font-medium text-foreground">{jobDetails.salary}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Application Deadline</p>
                    <p className="font-medium text-foreground">N/A</p>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <Button className="w-full">Apply Now</Button>
                  <Button variant="outline" className="w-full">Save Job</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/30 border border-primary/10 rounded-xl shadow-sm">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-base font-semibold text-foreground">Not ready to apply?</h3>
                <p className="text-sm text-muted-foreground">
                  Join our talent community to stay updated on future opportunities.
                </p>
                <Button variant="outline" className="w-full">Join Talent Community</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
