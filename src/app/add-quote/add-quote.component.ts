import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
import { ConversationClass } from '../model/conversation';
import { QuoteClass, Quote } from '../model/quote';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  private quotes: Array<Quote> = [];

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
  }

  saveConversation(author: string, quote: string) {
    this.quotes.push(new QuoteClass(author, quote))
    this.quoteService.saveConversation(new ConversationClass(this.quotes))
      .subscribe();
  }
}
