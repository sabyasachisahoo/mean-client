export interface Message {
    conversationId: number;
    body: string;
    author: string;
    timestamp: Date;
}