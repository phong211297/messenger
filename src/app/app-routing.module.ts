import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'message',
    loadChildren: () =>
      import('./modules/message-home/message-home.module').then(
        (m) => m.MessageHomeModule
      ),
  },
  {
    path: 'feed',
    loadChildren: () =>
      import('./modules/feed-home/feed-home.module').then(
        (m) => m.FeedHomeModule
      ),
  },
  {
    path: '',
    redirectTo: 'message',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'message'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
