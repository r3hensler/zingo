import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tile } from '../models/tile';

const urlRoot = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class TileService {

    constructor(private httpService: HttpClient) { }

    public getTiles(): Observable<Tile[]> {
        return this.httpService.get(`${urlRoot}/tiles`) as Observable<Tile[]>;
    }
}
