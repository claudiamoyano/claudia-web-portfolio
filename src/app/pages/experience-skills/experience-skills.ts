import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-experience-skills',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './experience-skills.html',
  styleUrls: ['./experience-skills.css'],
})
export class ExperienceSkills {}
