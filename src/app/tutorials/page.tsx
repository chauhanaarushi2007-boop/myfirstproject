import { LanguageIcon } from "@/components/icons/language-icons";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { languages } from "@/lib/placeholder-data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TutorialsPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Choose Your Path
        </h1>
        <p className="max-w-[600px] mx-auto mt-4 text-muted-foreground md:text-xl">
          Select a language to begin your learning journey. Each tutorial is crafted to take you from novice to proficient.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {languages.map((lang) => (
          <Link href={`/tutorials/${lang.id}`} key={lang.id} className="group">
            <Card className="h-full flex flex-col transition-all duration-300 ease-in-out group-hover:border-primary group-hover:shadow-lg group-hover:-translate-y-1">
              <CardHeader className="flex-row items-center gap-4">
                <LanguageIcon language={lang.id} className="w-12 h-12 text-primary" />
                <div>
                  <CardTitle className="font-headline text-2xl">{lang.name}</CardTitle>
                  <CardDescription>Start learning {lang.name}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{lang.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                 <div className="text-sm font-medium text-primary flex items-center gap-1">
                    Start Tutorial
                    <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                 </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
