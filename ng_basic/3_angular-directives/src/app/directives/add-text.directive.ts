import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appAddText]'
})
export class AddTextDirective implements OnInit{

  @Input('appAddText') emoji: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.textContent += this.emoji;
  }

}
