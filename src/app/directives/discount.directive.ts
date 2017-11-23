import { Directive, ElementRef,
  Input, HostListener, Renderer } from '@angular/core';



@Directive({
  selector: '[appDiscount]'
})
export class DiscountDirective {
  @Input() discount;
  
    constructor(private el: ElementRef,private r:Renderer ) { }
  
  @HostListener("mouseover")
  onmouseover()
  {
    
     if(this.discount>30)
     this.r.setElementStyle(this.el.nativeElement,'backgroundColor','darkblue')
    
     else if(this.discount>20)
     this.r.setElementStyle(this.el.nativeElement,'backgroundColor','voilet')
    
     else
      this.r.setElementStyle(this.el.nativeElement,'backgroundColor','lightgray')
    
  }
  
  @HostListener("mouseleave")
  onmouseaway(){
    this.r.setElementStyle(this.el.nativeElement,'backgroundColor','#E9E4F7');
  }

}
