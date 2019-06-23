import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
import { Quote } from 'src/app/model/quote';
import { Conversation } from '../model/conversation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotes-overview',
  templateUrl: './quotes-overview.component.html',
  styleUrls: ['./quotes-overview.component.css']
})
export class QuotesOverviewComponent implements OnInit {

  private conversations: Array<Conversation>;

  constructor(private quoteService: QuoteService, private router:Router) { }

  ngOnInit() {
    this.quoteService.findAllQuotes()
      .subscribe(conversation => this.conversations = conversation, err => console.log(err));
  }
}
