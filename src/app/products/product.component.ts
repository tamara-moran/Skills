import { Component, Input} from "@angular/core";

declare const getnRandomNumbers:any;

@Component({
    selector: 'app-product',
    template: `<!-- listar array 
                <li *ngFor="let dept of departments">
                    {{dept}}
                </li>   

                listar atributos de un objeto

                <li *ngFor="let emp of employees">
                {{emp.name}}
                </li> 
                <div *ngFor="let x of rNum >
                {{x}}
                
                </div>-->
                <h2>Listado</h2>
                {{p_title}}
                `,
    styles:[ 'div {font-weight:bolder; color:darkgreen;}']            
})

export class ProductComponent{
    /*listar array
   departments = ["mountain","road","hybrid"]

   listar objetos
   employees=
   [
        {
            name:"Alex",
            id:23,
            deparment:"IT"
        },
        {
            name:"Ann",
            id:234,
            deparment:"RRHH"
            },
    ];

    rNum = <[]>getnRandomNumbers();
    page: Number = 1;
    itemsToDisplay: Number = 10;

   
    pageChanged(event:any){
        this.page = event;
    }*/
        @Input() p_title:string | undefined;
}    