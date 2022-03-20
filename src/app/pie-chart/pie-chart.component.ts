import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ReviewService } from '../review.service';
import { Options } from 'options';
import { EChartsOption } from 'echarts';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input() movie?: Movie;

  mergeOptions = {};

  dataUpdate: Array<any> = [];

  pieOptions: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Positivity:',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        color: ['#1EE15F', '#F5856A'],
        data: [
          { value: 5, name: 'Positive' },
          { value: 5, name: 'Negative' }
        ]
      }
    ]
  };




  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private movieService: MovieService,
    private reviewService: ReviewService
  ) {  
    
    setTimeout(()=>this.getSentimentValues(), 250)}

  ngOnInit(): void{
    
    
    this.getMovie();
    
    console.log(this.pieOptions)

    this.getSentimentValues()
    console.log(this.pieOptions)

  }

  getSentimentValues(): void{
    
    const id = Number(this.actRoute.snapshot.paramMap.get('movieid'));
    var count = 0
    var sentiment = ''
    var newData :any = []

    this.reviewService.getPieChart(id).subscribe((res :any) => res.map((entry :any) => {
      console.log(entry)
      this.dataUpdate.push({value: entry.value, name: entry.name})

    }

    ))
    this.mergeOptions = {
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: 'Positivity:',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false
          },
          color: ['#1EE15F', '#F5856A'],
          data: this.dataUpdate
        }
      ]
    };
    

    
  }

  getMovie(): void {
    const id = Number(this.actRoute.snapshot.paramMap.get('movieid'));
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  onClick(event: any){
    const movieId = Number(this.actRoute.snapshot.paramMap.get('movieid'));

    if (event.dataIndex === 0){
      this.router.navigate(['movie', movieId, 'sentiment', 'positive']);
    }else if (event.dataIndex === 1){
      this.router.navigate(['movie', movieId, 'sentiment', 'negative']);
    }
  }

}
