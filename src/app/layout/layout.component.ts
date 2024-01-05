import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  @ViewChild('mouse') ref: ElementRef<HTMLDivElement> | undefined;

  mouseMoved(event: MouseEvent) {
    this.ref?.nativeElement.style.setProperty("--x", `${event.clientX}px`)
    this.ref?.nativeElement.style.setProperty("--y", `${event.clientY}px`)
  }
}
