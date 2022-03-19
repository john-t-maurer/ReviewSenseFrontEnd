import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input() movie?: Movie;

  pieOptions: any = {
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
  ) {  }

  ngOnInit(): void {
    this.getMovie();
    console.log(this.pieOptions.series[0].data.push(this.getSentimentValues()))
    
    console.log(this.pieOptions.series[0].data)

  }

  getSentimentValues(): Array<any>{
    const id = Number(this.actRoute.snapshot.paramMap.get('movieid'));
    var count = 0
    var sentiment = ''
    var data :any = []
    this.reviewService.getPieChart(id).subscribe((res: any) => this.pieOptions.series[0].data! = res.map(function (d: any){
      var sentiment = Object.keys(d)[0]
      var count = Number(d[Object.keys(d)[0]])

      data.push({ value: count, name: String(sentiment)});
     


    }))

    return data
    
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
