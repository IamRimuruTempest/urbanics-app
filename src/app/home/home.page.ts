import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  dataApi: any;
  phLevel: string;
  tdsLevel: string;

  phLabel: string;
  greet: string;

  myDate = new Date();
  hrs = this.myDate.getHours()

 

  constructor(
   private apiService: ApiService,
  ) {}


  ngOnInit(): void {
    
    this.apiService.getData().subscribe(
      data => {
        console.log(data);
        const result = data.feeds[0];
        this.phLevel = result.field1;
        this.tdsLevel = result.field2;
        
        this.dataApi = data.feeds;

        console.log(this.phLevel);
        console.log(this.tdsLevel);

      }
    )


      const num1 = Number(this.phLevel);
      if (num1 < 5)
        this.phLabel = "The water is acidic. Replace water and add nutrient.";
      else
        this.phLabel = "The water is in a Normal State";


      if (this.hrs < 12)
        this.greet = 'Good Morning';
      else if (this.hrs >= 12 && this.hrs <= 17)
        this.greet = 'Good Afternoon';
      else if (this.hrs >= 17 && this.hrs <= 24)
        this.greet = 'Good evening';

  }




}
