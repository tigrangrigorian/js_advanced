import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @Input() dStyles: { border: string, fontWeight: string, borderRadius: string };

  constructor(private el: ElementRef, private r: Renderer2) {
  }

  @HostListener('mouseenter')
  onEnter() {
    this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius);
  }

  @HostListener('mouseleave')
  onLeave() {
    this.r.setStyle(this.el.nativeElement, 'border', null);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
    this.r.setStyle(this.el.nativeElement, 'borderRadius', null);
  }
}
