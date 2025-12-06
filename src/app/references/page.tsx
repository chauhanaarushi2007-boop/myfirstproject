import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { books } from "@/lib/placeholder-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function ReferencesPage() {

  const getImage = (id: string) => {
    return PlaceHolderImages.find(img => img.id === id);
  }

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Curated Book Recommendations
        </h1>
        <p className="max-w-[600px] mx-auto mt-4 text-muted-foreground md:text-xl">
          Deepen your knowledge with our hand-picked selection of the best programming books.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => {
          const image = getImage(book.imageId);
          return (
            <Card key={book.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-full h-64 bg-muted relative">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={book.title}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              </div>
              <CardHeader>
                <CardTitle className="font-headline">{book.title}</CardTitle>
                <CardDescription>by {book.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{book.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
