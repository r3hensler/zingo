import { TestBed } from '@angular/core/testing';
import { CardService } from './card.service';
import { HttpClient } from '@angular/common/http';

const mockHttpClient = jasmine.createSpyObj('httpService', ['get']);

describe('CardService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [{provide: HttpClient, useValue: mockHttpClient}]
    }));

    it('should be created', () => {
        const service: CardService = TestBed.get(CardService);
        expect(service).toBeTruthy();
    });
});
