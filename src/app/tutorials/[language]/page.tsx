import { languages } from "@/lib/placeholder-data";
import { notFound } from "next/navigation";
import { LanguageIcon } from "@/components/icons/language-icons";

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

  if (!language) {
    notFound();
  }

  return (
    <div className="container py-12">
      <div className="flex flex-col items-center text-center">
        <LanguageIcon language={language.id} className="w-24 h-24 mb-6 text-primary" />
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
          {language.name} Tutorials
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl mb-8">
          Our comprehensive {language.name} tutorial is currently under development. Please check back soon!
        </p>
        <div className="bg-muted p-8 rounded-lg w-full max-w-2xl">
          <h3 className="font-headline text-2xl font-bold mb-4">Content Coming Soon!</h3>
          <p className="text-muted-foreground">We are working hard to bring you high-quality tutorials, quizzes, and examples for {language.name}.</p>
        </div>
      </div>
    </div>
  );
}
