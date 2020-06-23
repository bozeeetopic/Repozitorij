import { Component, OnInit } from '@angular/core';
import { PlantdetailService } from 'src/app/shared/plantdetail.service';
import { NgForm } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-plantdetail',
  templateUrl: './plantdetail.component.html',
  styles: [
  ]
})
export class PlantdetailComponent implements OnInit {

  constructor(public service:PlantdetailService, private toastr : ToastrService) {
    
   }
  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!=null){ 
      form.resetForm;
    }
    this.service.formData={PMid:0,PlantName:"",Maxtemp:null,Mintemp:null,Maxwater:null,Minwater:null};
    
  }
  onSubmit(form:NgForm){
    if(this.service.formData.PMid==0)
    {
    this.service.postPlantDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success("Succesfull submit","Plant Database");
        this.service.refreshList();
      },
      err => {
        console.log("404 error");
      }
    )}
    else
    {
      this.service.putPlantDetail().subscribe(
        res => {
          this.resetForm(form);
          this.toastr.info("Succesfull update","Plant Database");
          this.service.refreshList();
          
        },
        err => {
          console.log("404 error");
        }
      );
      }}


      biggerWater(){
        if((this.service.formData.Minwater!=null)&&(this.service.formData.Maxwater!=null)){
          if(this.service.formData.Minwater>this.service.formData.Maxwater){
            this.service.formData.Maxwater=this.service.formData.Minwater;
            this.toastr.show("Minimum water cannot be bigger than maximum","Input error");
          }
     }
     else
      {}
      
    }
      biggerTemp(){
       if((this.service.formData.Mintemp!=null)&&(this.service.formData.Maxtemp!=null)){ 
         if(this.service.formData.Mintemp>this.service.formData.Maxtemp){
            this.service.formData.Maxtemp=this.service.formData.Mintemp;
            this.toastr.show("Minimum temperature cannot be bigger than maximum","Input error");
         }
            
     }
     else{}
    }

    slova(){
      this.service.list.forEach(element => {
        if(element.PlantName==this.service.formData.PlantName){
          this.toastr.show("Plant already in database","Input error");
          this.service.formData.PlantName="";
        }
      });
    }
    }
