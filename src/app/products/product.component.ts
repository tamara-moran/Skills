import { Component } from "@angular/core";

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
                </li>--> 

                <h2>Listado</h2>
                <div *ngFor="let x of rNum | 
                paginate: {itemsPerPage:itemsToDisplay, currentPage:page} ">
                {{x}}
                <pagination-controls (pageChange)="pageChanged($event)"></pagination-controls>
                </div>
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
    ];*/

    rNum = <[]>getnRandomNumbers();
    page: Number = 1;
    itemsToDisplay: Number = 10;

   
    pageChanged(event:any){
        this.page = event;
    }


}    