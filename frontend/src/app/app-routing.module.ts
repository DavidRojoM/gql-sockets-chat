import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './core/pages/chat/chat.component';
import { LoginComponent } from './core/pages/login/login.component';
import { UnauthenticatedGuard } from './core/shared/guards/unauthenticated.guard';
import { AuthenticatedGuard } from './core/shared/guards/authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [UnauthenticatedGuard],
  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [AuthenticatedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
