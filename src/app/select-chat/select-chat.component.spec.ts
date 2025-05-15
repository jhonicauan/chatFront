import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectChatComponent } from './select-chat.component';

describe('SelectChatComponent', () => {
  let component: SelectChatComponent;
  let fixture: ComponentFixture<SelectChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
