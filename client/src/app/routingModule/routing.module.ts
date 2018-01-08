import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { BlogComponent } from '../blogComponent/blog.component';
import { LoginComponent } from '../loginComponent/login.component';
import { SignupComponent } from '../signUpComponent/sign-up.component';
import { CreateBlogComponent } from '../createBlogComponent/create-blog.component';
import { BlogDetailComponent } from '../blogDetailComponent/blog-detail.component';

const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'main',
    component: AppComponent,
  },
  {
    path: 'blogs',
    component: BlogComponent,
  },
  {
    path: 'blogs/:bloggerName',
    component: BlogComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'sign-up',
    component:SignupComponent
  },
  {
    path:'create-blog',
    component:CreateBlogComponent
  },
  {
    path:'view-blog/:id/:title',
    component:BlogDetailComponent
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  }
  

];


export const routingModule = RouterModule.forRoot(routes);