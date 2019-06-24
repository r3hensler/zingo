import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Observable, Subject, Subscription } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { ZingoCard } from './models/zingo-card';
import { CardService } from './services/card.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    public card: ZingoCard;
    public confirmed = false;
    public title = 'Zingo';
    private cardCount: number;
    private cardNumber: number;
    private card$: Subject<number>;
    private confirm$: Subject<boolean>;
    private getResult: Subscription;

    constructor(private cardService: CardService) {}

    ngOnInit() {
        this.setupStreams();
        this.setupCards();
    }

    ngOnDestroy() {
        this.getResult.unsubscribe();
        this.card$.unsubscribe();
    }

    public confirmCard(confirmed: boolean) {
        this.confirm$.next(confirmed);
        this.confirmed = !!confirmed;
    }

    public changeCard(increment: number) {
        // only get available cardNumbers (1 to number of cards)
        const tempCardNumber = this.cardNumber + increment;
        this.cardNumber = tempCardNumber > 0 && tempCardNumber <= this.cardCount ? tempCardNumber : tempCardNumber % this.cardCount;
        this.card$.next(this.cardNumber);
    }

    private getCard(subj: Subject<number>): Observable<ZingoCard> {
        return subj.pipe(
            mergeMap(cardNo => this.cardService.getCard(cardNo)),
            tap(result => this.card = result)
        );
    }

    private setupCards() {
        this.cardService.cardCount().subscribe(count => this.cardCount = count);
        this.cardNumber = 1;
        this.card$.next(this.cardNumber);
    }

    private setupStreams() {
        this.card$ = new Subject();
        this.confirm$ = new Subject();
        const cardSelect$ = this.getCard(this.card$);
        combineLatest(cardSelect$, this.confirm$)
            .pipe(
                tap(() => console.log('received and clicked'))
            )
            .subscribe(() => {}, err => console.warn(err));
    }
}
