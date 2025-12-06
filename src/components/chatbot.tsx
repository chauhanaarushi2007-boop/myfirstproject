"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import { ChatbotSheet } from '@/components/chatbot/chatbot-sheet';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                <Button
                    size="icon"
                    className="rounded-full h-14 w-14 bg-primary hover:bg-primary/90 shadow-lg"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open Chatbot"
                >
                    <Bot className="h-7 w-7" />
                </Button>
            </div>
            <ChatbotSheet isOpen={isOpen} onOpenChange={setIsOpen} />
        </>
    );
}
