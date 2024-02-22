import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'students-details-root',
  standalone: true,
  imports: [
    CommonModule,
    SideBarComponent,
	RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'students-details';

  sidebarExpanded: boolean = true;

  constructor() {}
}
