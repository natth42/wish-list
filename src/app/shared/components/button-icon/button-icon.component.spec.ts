import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconComponent } from './button-icon.component';

describe('ButtonIconComponent', () => {
  let component: ButtonIconComponent;
  let fixture: ComponentFixture<ButtonIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have empty icon and iconAlt inputs by default', () => {
    expect(component.icon).toEqual('');
    expect(component.iconAlt).toEqual('');
  });

  it('should set icon input correctly', () => {
    const testIcon = 'test-icon';
    component.icon = testIcon;
    expect(component.icon).toEqual(testIcon);
  });

  it('should set iconAlt input correctly', () => {
    const testIconAlt = 'test-icon-alt';
    component.iconAlt = testIconAlt;
    expect(component.iconAlt).toEqual(testIconAlt);
  });
});
