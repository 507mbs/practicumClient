import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{InstructionsComponent} from './instructions/instructions.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: "instructions", component: InstructionsComponent },
  { path: "details", component: DetailsComponent },
  { path: "", redirectTo: "register", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }