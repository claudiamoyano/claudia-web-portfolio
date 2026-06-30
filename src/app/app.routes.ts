import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { ExperienceSkills } from './pages/experience-skills/experience-skills';
import { StudiesLanguages } from './pages/studies-languages/studies-languages';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'projects', component: Projects },
  { path: 'experience-skills', component: ExperienceSkills },
  { path: 'studies-languages', component: StudiesLanguages },
  { path: '**', redirectTo: '/home' }
];