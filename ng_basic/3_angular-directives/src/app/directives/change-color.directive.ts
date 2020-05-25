import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements OnInit{

  @Input('appChangeColor') color = 'black';

  constructor(private el: ElementRef, private r: Renderer2) {
  }

  ngOnInit(): void {
    this.r.setStyle(this.el.nativeElement, 'color', this.color);
  }

}
