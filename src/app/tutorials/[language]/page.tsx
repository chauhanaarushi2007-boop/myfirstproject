import { languages } from "@/lib/placeholder-data";
import { notFound } from "next/navigation";
import { LanguageIcon } from "@/components/icons/language-icons";
import { tutorialData } from "@/lib/tutorial-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Book, Globe, Video } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: { language: string };
};

export async function generateStaticParams() {
  return languages.map((lang) => ({
    language: lang.id,
  }));
}

export default function LanguageTutorialPage({ params }: Props) {
  const language = languages.find((lang) => lang.id === params.language);
  const content = tutorialData[params.language as keyof typeof tutorialData];

  if (!language || !content) {
    notFound();
  }

  return (
    <div className="container py-12">
      <header className="mb-12 text-center">
        <LanguageIcon language={language.id} className="w-24 h-24 mx-auto mb-6 text-primary" />
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
          {language.name} Tutorial
        </h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          {content.overview}
        </p>
      </header>

      <main className="grid md:grid-cols-[2fr_1fr] gap-12">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Key Concepts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {content.keyConcepts.map((concept, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-4 h-4 mr-3 mt-1 text-primary flex-shrink-0" />
                    <span><strong>{concept.title}:</strong> {concept.description}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Example Code Snippet</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
                <code>{content.example.code}</code>
              </pre>
              <p className="text-sm text-muted-foreground mt-2">{content.example.explanation}</p>
            </CardContent>
          </Card>
        </div>

        <aside className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Further Learning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold text-md mb-2">Official Documentation</h4>
              <Link href={content.resources.officialDocs} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                <Book className="w-5 h-5" />
                <span>{language.name} Docs</span>
              </Link>
              
              <h4 className="font-semibold text-md mt-6 mb-2">Recommended Resources</h4>
              <ul className="space-y-3">
                {content.resources.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
                      <div className="w-6 text-muted-foreground">
                        {link.type === 'video' ? <Video className="w-5 h-5" /> : <Globe className="w-5 h-5" />}
                      </div>
                      <div className="flex-1">
                          <p className="font-medium group-hover:text-primary transition-colors">{link.title}</p>
                          <p className="text-xs text-muted-foreground">{new URL(link.url).hostname}</p>
                      </div>
                       <Badge variant="secondary" className="capitalize">{link.type}</Badge>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </aside>
      </main>
    </div>
  );
}
