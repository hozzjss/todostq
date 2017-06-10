import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes } from '../routing/routes';
import { NotLoggedInGuard } from '../guards/not-logged-in.guard';
import { LoggedInGuard } from '../guards/logged-in.guard';


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [NotLoggedInGuard, LoggedInGuard]
})
export class AppRoutingModule { }
