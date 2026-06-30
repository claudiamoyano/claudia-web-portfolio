import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslatePipe, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {}
