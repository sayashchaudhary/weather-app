import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherServiceForm: FormGroup;
  public weatherData: any;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.weatherServiceForm = this.formBuilder.group({
      location: ['']
    });
  }
  sendRequest(formValues) {
    this.apiService.getWeather(formValues.location).subscribe(data => this.weatherData = data)
    console.log(this.weatherData);
  }
}
