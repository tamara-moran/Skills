import { Component } from "@angular/core";

declare const getnRandomNumbers:any;

@Component({
    selector: 'app-product',
    template: `<h2> Product List </h2>
                <div *ngIf='showDiv'>Product 1</div>   
                <div>{{rNum}}</div>
                `,
    styles:[ 'div {font-weight:bolder; color:darkgreen;}']            
})

export class ProductComponent{
    showDiv=true;
    //Creamos ngÍf que  es un atributo que controla si se muestra el div  o no
    //se exporta con el componente
    rNum = <[]>getnRandomNumbers();
}    