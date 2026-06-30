import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceSkills } from './experience-skills';

describe('ExperienceSkills', () => {
  let component: ExperienceSkills;
  let fixture: ComponentFixture<ExperienceSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceSkills],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceSkills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
