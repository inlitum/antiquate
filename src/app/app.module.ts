import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashComponent } from './views/dash/dash.component';
import { SettingsComponent } from './views/settings/settings.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { BlogComponent } from './views/blog/blog.component';
import { ProjectsComponent } from './views/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashComponent,
    SettingsComponent,
    SidebarItemComponent,
    BlogComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
