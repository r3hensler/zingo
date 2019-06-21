import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CardService } from './services/card.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;
    const mockCardService = jasmine.createSpyObj('cardService', ['getCard']);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            providers: [{provide: CardService, useValue: mockCardService}]
        }).compileComponents();
    }));

    beforeEach(() => {
        mockCardService.getCard.calls.reset();
        mockCardService.getCard.and.returnValue(of({}));
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
