import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { DetailsService } from './details.service'
describe('DetailsService', () => {
  let service: DetailsService;
  let http:HttpClient;
  let httpTestingController: HttpTestingController;
  const mockData = {
    "status": "success",
    "data": [{
      "title": "Linkedin",
      "id": 443,
    },
    ]
  };
  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DetailsService,
        {
          provide: 'url',
          useValue: 'https://v2-dev-api.isorobot.io/api/v1/organization-policies'
        }
      ]
    });
  service = TestBed.inject(DetailsService);
  httpTestingController = TestBed.inject(HttpTestingController);
 });
 afterEach(() => { 
  httpTestingController.verify(); 
 }); 


it('should be created', () => {
  const service: DetailsService = TestBed.inject(DetailsService);
  console.log(service);
  expect(service).toBeTruthy()
});
// it('getAll should make a GET HTTP request and return all data items', () => {
//   service.getAllData().subscribe((res: { data: string | any[]; }) => {
//     expect(res).toEqual(mockData); 
//     // expect(res.data.length).toBe(2); 
//    }); 
//   const req = httpTestingController.expectOne('https://v2-dev-api.isorobot.io/api/v1/organization-policies');
//   expect(req.request.method).toBe('GET');
//   expect(req.cancelled).toBeFalsy(); 
//   expect(req.request.responseType).toEqual('json');
//   req.flush(mockData);
//   httpTestingController.verify();
//  });

it('show every data',()=>{
  // let http=new HttpClient(HttpHandler);
  const details= new DetailsService(http);
  let result=details.getAllData();
  console.log(result);

  expect(result[0]).toBe(1);
  

})
});
