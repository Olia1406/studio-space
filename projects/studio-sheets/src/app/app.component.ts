import { Component } from '@angular/core';
import { ITab } from 'dist/studio-lib-prefixed/lib/components/global-header/tab.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'studio-sheets';
  tabs:ITab[] = [
    {title: "Home", onClick: () => {alert('Home')}},
    {title: "My Content", onClick: () => {alert('My Content')}},
    {title: "Discover", onClick: () => {}},
    {title: "Create", onClick: () => {}},
    {title: "Notifications & Signals", onClick: () => {}},
  ];

}
