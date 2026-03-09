import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [
  // /hola-mundo ==> HolaMundoComponent
  // /admin ==> AdminComponent
  // /404 ==> PageNotFoundComponent
  { path: '', component: CounterPageComponent },
  { path: 'hero', component: HeroPageComponent },
];
