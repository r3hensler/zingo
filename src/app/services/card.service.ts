import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ZingoCard } from '../models/zingo-card';
import { Observable, of } from 'rxjs';

const urlRoot = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class CardService {

    constructor(private httpService: HttpClient) { }

    public getCard(): Observable<ZingoCard> {
        return this.httpService.get(`${urlRoot}/cards/1`) as Observable<ZingoCard>;
    }
}
