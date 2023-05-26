import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/components/sidebar/sidebar.component';

const routes: Routes = [{
  path: '', redirectTo: 'sidebar', pathMatch: 'prefix'
}, {
  path: 'sidebar', component: SidebarComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
