import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlannerComponent } from './planner/planner.component';

const router = [
  {
    path:'', redirectTo: '/dashboard', pathMatch: 'full'
  },{
  path:'dashboard', component: DashboardComponent
},{
  path:'planner',  component: PlannerComponent
}];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PlannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
