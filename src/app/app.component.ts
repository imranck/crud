import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { find, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';
import { ToastrService } from 'ngx-toastr';
// import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DetailsService],
})
export class AppComponent implements OnInit {
  title = 'Form';
  // detailsArray: any = [];
  id: any;
  @ViewChild('createForm')
  form!: NgForm;
  editMode: boolean = false;
  currentDetails: any;
  currentDetailsId: any;
  page:number=1;
  count:number=0;
  lang:any;




  constructor( private toastr:ToastrService, public detailsService: DetailsService, private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    // translate.setDefaultLang('en');
    // translate.use('en');

   }

  ngOnInit(): void {  
    // this.http.get('')
    //   .subscribe((res) => {
    //     this.detailsArray = res
    //     console.log(this.detailsArray.data);
    //   })

      this.detailsService.getAllData()
  }
  
  // changeLang(lang:any){
  //   localStorage.setItem('lang',lang.value);
  //   window.location.reload();
  // }



  onSubmitForm(details: { title: string, description: string }) {
    if (!this.editMode) {
      this.http.post<any>('',details)
        .subscribe((res) => {
          console.log(res);
          this.toastr.success('successfully created','success');

        })
    }
    else{
      this.detailsService.updateById(this.currentDetailsId,details);
    }
  }



  onDeleteDetails(id: string) {
    this.http.delete(`/${id}`)
    .subscribe((res) => {
      // console.log(res);
    });
  }



  navigateToGetid(id: string) {
    this.currentDetailsId=id;
    this.http.get(`/${id}`)
      .subscribe((res) => {
        this.currentDetails = res;
        this.form.form.patchValue({
          title: this.currentDetails.title,
          description: this.currentDetails.description
        })
      });
    this.editMode = true;
  }

}

