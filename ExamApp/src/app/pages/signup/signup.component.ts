import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private UserService: UserService) {}

  ngOnInit(): void {}

  public user = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    profile: '',
  };
  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      alert('user Is Required !!');
      // this.snack.open('User Name IS required !');
      return;
    }
    this.UserService.addUser(this.user).subscribe(
      (data) => {
        console.log(data);
        alert('success');
      },
      (error) => {
        console.log('error');
        alert('something Is wrong');
      }
    );
  }
}
