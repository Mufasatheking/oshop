import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Observable<any>;
  constructor(private auth: AuthService, private userService: UserService, private db: AngularFireDatabase) {
    this.items = db.object('/user/').valueChanges();
   }

  ngOnInit() {
  }
}
