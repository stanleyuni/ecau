import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent {
  email: string = '';
  name: string = '';
  message: string = '';

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    
  }

  pushButton(e: any) {
    e.preventDefault();
    fetch('https://formspree.io/f/xlezwzpp', {
      method: 'POST',
      body: JSON.stringify({
        email: this.email,
        name: this.name,
        message: this.message
      }),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        this._snackBar.open('Thanks for your submission!', '', { duration: 5000 });
      } else {
        response.json().then((data) => {
          this._snackBar.open('Oops! There was a problem submitting your form', '', { duration: 5000 });
        })
      }
    }).catch((error) => {
      this._snackBar.open('Oops! There was a problem submitting your form', '', { duration: 5000 });
    });
  }
}
