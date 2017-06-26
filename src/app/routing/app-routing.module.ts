import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes } from '../routing/routes';
import { LoggedInGuard } from '../guards/logged-in.guard';


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    LoggedInGuard
  ]
})
export class AppRoutingModule { }
