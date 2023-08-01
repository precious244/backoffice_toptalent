import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CollapseModule } from '@coreui/angular'; // Import the CollapseModule

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor(
    private readonly router: Router,
  ) { }
  isHovered = false;

  onMouseOver() {
    this.isHovered = true;
  }

  onMouseOut() {
    this.isHovered = false;
  }

  routingToRegister() {
    this.router.navigate(["register"]);
  };

  refresh() {
    window.location.reload();
  };
}
