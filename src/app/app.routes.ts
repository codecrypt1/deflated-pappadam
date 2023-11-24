import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContributeComponent } from './pages/contribute/contribute.component';

export const routes: Routes = [
    
    {
        path:'',
        component:HomepageComponent
    },
    {
        path:'contribute',
        component:ContributeComponent
    }
    
]
