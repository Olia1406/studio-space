import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITab } from 'dist/studio-lib-prefixed/lib/components/global-header/tab.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'studio-sheets';

  tabs: ITab[] = [
    { title: "Home", onClick: () => this.routeToPage('home'), pageName: "home" },
    { title: "My Content", onClick: () => this.routeToPage('my-content'), pageName: "my-content" },
    { title: "Discover", onClick: () => this.routeToPage('discover'), pageName: "discover" },
    { title: "Create", onClick: () => this.routeToPage('create'), pageName: "create" },
    { title: "Notifications & Signals", onClick: () => this.routeToPage('notifications'), pageName: "notifications" },
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  routeToPage(pageName: string) {
    this.router.navigateByUrl(`/${pageName}`);
    // this.router.navigate([`${pageName}`],{relativeTo: this.activatedRoute});
  }

}
