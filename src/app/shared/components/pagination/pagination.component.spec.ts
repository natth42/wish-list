import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the previous page number when previousPage() is called', () => {
    spyOn(component.changePage, 'emit');
    component.currentPage = 2;
    component.previousPage();
    expect(component.changePage.emit).toHaveBeenCalledWith(1);
  });

  it('should emit the next page number when nextPage() is called', () => {
    spyOn(component.changePage, 'emit');
    component.currentPage = 2;
    component.nextPage();
    expect(component.changePage.emit).toHaveBeenCalledWith(3);
  });
});
