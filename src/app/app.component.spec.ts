import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { CardService } from './services/card.service';
import { TileService } from './services/tile.service';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;
    const mockCardService = jasmine.createSpyObj('cardService', ['getCard', 'cardCount']);
    const mockTileService = jasmine.createSpyObj('tileService', ['getTiles']);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            providers: [
                {provide: CardService, useValue: mockCardService},
                {provide: TileService, useValue: mockTileService}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        mockCardService.getCard.calls.reset();
        mockCardService.getCard.and.returnValue(of({}));
        mockCardService.cardCount.calls.reset();
        mockCardService.cardCount.and.returnValue(of(2));
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
    });

    it(`should have as title 'zingo'`, () => {
        expect(component.title).toEqual('Zingo');
    });

    it('should render title in a h1 tag', () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to Zingo!');
    });
});
