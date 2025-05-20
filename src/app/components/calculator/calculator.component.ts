import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throttleTime , Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  equation_line: string = '';
  command_line: string = '';
  user_input: string = '';

  private expressionChanged$ = new Subject<string>();

  constructor(private http: HttpClient) {
    // Throttle API calls - wait 300ms after last change before calling backend
    this.expressionChanged$.pipe(throttleTime(300)).subscribe(expr => {
      this.evaluate(expr);
    });
  }

  onCalculatorButtonClick(value: string) {
    this.expressionChanged$.next(value); // Throttled/debounced call
  }

  private evaluate(input: string) {
    this.sendToBackend(input)
    .subscribe({
      next: (res) => {
        this.equation_line = res.result?.equation_line ?? this.equation_line;
        this.command_line = res.result?.command_line ?? this.command_line;
        this.user_input = res.result?.user_input ?? this.user_input;
      },
      error: () => {
        this.command_line = 'Error';
      }
    });
  }

  private sendToBackend(user_input: string): Observable<StandardResponse<sendToBackendResult>> {
    return this.http.post<StandardResponse<sendToBackendResult>>('http://localhost:5178/calculate', {
      user_input: user_input, 
      equation_line: this.equation_line,
      command_line: this.command_line
    });
  }
}


export interface sendToBackendResult {user_input: string, equation_line: string, command_line: string};


/**
 * Standard form of returned errors
 */
export interface StandardError {
  /**
   * Unique Code associated with error condition
   */
  code: number;

  /**
   * Message associated with the error
   */
  message: string;

  /**
   * Plain or structured data associated with the error.
   */
  data: string | {[key:string]:any};
};

/**
 * Standard form of function outputs
 */
export interface StandardResponse<T=any> {
  /**
   * Function Result. Null if an error occurs.
   */
  result: T | null;

  /**
   * List of errors generated during function execution
   */
  errors: Array<StandardError>;

  /**
   * HTTP Status code associated with outcome.
   * Generally, 200 if successful, otherwise an appropriate HTTP error status.
   */
  status: number;
};

export type StandardResponseReturn<R> = (Promise<StandardResponse<R>> | StandardResponse<R>);
export type StandardResponseNextFunction<T=any, R=any>=(result: T)=>StandardResponseReturn<R>;
export type StandardResponseHandler<T=any, R=any> = (response: StandardResponse<T>, next: StandardResponseNextFunction<T, R>)=>StandardResponseReturn<R>;