import { languages, quizData } from "@/lib/placeholder-data";
import { notFound } from "next/navigation";
import { LanguageIcon } from "@/components/icons/language-icons";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
    params: { language: string };
};

export default function LanguageQuizzesPage({ params }: Props) {
    const languageId = params.language as keyof typeof quizData;
    const language = languages.find((lang) => lang.id === languageId);
    const quizzes = quizData[languageId];

    if (!language || !quizzes) {
        notFound();
    }

    return (
        <div className="container py-12">
            <header className="mb-12 text-center">
                <LanguageIcon language={language.id} className="w-24 h-24 mx-auto mb-6 text-primary" />
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                    {language.name} Quizzes
                </h1>
                <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                    Select a quiz to test your knowledge of {language.name}.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {quizzes.map((quiz, index) => (
                    <Link href={`/quizzes/${language.id}/${quiz.id}`} key={quiz.id} className="group">
                        <Card className="h-full flex flex-col transition-all duration-300 ease-in-out group-hover:border-primary group-hover:shadow-lg group-hover:-translate-y-1">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">{quiz.title}</CardTitle>
                                <CardDescription>10 Questions</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">Test your understanding of core {language.name} concepts.</p>
                            </CardContent>
                             <div className="p-6 pt-0">
                                <div className="text-sm font-medium text-primary flex items-center gap-1">
                                    Start Quiz
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
