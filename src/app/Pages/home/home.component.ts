import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private _snackBar: MatSnackBar){}
ngAfterViewInit(): void {
  this._snackBar.open('Thanks for interested of my works','',{duration:4000})
}
}
