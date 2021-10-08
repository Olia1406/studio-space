import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ITab } from "./tab.interface";

@Component({
  selector: 'st-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss']
})
export class GlobalHeaderComponent implements OnInit {

  @Input() tabs: ITab[] = [
    { title: "Some", onClick: () => { }, pageName: "" },
    { title: "My Content", onClick: () => { }, pageName: "" },
    { title: "Discover", onClick: () => { }, pageName: "" },
    { title: "Create", onClick: () => { }, pageName: "" },
    { title: "Notifications & Signals", onClick: () => { }, pageName: "" }
  ];
  pageUrl = 'home';
  subscriptions = new Subscription();

  constructor(private router: Router) {

    this.subscriptions.add(this.router.events
      .subscribe((event: any) => {
          this.pageUrl = router.url.split('/')[1];
      }))
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
