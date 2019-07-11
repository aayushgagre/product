import {Component} from '@angular/core';

@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})

export class AddEmployeeComponent {

pData:any[]=[]
 
pId:any;
 pName:any;
 pCost:any;
 pOption:any;
 pSelect:any;
 pAvilable1:any;

 pro:any=document.getElementsByName("Available");
 obj:any="";
  
 select:any[]=[]
 status:boolean=true;
      addEmployee():any{
        this.status=true;
       
          this.obj="";
          for(let data of this.pro){
              if(data.checked){
                  this.obj=this.obj+" "+data.value;
                  this.pAvilable1=this.obj;
              }
          }
        this.pData.push({pId:this.pId,pName:this.pName,pCost:this.pCost,pOption:this.pOption,pSelect:this.pSelect,pAvilable1:this.pAvilable1})
        this.pAvilable1=null;
   }
  
  
   
}