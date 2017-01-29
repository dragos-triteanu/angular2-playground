import {Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightDirective implements OnInit {

  @HostListener('mouseenter') mouseEnter() {
    this.backgroundColor = this.highlightColor;
    this.color = this.defaultColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.backgroundColor = this.defaultColor;
    this.color = this.highlightColor;
  }

  @HostBinding('style.backgroundColor') get background() {
    return this.backgroundColor;
  }

  @HostBinding('style.color') get colorProp() {
    return this.color;
  }


  @Input("default") defaultColor = 'blue';
  @Input("highlighted") highlightColor = 'yellow';

  private backgroundColor = 'yellow';
  private color = 'black';
  

  constructor(private elementRef:ElementRef, private renderer:Renderer) {
    //this.elementRef.nativeElement.style.backgroundColor= ' yellow';
    //this.renderer.setElementStyle(this.elementRef.nativeElement,'background-color','yellow');
  }


  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    this.color = this.highlightColor;
  }

}
