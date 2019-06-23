import { Injectable } from '@angular/core';
import { Conversation } from 'src/app/model/conversation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from 'src/app/model/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private quotesUrl: string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    })
  };

  constructor(private http: HttpClient) {
    this.quotesUrl = `http://localhost:8080/quotes`;
  }

  findAllQuotes(): Observable<Array<Conversation>> {
    return this.http.get<Array<Conversation>>(this.quotesUrl, this.httpOptions);
  }

  saveConversation(conversation: Conversation):Observable<Conversation> {
    return this.http.post<Conversation>(this.quotesUrl, conversation, this.httpOptions);
  }
}
