import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component'
import { PostComponent } from './post/post.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { PostcardComponent } from './postcard/postcard.component';
import { PostDataComponent } from './post-data/post-data.component';

const routes: Routes = [

  {path:'',redirectTo:'home', pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'blog',component:BlogComponent},
{path: "post/:id",component: PostComponent},
{path:'**', component:PageNotFoundComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
