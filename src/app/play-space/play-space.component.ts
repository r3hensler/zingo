import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ZingoCard } from '../models/zingo-card';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-play-space',
    templateUrl: './play-space.component.html',
    styleUrls: ['./play-space.component.css']
})
export class PlaySpaceComponent implements OnInit, OnChanges {
    @Input() card: ZingoCard;
    public zingoForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.zingoForm = this.fb.group({
            name: [''],
            cardName: [''],
            cardGrid: this.fb.group({
                1: [''],
                2: [''],
                3: [''],
                4: [''],
                5: [''],
                6: [''],
                7: [''],
                8: [''],
                9: ['']
            })
        });
    }

    ngOnInit() {}

    ngOnChanges(changeObj: SimpleChanges) {
        if (changeObj.card && changeObj.card.currentValue) {
            const newCard: ZingoCard = changeObj.card.currentValue;
            this.zingoForm.get('cardName').setValue(newCard.title);
            const newCardSpaces = newCard.spaces;
            const zingoGrid = this.zingoForm.get('cardGrid');

            for (let i = 1; i < 10; i++) {
                zingoGrid.get(`${i}`).setValue(newCardSpaces[i - 1].value);
            }
        }
    }

}
