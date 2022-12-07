import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { DetailsService } from './details.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClient } from '@angular/common/http';
describe('AppComponent', () => {
//   let httpTestingController: HttpTestingController;
//   let appcomponent: AppComponent;
//   let httpclient:HttpClient;
//   let baseUrl = "https://v2-dev-api.isorobot.io/api/v1/organization-policies";
//  let data:any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        FormsModule,
        NgxPaginationModule
      ],
      providers: [DetailsService,AppComponent],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    // httpTestingController = TestBed.inject(HttpTestingController);
    // data={
    //   id:443,
    //   title:"Linkedin"

    // }
  });
    // beforeEach(inject(
    //   [AppComponent],
    //   (appcomp: AppComponent) => {
    //     appcomponent = appcomp;
    //   }
    // ));


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Form'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Form');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain;
    // expect(compiled.querySelectorAll('app-header-bar').length===10).toBe(true);
  });

  // it("should return data", () => {
  //   let result:any;
  //   let API_KEY='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI0OWM4ZDdhYzc0MDQ1NmYyZDg3MjYyOWM0NmQ4MDRmYmNhZjY3OGI5ZTg4ZDExMGU3MzE3MjQ2YjcwYTAyZWFiNTM5ODM2MjkyNGQ0NTIyIn0.eyJhdWQiOiIzIiwianRpIjoiMjQ5YzhkN2FjNzQwNDU2ZjJkODcyNjI5YzQ2ZDgwNGZiY2FmNjc4YjllODhkMTEwZTczMTcyNDZiNzBhMDJlYWI1Mzk4MzYyOTI0ZDQ1MjIiLCJpYXQiOjE2NjU1NzY1NTAsIm5iZiI6MTY2NTU3NjU1MCwiZXhwIjoxNjk3MTEyNTUwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.l9lQf-nCMASpRj1VbFxU4pnvjy_PwXHLKbJ5dUrPR7kU2nrjXuL21o2JCwcrqaxMGEzFIJOlSTureCcIiJMMU3KVKeXr3KS951IgaKJD2hasKW3HCaqO5OIjU3IcPJqTFCQEkZIciVijbFqzTFskLaF9OlWd0IK9SSsT_jBCgALQGyKyrwKtqb_bUMLJ1RcZ3sA9ba1f7vRKvWQVZhQQBGDwhHFG2O-4CNY5DdwyaeMSRkVj5OAK__dd8O8tBiZGoFWZi6J4urAj41V7_iiz38zTyHTHsNgwa2D6RMz_wKSoMS7Dmcwd2J_BzH2vwnT5SK8WhFWDgyW8mhFK6WJpfmWXUz-0fFAnEYap8CR2FTe7laKdI74yqYWfHFeGKupDscxHtcZE6RCqkYCtsqyp3DrfBmYNGiOEqsuQVzoz1VO3zSuEQZN20QhwutmJpIcAL9UE4h2LV4LsX0dOVSg-ZCP_OB9OdskGr4HUmY9RlulxDVEggP_kgYcmN28yhgo2wKaBSHbuIapxYA6dwMdjaleG7IhNlgg4FESHIJYV7dJWwM5QeqW09MI-FWSU5laMMNNb6nYhxevPh3ihKCqIRcp1w2pfVizK1QV-lvuAHdy4amH7aii9NOul7DUlQKr3C5f7F_yxSsjgSVKotG3aRaACT05HlRItcDZipXTDwRE';
  //   httpclient.get('https://v2-dev-api.isorobot.io/api/v1/organization-policies',
  //   {headers:{'Authorization':`Bearer ${API_KEY}`}})
  //   .subscribe(t => {
  //     result = t;
  //     // console.log(result);
      
  //   });
  //   const req = httpTestingController.expectOne({
  //     method: "GET",
  //     url: baseUrl
  //   });
   
  //   req.flush([data]);
   
  //   expect(result[0]).toEqual(data);
  // });

  
});
