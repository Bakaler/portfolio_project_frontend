import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './weather.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackgroundComponent } from './components/background/background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent, BackgroundComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio_project_frontend';
  forecast: any[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getForecast().subscribe(data => {
      this.forecast = data;
      console.log('Weather forecast from backend:', this.forecast);
    });
  }
}