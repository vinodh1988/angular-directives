import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { DealdayService } from '../dealday.service';

@Directive({
  selector: '[banner]'
})
export class BannerDirective {

  constructor(private templateRef: TemplateRef<any>,
               private viewContainer: ViewContainerRef,
               private dservice:DealdayService) { }

   @Input() set banner(time){
     
	   
       if(this.dservice.isDealday()){
       this.viewContainer.createEmbeddedView(this.templateRef);
	    
       setTimeout(()=>this.viewContainer.clear(),time*1000);
       }
      else
        this.viewContainer.clear();
  }

}
