import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { PlaySpaceComponent } from './play-space.component';

describe('PlaySpaceComponent', () => {
    let component: PlaySpaceComponent;
    let fixture: ComponentFixture<PlaySpaceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlaySpaceComponent],
            providers: [FormBuilder],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlaySpaceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
