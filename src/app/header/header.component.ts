import { Component, Inject, OnInit, PLATFORM_ID, Renderer2, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public active_fragment: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(
    private readonly activeRoute: ActivatedRoute,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
    ) { }

  active:string="about"

  ngOnInit(): void {
    this.activeRoute.fragment.subscribe(data=>{
      if (data) {
        this.jumpToSection(data)
        this.active_fragment.next(data);
        this.active = data
      }
    })

    this.renderer.listen(window, 'scroll', (event) => {
      if (this.isVisible(document.querySelector('#about') as HTMLElement)) {
        this.active_fragment.next('about');
        this.active= 'about'
      } else if (this.isVisible(document.querySelector('#language') as HTMLElement)) {
        this.active_fragment.next('language');
        this.active='language'
      } else if (this.isVisible(document.querySelector('#studies') as HTMLElement)) {
        this.active_fragment.next('studies');
        this.active='studies'
      } else if (this.isVisible(document.querySelector('#projects') as HTMLElement)) {
        this.active_fragment.next('projects');
        this.active='projects'
      }
    });
  }

  jumpToSection(section: string){
    document.getElementById(section)?.scrollIntoView({behavior:"smooth"})
  }


  isVisible(elem: HTMLElement) {
    if (!(elem instanceof Element)) {
      throw Error('DomUtil: elem is not an element.');
    }

    const style = getComputedStyle(elem);

    if (style.display === 'none') {
      return false;
    }

    if (style.visibility !== 'visible') {
      return false;
    }

    if (+style.opacity < 0.1) {
      return false;
    }

    if (
      elem.offsetWidth +
        elem.offsetHeight +
        elem.getBoundingClientRect().height +
        elem.getBoundingClientRect().width ===
      0
    ) {
      return false;
    }

    const elemCenter = {
      x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
      y: elem.getBoundingClientRect().top + elem.offsetHeight / 2,
    };

    if (elemCenter.x < 0) {
      return false;
    }

    if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) {
      return false;
    }

    if (elemCenter.y < 0) {
      return false;
    }

    if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) {
      return false;
    }

    let pointContainer: any = document.elementFromPoint(elemCenter.x, elemCenter.y);
    do {
      if (pointContainer === elem) {
        return true;
      }
    } while ((pointContainer = pointContainer.parentNode));

    return false;
  }


}
