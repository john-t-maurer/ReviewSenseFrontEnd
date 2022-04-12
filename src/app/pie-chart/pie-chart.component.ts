import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EChartsOption } from 'echarts';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ReviewService } from '../review.service';

/**
 * Represents the pie chart shown on the movie page.
 */
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  /**The movie to get the sentiment from. */
  @Input() movie?: Movie;

  /**The keyword to filter the reviews by. */
  @Input() keyword: string = 'null';

  /**A secondary directive that the pie chart supports. It is used with pieOptions and dataUpdate to help with data updates.*/
  mergeOptions = {};

  /**An array that appends to the data array in the pieOptions directive. */
  dataUpdate: Array<any> = [];

  /**The main directive that the pie chart supports. */
  pieOptions: EChartsOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Positivity:',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          formatter: 'b|{b}：}{c}  {per|{d}%}  ',
          rich:{
            b: {
              color: '#4C5058',
              fontSize: 14,
              fontWeight: 'bold',
              lineHeight: 33
            },
            per: {
              color: '#fff',
              backgroundColor: '#4C5058',
              padding: [3, 4],
              borderRadius: 4
            }
          },
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



  /**
   * @ignore
   */
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private movieService: MovieService,
    private reviewService: ReviewService
  ) {  
    
    setTimeout(()=>this.getSentimentValues(), 1000)}
  
  /**
   * Initializes the pie chart.
   */
  ngOnInit(): void{
    this.getMovie();
    
    console.log(this.pieOptions)

    this.getSentimentValues()
    console.log(this.pieOptions)
  }

  /**
   * Updates the pie chart data based on the sentiment of the displayed reviews.
   */
  getSentimentValues(): void{
    
    const id = Number(this.actRoute.snapshot.paramMap.get('movieid'));
    const page = Number(this.actRoute.snapshot.paramMap.get('page'));

    this.reviewService.getPieChart(id, page,this.keyword).subscribe((res :any) => res.map((entry :any) => {
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

  /**
   * Gets the movie this pie chart is associated with.
   */
  getMovie(): void {
    const id = Number(this.actRoute.snapshot.paramMap.get('movieid'));
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  /**
   * Gets the portion of the pie chart that was clicked and navigates to the corresponding page.
   * 
   * @param event - The click event that caused this function to fire.
   */
  onClick(event: any){
    const movieId = Number(this.actRoute.snapshot.paramMap.get('movieid'));
    const page = Number(this.actRoute.snapshot.paramMap.get('page'))

    if (event.dataIndex === 0){
      this.router.navigate(['movie', movieId, 'page', page,'sentiment', 'positive']);
    }else if (event.dataIndex === 1){
      this.router.navigate(['movie', movieId, 'page', page, 'sentiment', 'negative']);
    }
  }

}