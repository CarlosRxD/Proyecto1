import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatziComponent } from './platzi.component';

describe('PlatziComponent', () => {
  let component: PlatziComponent;
  let fixture: ComponentFixture<PlatziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatziComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlatziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
