import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRecivedComponent } from './message-recived.component';

describe('MessageRecivedComponent', () => {
  let component: MessageRecivedComponent;
  let fixture: ComponentFixture<MessageRecivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageRecivedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageRecivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
