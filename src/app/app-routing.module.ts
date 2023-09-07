import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './views/dash/dash.component';
import { SettingsComponent } from './views/settings/settings.component';
import { BlogComponent } from './views/blog/blog.component';
import { ProjectsComponent } from './views/projects/projects.component';

const routes: Routes = [
    {
        path: ''
        , component: DashComponent
    },
    {
        path: 'blog'
        , component: BlogComponent
    },
    {
        path: 'settings'
        , component: SettingsComponent
    },
    {
        path: 'projects'
        , component: ProjectsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
