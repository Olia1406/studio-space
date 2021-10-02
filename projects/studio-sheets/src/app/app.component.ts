import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITab } from 'dist/studio-lib-prefixed/lib/components/global-header/tab.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activePage = 'Home';
  isActive = false;
  title = 'studio-sheets';
  
  tabs:ITab[] = [
    {title: "Home", onClick: () => this.routeToPage('home'), isActive: true},
    {title: "My Content", onClick: () => this.routeToPage('my-content'), isActive: false},
    {title: "Discover", onClick: () => this.router.navigateByUrl('/discover'), isActive: false},
    {title: "Create", onClick: () => this.routeToPage('create'), isActive: false},
    {title: "Notifications & Signals", onClick: () => this.routeToPage('notifications'), isActive: false},
  ];

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  routeToPage(pageName: string) {
    // this.router.navigateByUrl(`/${pageName}`);
    this.router.navigate([`${pageName}`],{relativeTo: this.activatedRoute});
  }

}
