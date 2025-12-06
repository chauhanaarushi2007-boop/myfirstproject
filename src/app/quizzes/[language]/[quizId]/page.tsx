'use client';

import { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import { languages, quizData } from '@/lib/placeholder-data';
import type { Quiz, QuizQuestion } from '@/lib/types';
import { LanguageIcon } from '@/components/icons/language-icons';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Award, RotateCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function QuizPage() {
  const params = useParams();
  const languageId = params.language as keyof typeof quizData;
  const quizId = params.quizId as string;

  const language = languages.find((lang) => lang.id === languageId);
  const quizzes = quizData[languageId];
  const quiz = quizzes?.find((q) => q.id === quizId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  if (!language || !quiz) {
    return notFound();
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };
  
  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: answer,
    });
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setIsFinished(false);
  }

  const score = quiz.questions.reduce((acc, question, index) => {
    return acc + (selectedAnswers[index] === question.correctAnswer ? 1 : 0);
  }, 0);

  if (isFinished) {
    return (
      <div className="container py-12">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <Award className="w-16 h-16 mx-auto text-yellow-500" />
            <CardTitle className="font-headline text-3xl mt-4">Quiz Completed!</CardTitle>
            <CardDescription>{quiz.title}</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-4xl font-bold mb-2">
              {score} / {quiz.questions.length}
            </p>
            <p className="text-muted-foreground mb-6">Your Score</p>
            <div className="space-y-4 text-left">
              {quiz.questions.map((q, i) => (
                <div key={i} className={cn("p-3 rounded-md border", selectedAnswers[i] === q.correctAnswer ? "border-green-500 bg-green-500/10" : "border-red-500 bg-red-500/10")}>
                  <p className="font-medium flex items-start gap-2">
                    {selectedAnswers[i] === q.correctAnswer ? <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /> : <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />}
                    {q.question}
                  </p>
                   <p className="text-sm text-muted-foreground pl-7 mt-1">Correct answer: {q.correctAnswer}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4 justify-center mt-8">
              <Button onClick={resetQuiz}>
                <RotateCw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
              <Button variant="outline" asChild>
                <Link href={`/quizzes/${language.id}`}>
                  Back to Quizzes
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestion: QuizQuestion = quiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

  return (
    <div className="container py-12">
      <header className="mb-8 text-center">
        <LanguageIcon language={language.id} className="w-16 h-16 mx-auto mb-4 text-primary" />
        <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          {quiz.title}
        </h1>
        <p className="text-muted-foreground mt-2">Question {currentQuestionIndex + 1} of {quiz.questions.length}</p>
        <Progress value={progress} className="w-full max-w-md mx-auto mt-4" />
      </header>

      <main>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              onValueChange={handleAnswerSelect}
              value={selectedAnswers[currentQuestionIndex]}
              className="space-y-3"
            >
              {currentQuestion.options.map((option, index) => (
                <Label key={index} className="flex items-center space-x-3 p-4 border rounded-md has-[:checked]:border-primary has-[:checked]:bg-primary/5 hover:bg-muted/50 cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={`q${currentQuestionIndex}-o${index}`} />
                  <span>{option}</span>
                </Label>
              ))}
            </RadioGroup>
            <Button
              onClick={handleNextQuestion}
              disabled={!selectedAnswers[currentQuestionIndex]}
              className="w-full mt-6"
            >
              {currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
