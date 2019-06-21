import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ZingoCard } from '../models/zingo-card';
import { Observable, of } from 'rxjs';

const urlRoot = 'localhost:3000/api/';

@Injectable({
    providedIn: 'root'
})
export class CardService {

    constructor(private httpService: HttpClient) { }

    public getCard(): Observable<ZingoCard> {
        return of(new ZingoCard());
    }
}
