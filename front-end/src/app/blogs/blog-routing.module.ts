import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogAllComponent } from './blog-all/blog-all.component';
import { BlogPreviewComponent } from './blog-preview/blog-preview.component';
import { BlogIndexComponent } from './blog-index/blog-index.component';



const blogRoutes: Routes = [
    
    {
        path: 'blog/:id',
        component: BlogIndexComponent
    },
    {
        path: 'blogs',
        component: BlogAllComponent
    }

];

@NgModule({
    imports: [ RouterModule.forRoot(blogRoutes) ],
    exports: [ RouterModule ]
})
export class BlogRoutingModule {}