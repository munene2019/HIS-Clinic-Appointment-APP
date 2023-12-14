import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ConfirmationModalPage } from './confirmation-modal.page';
import { ConfirmationModalPage } from '../confirm-modal/confirmation-modal.page';


describe('ConfirmationModalPage', () => {
  let component: ConfirmationModalPage;
  let fixture: ComponentFixture<ConfirmationModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmationModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
