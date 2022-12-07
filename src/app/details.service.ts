import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:"root"})
export class DetailsService{
     detailsArray:any=[];
    
    constructor(private http:HttpClient){}

    updateById(id:any,details:any){      
        this.http.put(`/${id}`,details)
        .subscribe((res)=>{});

    }

    getAllData():any{
        this.http.get('').subscribe((res)=>{
            this.detailsArray=res;
        })
    }
}       
 

