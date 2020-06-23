import { Injectable } from '@angular/core';
import { Plantdetailmodel } from './plantdetailmodel.model';
import { HttpClient } from "@angular/common/http";
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import {sortBy} from 'underscore';
@Injectable({
  providedIn: 'root'
})
export class PlantdetailService {
  readonly url = "https://localhost:44317/api";
  formData : Plantdetailmodel
  list : Plantdetailmodel[]
  searchlist : Plantdetailmodel[]

  constructor(private http:HttpClient) { }

  postPlantDetail(){
   return this.http.post(this.url+"/PlantDetail",this.formData);
  }

  putPlantDetail(){
    return this.http.put(this.url+"/PlantDetail/"+this.formData.PMid,this.formData);
   }

   deletePlantDetail(PMid){
    return this.http.delete(this.url+"/PlantDetail/"+PMid);
   }

  refreshList(){
    this.http.get(this.url+"/PlantDetail").toPromise().then(
      res => this.list = res as Plantdetailmodel[]
    );
    this.http.get(this.url+"/PlantDetail").toPromise().then(
      res => this.searchlist = res as Plantdetailmodel[]
    );
  }

  SortListName(){
    if(this.Comparelists(this.searchlist,sortBy(this.searchlist, (e) => e.PlantName)))
    {
      this.searchlist = this.searchlist.reverse();
    }
    else {
      this.searchlist = sortBy(this.searchlist, (e) => e.PlantName);
     }
  }
  SortListTempMin(){
    if(this.Comparelists(this.searchlist,sortBy(this.searchlist, (e) => e.Mintemp)))
    {
      this.searchlist = this.searchlist.reverse();
    }
    else {
      this.searchlist = sortBy(this.searchlist, (e) => e.Mintemp);
     }
  }
  SortListTempMax(){
    if(this.Comparelists(this.searchlist,sortBy(this.searchlist, (e) => e.Maxtemp)))
    {
      this.searchlist = this.searchlist.reverse();
    }
    else {
      this.searchlist = sortBy(this.searchlist, (e) => e.Maxtemp);
     }
  }
  SortListWaterMin(){
    if(this.Comparelists(this.searchlist,sortBy(this.searchlist, (e) => e.Minwater)))
    {
      this.searchlist = this.searchlist.reverse();
    }
    else {
      this.searchlist = sortBy(this.searchlist, (e) => e.Minwater);
     }
  }
  SortListWaterMax(){
    if(this.Comparelists(this.searchlist,sortBy(this.searchlist, (e) => e.Maxwater)))
    {
      this.searchlist = this.searchlist.reverse();
    }
    else {
      this.searchlist = sortBy(this.searchlist, (e) => e.Maxwater);
     }
  }

  Comparelists(a,b){
    var i=0;
    while(i<a.length){
      if(a[i] !== b[i]) return false;
      i++;
    }
    return true;
  }


  searchlistname(Search){
    if(Search!="") this.searchlist= this.searchlist.filter(el => el.PlantName == Search);
  }
  searchlisttempmax(Search){
    if(Search!=0) this.searchlist= this.searchlist.filter(el => el.Maxtemp >= Search);
  }
  searchlisttempmin(Search){
    if(Search!=0) this.searchlist= this.searchlist.filter(el => el.Mintemp <= Search);
  }
  searchlistwatermin(Search){
    if(Search!=0) this.searchlist= this.searchlist.filter(el => el.Minwater <= Search);
  }
  searchlistwatermax(Search){
    if(Search!=0) this.searchlist= this.searchlist.filter(el => el.Maxwater >= Search);
  }

}
