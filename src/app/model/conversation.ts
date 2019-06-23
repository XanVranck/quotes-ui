import { Quote } from "src/app/model/quote";

export interface Conversation{
    quotes:Quote[];
}

export class ConversationClass implements Conversation{
    quotes:Quote[] = [];

    constructor(quotes:Quote[]){
        this.quotes = quotes;
    }
}