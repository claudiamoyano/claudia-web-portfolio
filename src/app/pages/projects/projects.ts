import { Component } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TagModule, TranslatePipe],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})

export class Projects {
  elementorPT = {
    root: {
      class: 'custom-elementor'
    }
  };

  wordpressPT = {
    root: {
      class: 'custom-wordpress'
    }
  };

  gsapPT = {
    root: {
      class: 'custom-gsap'
    }
  };

  angularPT = {
    root: {
      class: 'custom-angular'
    }
  };

  typescriptPT = {
    root: {
      class: 'custom-typescript'
    }
  };
}
