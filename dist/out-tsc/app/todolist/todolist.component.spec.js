import { TestBed } from '@angular/core/testing';
import { TodolistComponent } from './todolist.component';
describe('TodolistComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TodolistComponent]
        });
        fixture = TestBed.createComponent(TodolistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=todolist.component.spec.js.map