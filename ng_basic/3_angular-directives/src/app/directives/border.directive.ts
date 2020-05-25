import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective implements OnInit{
  @Input('appBorder') style = 'solid';

  constructor(private el: ElementRef, private r: Renderer2) {
    console.log(this.r);
  }

  ngOnInit() {
    if (this.style === 'solid') {
      this.r.setStyle(this.el.nativeElement, 'border', '1px solid');
    }
    if (this.style === 'dashed') {
      this.r.setStyle(this.el.nativeElement, 'border', '1px dashed');
    }
  }

}
