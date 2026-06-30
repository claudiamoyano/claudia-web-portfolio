import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-studies-languages',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './studies-languages.html',
  styleUrls: ['./studies-languages.css'],
})
export class StudiesLanguages {}
