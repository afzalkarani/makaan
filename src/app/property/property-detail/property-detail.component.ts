import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Property } from 'src/app/models/Property';
import { HousingService } from 'src/app/services/housing.service';


@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number;
  property = new Property();



  images: any = [
    // { title: 'First Slide', short: 'First Slide Short', src: "https://picsum.photos/id/700/900/500" },
    // { title: 'Second Slide', short: 'Second Slide Short', src: "https://picsum.photos/id/1011/900/500" },
    // { title: 'Third Slide', short: 'Third Slide Short', src: "https://picsum.photos/id/984/900/500" }
  ];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private housingService: HousingService
  ) { }





  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data: any) => {
        this.property = data['prp']
        this.images.push({ title: this.property.Name, short: this.property.Description, src: `/assets/image/${this.property.Image}` });
        console.log(this.property)
      }
    );
    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (data: any) => {
    //         this.property = data;
    //       },
    //       error => this.router.navigate(['/'])
    //     );
    //   }
    // );

  }
}