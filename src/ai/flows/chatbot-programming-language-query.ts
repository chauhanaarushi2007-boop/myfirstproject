'use server';
/**
 * @fileOverview An AI agent to answer user queries related to programming languages.
 *
 * - programmingLanguageQuery - A function that handles the programming language query process.
 * - ProgrammingLanguageQueryInput - The input type for the programmingLanguageQuery function.
 * - ProgrammingLanguageQueryOutput - The return type for the programmingLanguageQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProgrammingLanguageQueryInputSchema = z.object({
  query: z.string().describe('The query about a programming language.'),
});
export type ProgrammingLanguageQueryInput = z.infer<typeof ProgrammingLanguageQueryInputSchema>;

const ProgrammingLanguageQueryOutputSchema = z.object({
  answer: z.string().describe('The answer to the programming language query.'),
});
export type ProgrammingLanguageQueryOutput = z.infer<typeof ProgrammingLanguageQueryOutputSchema>;

export async function programmingLanguageQuery(input: ProgrammingLanguageQueryInput): Promise<ProgrammingLanguageQueryOutput> {
  return programmingLanguageQueryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'programmingLanguageQueryPrompt',
  input: {schema: ProgrammingLanguageQueryInputSchema},
  output: {schema: ProgrammingLanguageQueryOutputSchema},
  prompt: `You are a helpful chatbot named MIA that answers questions about programming languages.

  Here is the user's query: {{{query}}}

  Please provide a concise and informative answer. `,
});

const programmingLanguageQueryFlow = ai.defineFlow(
  {
    name: 'programmingLanguageQueryFlow',
    inputSchema: ProgrammingLanguageQueryInputSchema,
    outputSchema: ProgrammingLanguageQueryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
