import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AdministrationComponent } from './administration/administration.component';
import { HomeComponent } from './home/home.component';
import { Login1Component } from './login1/login1.component';
import { Signup1Component } from './signup1/signup1.component';
import { Login2Component } from './login2/login2.component';
import { Signup2Component } from './signup2/signup2.component';
import { CbtComponent } from './cbt/cbt.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { QuestionComponent } from './question/question.component';
import { Signup3Component } from './signup3/signup3.component';
import { MathComponent } from './math/math.component';
import { PhyComponent } from './phy/phy.component';
import { ChmComponent } from './chm/chm.component';
import { BioComponent } from './bio/bio.component';
import { GovComponent } from './gov/gov.component';
import { GnsComponent } from './gns/gns.component';
import { RecordComponent } from './record/record.component';
import { LogoutComponent } from './logout/logout.component';
import { combineLatest } from 'rxjs';
import { componentFactoryName } from '@angular/compiler';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';



const routes: Routes = [
  { path:"",redirectTo:"/home",pathMatch:"full"},
  { path:"home",component:HomeComponent},
  { path:"question",component:QuestionComponent},
  { path:"signup1",component:Signup1Component},
  { path:"signup2",component:Signup2Component},
  { path:"cbt",component:CbtComponent},
  { path:"logout",component:LogoutComponent},
  { path:"record",component:RecordComponent},
  { path:"signup3",component:Signup3Component},
  { path:"cbt",component:CbtComponent,children:[
  { path:"math",component:MathComponent},
  { path:"phy",component:PhyComponent},
  { path:"chm",component:ChmComponent},
  { path:"bio",component:BioComponent},
  { path:"gov",component:GovComponent},
  { path:"gns",component:GnsComponent}
]},
  { path:"student",children:[
    { path:"login1",component:Login1Component}
  ]},
  { path:"administration",children:[
    { path:"login2",component:Login2Component}
  ]},
  { path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

