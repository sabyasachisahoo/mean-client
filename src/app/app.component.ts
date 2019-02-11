import { Router } from '@angular/router';
import { AuthenticationService } from './core/authentication/authentication.service';
import { UserService } from './shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user: any;
  profile: string;

  constructor(public auth: AuthenticationService,
              public userService: UserService,
              private router: Router) {
    console.log(auth.isLoggedIn());
    auth.isLoggedIn();

    // to show profile page if already logged in
    if (auth.isLoggedIn() && auth.getToken()) {
      this.router.navigateByUrl('/profile');
      this.userService.welcome().subscribe((data) => {
          this.user = data;
      });
     }
    }

    logout(){
      this.auth.logout().subscribe(() => {
        this.router.navigateByUrl('/login');
      }, (err) => {
        console.error(err);
      });
    }

    ngOnInit() {
      // this.userService.welcome().subscribe((data)=>{
      //     this.user = data;
      // })
    }

}
