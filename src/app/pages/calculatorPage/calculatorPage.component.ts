import { Component } from '@angular/core';
import { CalculatorComponent } from '../../components/calculator/calculator.component';
import { EbnfLessonComponent } from '../../components/ebnf-lesson/ebnf-lesson.component';
import { ThrottleLessonComponent } from '../../components/throttle-lesson/throttle-lesson.component';

@Component({
  selector: 'app-calculator-page',
  standalone: true,
  imports: [CalculatorComponent, EbnfLessonComponent, ThrottleLessonComponent],
  templateUrl: './calculatorPage.component.html',
  styleUrl: './calculatorPage.component.css'
})
export class CalculatorPageComponent {

}
