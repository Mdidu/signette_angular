import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Label} from "ng2-charts";
import {PostService} from "../../../service/post.service";
import {ActivatedRoute} from "@angular/router";
import {TripByCenter} from "../../../model/tripByCenter/trip-by-center";

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.css']
})
export class ChartjsComponent implements OnInit {

  public nameUser: string;
  public userLastname: string;
  public datasTripByCenter: TripByCenter[];
  public type: ChartType = 'bar';

  public data: any = [];
  public labels: Label[] = [];

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recupDatas();

    setTimeout(() => {
      this.diagram();
    }, 300);
  }

  recupDatas() {

    let id = this.route.snapshot.paramMap.get("id");

    this.postService.findByTripByCenter(id).subscribe(
      trips => {
        this.datasTripByCenter = trips;
        this.nameUser = this.datasTripByCenter[0].nameUser;
        this.userLastname = this.datasTripByCenter[0].userLastname;
      },
      error => {
        console.log("error=" + error.message);
      }
    );
  }

  diagram() {
    for(let i = 0; i < this.datasTripByCenter.length; i++) {
      this.data[i] = this.datasTripByCenter[i].nbTrip;
      this.labels[i] = this.datasTripByCenter[i].centerName;
    }
  }

  public datasets: ChartDataSets[] = [
    {
      label: "Nombre de séjour effectué par l'employé par centre",
      data: this.data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }];

  public options: ChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

}
