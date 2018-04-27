import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationListComponent } from './ReservationList/ReservationList.component';
import { RoomsListComponent } from './Rooms-list/Rooms-list.component';
import { MemberListComponent } from './Member-list/Member-list.component';
import { RoomComponent } from './Room/Room.component';
import { RservationComponent } from './Rservation/Rservation.component';
import { ContactComponent } from './Contact/Contact.component';
import { AuthGuard } from './_guards/auth.guard';
import { RoomDetailComponent } from './Room-detail/Room-detail.component';
import { AuthService } from './_services/auth.service';
import { AuthRoleGuard } from './_guards/authRole.guard';
import { EditReservationComponent } from './EditReservation/EditReservation.component';
import { UserDetailComponent } from './UserDetail/UserDetail.component';





export const appRoutes: Routes = [
    {path: 'home' , component : HomeComponent},
    {path: 'contact' , component : ContactComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
           // {path: 'members' , component : MemberListComponent},
            {path: 'roomlist/:id' , component : RservationComponent},
            {path: 'roomlist' , component : RoomsListComponent},
            {path: 'status' , component : EditReservationComponent},

        ]
    },
    { path: 'members' , component : MemberListComponent, canActivate: [AuthRoleGuard], data: { roles: ['Admin'] }},
    {path: 'userdetail/:id' , component : UserDetailComponent , canActivate: [AuthRoleGuard], data: { roles: ['Admin'] } },
    { path: 'reservationList' , component : ReservationListComponent, canActivate: [AuthRoleGuard], data: { roles: ['Admin'] }},
    {path: '**' , redirectTo : 'home' , pathMatch : 'full'}

];
