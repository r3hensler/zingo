import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CardService } from './card.service';
import { ZingoCard } from '../models/zingo-card';

describe('CardService', () => {
    const expectedCardGet = new ZingoCard();
    const mockHttpClient = jasmine.createSpyObj('httpService', ['get']);
    const urlRoot = 'http://localhost:3000';

    beforeEach(() => {
        mockHttpClient.get.calls.reset();
        mockHttpClient.get.and.callFake(url => {
            console.log(url);
            if (url === `${urlRoot}/cards/1`) {
                return of(expectedCardGet);
            } else if (url === `${urlRoot}/cards`) {
                return of([expectedCardGet, expectedCardGet]);
            } else if (url === `${urlRoot}/cards/count`) {
                return of(2);
            } else {
                return of(null);
            }
        });

        TestBed.configureTestingModule({
            providers: [{provide: HttpClient, useValue: mockHttpClient}]
        });
    });

    describe('getCard', () => {
        it('on success', done => {
            const service: CardService = TestBed.get(CardService);
            service.getCard().subscribe(
                result => {
                    expect(result).toEqual(expectedCardGet);
                    done();
                },
                fail
            );
        });
    });

    describe('cardCount', () => {
        it('on success', done => {
            const service: CardService = TestBed.get(CardService);
            service.cardCount().subscribe(
                result => {
                    expect(result).toEqual(2);
                    done();
                },
                fail
            );
        });
    });
});
