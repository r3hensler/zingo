import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ZingoCard } from '../models/zingo-card';

@Component({
    selector: 'app-play-space',
    templateUrl: './play-space.component.html',
    styleUrls: ['./play-space.component.css']
})
export class PlaySpaceComponent implements OnInit, OnChanges {
    @Input() card: ZingoCard;
    @Output() changeCard = new EventEmitter<number>();
    public zingoForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.setupForm();
    }

    ngOnInit() {}

    ngOnChanges(changeObj: SimpleChanges) {
        if (changeObj.card && changeObj.card.currentValue) {
            this.populateCard(changeObj.card.currentValue);
        }
    }

    private setupForm() {
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

    public incrementCard(value: number) {
        this.changeCard.emit(value);
    }

    private populateCard(newCard: ZingoCard): void {
        this.zingoForm.get('cardName').setValue(newCard.title);
        const zingoGrid = this.zingoForm.get('cardGrid');
        newCard.spaces.forEach((space, index) => zingoGrid.get(`${index + 1}`).setValue(space.value));
    }
}
