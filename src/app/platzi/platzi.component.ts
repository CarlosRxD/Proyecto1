import { Component, OnInit } from '@angular/core';
import { PlatziService } from '../platzi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-platzi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './platzi.component.html',
  styleUrl: './platzi.component.css',
})
export class PlatziComponent implements OnInit {
  constructor(private platziService: PlatziService) {}
  public data!: any;
  ngOnInit(): void {
    this.platziService.getData().subscribe((response) => {
      this.data = response;
    });
  }
}
