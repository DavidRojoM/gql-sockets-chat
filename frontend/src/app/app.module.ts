import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './core/pages/chat/chat.component';
import { LoginComponent } from './core/pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GraphQLModule } from './graphql.module';
import { PostsService } from './core/shared/services/posts/posts.service';
import { PostsGqlRepository } from './core/shared/services/posts/gql-repository/posts-gql.repository';
import { ApolloModule } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './state/effects/posts.effects';

@NgModule({
  declarations: [AppComponent, ChatComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    GraphQLModule,
    ApolloModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([PostsEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [PostsService, PostsGqlRepository],
  bootstrap: [AppComponent],
})
export class AppModule {}
