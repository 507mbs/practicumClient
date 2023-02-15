import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import Child from 'src/class/Child';
import Detail from 'src/class/Detail';
import { ChildService } from '../service/child.service';
import { DetailService } from '../service/detail.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit,OnDestroy{
constructor(public detailService:DetailService,public childsService:ChildService) { }
empty:Detail=new Detail(null,null,null,null,null,null)
arrChildren:Child[]=[]
emptyChild:Child=new Child(null,null,null,null)
ngOnInit(){
  this.empty = this.detailService.getFromStorage();
  console.log(this.detailService.getFromStorage());
}
ngOnDestroy() {
  this.detailService.saveInStorage(this.empty);
 }
save(f)
{
  this.detailService.AddDetail(this.empty).subscribe((succ) => {
    })
  for (let index = 0; index < this.arrChildren.length; index++) {
  this.arrChildren[index].ParentId=this.empty.Idenentity
  console.log(this.arrChildren[index])
   }
  for (let index = 0; index < this.arrChildren.length; index++) {
   this.childsService.AddChild(this.arrChildren[index]).subscribe((succ) => {
    console.log(this.arrChildren[index]);
    })
 }
this.arrChildren=[]
// this.empty=new Detail(null,null,null,null,null,null)
this.detailService.saveInStorage(this.empty);
f.reset();
alert("exelent")
}
saveName(){
  this.detailService.saveInStorage(this.empty);
}
addChild(){
  this.arrChildren.push(this.emptyChild)
  console.log(this.arrChildren)
  this.emptyChild=new Child(null,null,null,null)
}
}
