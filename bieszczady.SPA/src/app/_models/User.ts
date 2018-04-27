import { Photo } from './Photo';

export interface User {
    userId: number;
    Username: string ;
    name: string;
    surname: string;
    email: string ;
    phoneNumebr: string;
    Role: string;
    photo: Photo[];

}
