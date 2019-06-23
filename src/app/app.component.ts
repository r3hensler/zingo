import { Component, OnInit } from '@angular/core';
import { CardService } from './services/card.service';
import { ZingoCard } from './models/zingo-card';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public card: ZingoCard;
    public confirmed = false;
    public title = 'Zingo';
    private cardCount: number;
    private cardNumber: number;

    constructor(private cardService: CardService) {}

    ngOnInit() {
        this.cardService.cardCount().subscribe(count => this.cardCount = count);
        this.cardNumber = 1;
        this.getCard(this.cardNumber);
    }

    public getCard(newCardNumber: number) {
        this.cardService.getCard(newCardNumber).subscribe(
            result => this.card = result,
            err => console.warn(err)
        );
    }

    public confirmCard(confirmed: boolean) {
        this.confirmed = !!confirmed;
    }

    public changeCard(increment: number) {
        // only get available cardNumbers (1 to number of cards)
        const tempCardNumber = this.cardNumber + increment;
        this.cardNumber = tempCardNumber > 0 && tempCardNumber <= this.cardCount ? tempCardNumber : tempCardNumber % this.cardCount;
        this.getCard(this.cardNumber);
    }
}
