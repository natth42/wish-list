import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty type and placeholder initially', () => {
    expect(component.type).toBe('');
    expect(component.placeholder).toBe('');
  });

  it('should update type and placeholder when @Input is set', () => {
    const newType = 'text';
    const newPlaceholder = 'Enter text';
    component.type = newType;
    component.placeholder = newPlaceholder;
    fixture.detectChanges();
    expect(component.type).toBe(newType);
    expect(component.placeholder).toBe(newPlaceholder);
  });
});
