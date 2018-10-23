import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterAnimations } from './router.animation';
import { trigger, transition, group, query, style, animate } from '@angular/animations';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ RouterAnimations.routeSlide2 ]
})
export class AppComponent {
  title = 'routeapppage';
  index: any;
  openMode = true ;
  constructor(
    private route: ActivatedRoute,
  ) {}

  getDepth(outlet) {
    console.log('data=' + this.route.params['depth']);
    console.log(outlet.activatedRouteData['depth']);
    this.index = outlet.activatedRouteData['depth'];
    console.log('name=' + outlet.activatedRouteData['name']);

    // if ( outlet.activatedRouteData['depth'] === 3) {
    //   this.openMode = false;
      // console.log('class=' + $('.main_container').attr('class'));
    // } else {
        // this.openMode = true;
      // $('.n1').removeClass('zindex');
      // console.log('class=' + $('.main_container').attr('class'));
    // }

    return outlet.activatedRouteData['depth'];
  }

  toggleClass(outlet) {
    console.log(this.getDepth(outlet));
  }
  onActivate(outlet) {
    console.log('s1');
    if ( outlet.activatedRouteData['depth'] === 3) {
      this.openMode = false;
      // console.log('class=' + $('.main_container').attr('class'));
    } else {
        this.openMode = true;
      // $('.n1').removeClass('zindex');
      // console.log('class=' + $('.main_container').attr('class'));
    }
  }
}
