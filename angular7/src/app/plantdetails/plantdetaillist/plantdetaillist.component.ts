import { Component, OnInit } from '@angular/core';
import { PlantdetailService } from 'src/app/shared/plantdetail.service';
import { Plantdetailmodel } from 'src/app/shared/plantdetailmodel.model';
import { ToastrService } from 'ngx-toastr';
import {sortBy} from 'underscore';
import { element } from 'protractor';

@Component({
  selector: 'app-plantdetaillist',
  templateUrl: './plantdetaillist.component.html',
  styles: [
  ]
})
export class PlantdetaillistComponent implements OnInit {

  constructor(public service:PlantdetailService, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(pd:Plantdetailmodel){
    
    this.service.formData = Object.assign({},pd);
  }

  onDelete(form){
    if(confirm("Will you really delete " + form.PlantName+ "?")){
    this.service.deletePlantDetail(form.PMid).subscribe(
      res => {
        this.toastr.warning("Succesfull Delete","Plant Detail Register");
        this.service.refreshList();
      },
      err => {
        console.log("404 error");
      }
    )
    }
  }
  //funkcija, ako je search prazan refresha rezultate dosadasnjih pretrazivanja
  //ako je nesto uneseno, po tome se pretražuje lista

  Search(text,mint,maxt,minw,maxw){
    if((text=="")&&(mint==0)&&(maxt==0)&&(minw==0)&&(maxw==0))
    {
      this.service.refreshList();
    }
    else
    {
      this.service.searchlistname(text);
      this.service.searchlisttempmax(maxt);
      this.service.searchlisttempmin(mint); 
      this.service.searchlistwatermin(minw); 
      this.service.searchlistwatermax(maxw);
    }
  }
}
