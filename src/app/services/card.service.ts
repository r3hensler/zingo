import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ZingoCard } from '../models/zingo-card';

const urlRoot = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class CardService {

    constructor(private httpService: HttpClient) { }

    public cardCount() {
        return this.httpService.get(`${urlRoot}/cards/count`) as Observable<number>;
    }

    public getCard(cardNumber: number = 1): Observable<ZingoCard> {
        return this.httpService.get(`${urlRoot}/cards/${cardNumber}`) as Observable<ZingoCard>;
    }

    public getCards(): Observable<ZingoCard[]> {
        return this.httpService.get(`${urlRoot}/cards`) as Observable<ZingoCard[]>;
    }
}
