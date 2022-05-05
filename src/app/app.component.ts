import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Advice} from "./Advice";
import {AdviceSlip} from "./AdviceSlip";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient) {
  }
  title = 'advice-generator-app';
  adviceSlip: AdviceSlip = new AdviceSlip()

  ngOnInit() {
    this.generateAdvice()
  }

  generateAdvice() {
    this.http.get<AdviceSlip>("https://api.adviceslip.com/advice").subscribe(data => {
      this.adviceSlip = data
      console.log(this.adviceSlip.slip.advice)
      console.log(this.adviceSlip.slip.id)
    })

  }
}

