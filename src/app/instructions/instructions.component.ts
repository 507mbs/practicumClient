import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DetailService } from '../service/detail.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
// export class InstructionsComponent {
//   constructor(public detailService:DetailService){}
//   detailName=localStorage.getItem('FirstName')
// }
export class InstructionsComponent implements OnInit, OnDestroy {
  detailName = null;
  sub: Subscription;//משתנה מסוג שיודע לשמור הירשמות לקבל עדיכונים

  constructor(public detailSer: DetailService) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();

  }

  ngOnInit(): void {
    // this.detailName = this.detailSer.getFromStorage()?.name;
    // this.detailName = this.detailSer.getFromStorage() ? this.detailSer.getFromStorage().name : "guest";
    //שמורים את ההירשמות כדי שיהיה אפשר לבטלה
    this.sub = this.detailSer.currentUser.subscribe(succ => {
      this.detailName = succ?.name;
      console.log("from subscribe")
    })

  }
  logOut() {

    this.detailSer.removeFromStorage()
    this.detailSer.currentUser.next(null);

  }

}