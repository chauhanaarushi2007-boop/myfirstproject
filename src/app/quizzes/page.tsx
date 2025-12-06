import { ListChecks } from "lucide-react";

export default function QuizzesPage() {
  return (
    <div className="container py-20">
      <div className="flex flex-col items-center text-center">
        <div className="bg-primary/10 p-4 rounded-full mb-6">
            <ListChecks className="w-16 h-16 text-primary" />
        </div>
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
          Test Your Knowledge
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl mb-8">
          Interactive quizzes for all languages are on their way! Sharpen your skills and prepare for interviews.
        </p>
        <div className="bg-muted p-8 rounded-lg w-full max-w-2xl animate-pulse">
          <h3 className="font-headline text-2xl font-bold mb-4">Feature Coming Soon!</h3>
          <p className="text-muted-foreground">Get ready to challenge yourself. Our quiz engine is being built to provide the best learning experience.</p>
        </div>
      </div>
    </div>
  );
}
