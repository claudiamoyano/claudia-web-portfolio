import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesLanguages } from './studies-languages';

describe('StudiesLanguages', () => {
  let component: StudiesLanguages;
  let fixture: ComponentFixture<StudiesLanguages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudiesLanguages],
    }).compileComponents();

    fixture = TestBed.createComponent(StudiesLanguages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
