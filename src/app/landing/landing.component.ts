import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  providers: [ServiceService],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent implements OnInit {
  constructor(public _Service: ServiceService) {}

  ngOnInit(): void {
    this._Service.getproduct().subscribe((res) => {
      this._Service.getJsonvalue = res;
    });

    let body = {
      title: 'Hello',
      body: 'Json',
      userid: 8,
    };
    this._Service.postproduct(body).subscribe((res) => {
      this._Service.postJsonvalue = res;
    });
  }
}
