import { Routes, RouterModule } from '@angular/router';

// Import components for using routing
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const Routing = RouterModule.forRoot(appRoutes);
