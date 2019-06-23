import { TestBed } from '@angular/core/testing';
import { QuoteService } from './quote.service';
describe('QuoteService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(QuoteService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=quote.service.spec.js.map