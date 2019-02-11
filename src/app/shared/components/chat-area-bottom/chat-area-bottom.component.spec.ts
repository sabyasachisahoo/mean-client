import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAreaBottomComponent } from './chat-area-bottom.component';

describe('ChatAreaBottomComponent', () => {
  let component: ChatAreaBottomComponent;
  let fixture: ComponentFixture<ChatAreaBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatAreaBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAreaBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
