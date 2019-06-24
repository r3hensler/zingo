import { TestBed } from '@angular/core/testing';
import { TileService } from './tile.service';
import { Tile } from '../models/tile';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('TileService', () => {
    const mockHttpClient = jasmine.createSpyObj('httpService', ['get']);
    const urlRoot = 'http://localhost:3000';

    beforeEach(() => {
        mockHttpClient.get.calls.reset();
        mockHttpClient.get.and.returnValue(of([new Tile(), new Tile()]));

        TestBed.configureTestingModule({
            providers: [{provide: HttpClient, useValue: mockHttpClient}]
        });
    });

    it('should be created', () => {
        const service: TileService = TestBed.get(TileService);
        expect(service).toBeTruthy();
    });
});
