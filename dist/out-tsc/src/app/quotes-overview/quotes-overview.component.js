var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { QuoteService } from '../quote.service';
var QuotesOverviewComponent = /** @class */ (function () {
    function QuotesOverviewComponent(quoteService) {
        this.quoteService = quoteService;
        this.conversations = [];
    }
    QuotesOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quoteService.findAllQuotes()
            .subscribe(function (data) { _this.conversations = data; });
        console.log('conversations: ', this.conversations);
    };
    QuotesOverviewComponent = __decorate([
        Component({
            selector: 'app-quotes-overview',
            templateUrl: './quotes-overview.component.html',
            styleUrls: ['./quotes-overview.component.css']
        }),
        __metadata("design:paramtypes", [QuoteService])
    ], QuotesOverviewComponent);
    return QuotesOverviewComponent;
}());
export { QuotesOverviewComponent };
//# sourceMappingURL=quotes-overview.component.js.map