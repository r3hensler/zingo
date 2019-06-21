import { Component, OnInit } from '@angular/core';
import { CardService } from './services/card.service';
import { ZingoCard } from './models/zingo-card';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public title = 'Zingo';
    public card: ZingoCard;

    constructor(private cardService: CardService) {}

    ngOnInit() {
        this.cardService.getCard().subscribe(
            result => this.card = result,
            err => console.warn(err)
        )
    }
}
