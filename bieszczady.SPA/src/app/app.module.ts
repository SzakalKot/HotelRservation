import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BsDropdownModule, BsDatepickerModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
import { AuthService } from './_services/auth.service';
import { MemberListComponent } from './Member-list/Member-list.component';
import { RoomsListComponent } from './Rooms-list/Rooms-list.component';
import { RservationComponent } from './Rservation/Rservation.component';
import { RoomComponent } from './Room/Room.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { ContactComponent } from './Contact/Contact.component';
import { ReservationListComponent } from './ReservationList/ReservationList.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/User.service';
import { RoomService } from './_services/room.service';
import { FindReservationComponent } from './find-reservation/find-reservation.component';
import { RoomDetailComponent } from './Room-detail/Room-detail.component';
import { AuthRoleGuard } from './_guards/authRole.guard';
import { ReservationService } from './_services/reservation.service';
import { EditReservationComponent } from './EditReservation/EditReservation.component';
import { UserDetailComponent } from './UserDetail/UserDetail.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    RoomsListComponent,
    RservationComponent,
    ReservationListComponent,
    RoomComponent,
    ContactComponent,
    ReservationListComponent,
    FindReservationComponent,
    RoomDetailComponent,
    RoomDetailComponent,
    EditReservationComponent,
    UserDetailComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    AuthService,
    AlertifyService,
    AuthGuard,
    UserService,
    RoomService,
    AuthRoleGuard,
    ReservationService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
