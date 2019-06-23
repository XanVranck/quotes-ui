export interface Quote {
    author: String;
    text: String;
}

export class QuoteClass implements Quote {
    author: String;
    text: String;

    constructor(author:String, text:String){
        this.author = author;
        this.text = text;
    }
}