import { Component } from '@angular/core';
import { CalculatorComponent } from '../../components/calculator/calculator.component';

@Component({
  selector: 'app-calculator-page',
  standalone: true,
  imports: [CalculatorComponent],
  templateUrl: './calculatorPage.component.html',
  styleUrl: './calculatorPage.component.css'
})
export class CalculatorPageComponent {

}
