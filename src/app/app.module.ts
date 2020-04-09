import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { AdministrationComponent } from './administration/administration.component';
import { HomeComponent } from './home/home.component';
import { Signup1Component } from './signup1/signup1.component';
import { Signup2Component } from './signup2/signup2.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NarvbarComponent } from './narvbar/narvbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CbtComponent } from './cbt/cbt.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { QuestionComponent } from './question/question.component';
import { Signup3Component } from './signup3/signup3.component';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';
import { MathComponent } from './math/math.component';
import { GnsComponent } from './gns/gns.component';
import { PhyComponent } from './phy/phy.component';
import { ChmComponent } from './chm/chm.component';
import { GovComponent } from './gov/gov.component';
import { BioComponent } from './bio/bio.component';
import { RecordComponent } from './record/record.component';
import { LogoutComponent } from './logout/logout.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoneComponent } from './done/done.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AdministrationComponent,
    HomeComponent,
    Signup2Component,
    NarvbarComponent,
    CbtComponent,
    NotfoundComponent,
    QuestionComponent,
    Signup1Component,
    Signup3Component,
    Login1Component,
    Login2Component,
    MathComponent,
    GnsComponent,
    PhyComponent,
    ChmComponent,
    GovComponent,
    BioComponent,
    RecordComponent,
    LogoutComponent,
    StudentprofileComponent,
    DoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
