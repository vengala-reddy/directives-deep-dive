import { Injectable, signal } from "@angular/core";
import { Permission } from "./permission.model";

@Injectable({
    providedIn: 'root'
    })
export class AuthService {
    public activePermision = signal<Permission>('guest');
    public authenticate(email: string, password: string): void {
        if (email === 'admin@example.com' && password === 'admin') {
            this.activePermision.set('admin');
        } else if (email === 'user@example.com' && password === 'user') {
            this.activePermision.set('user');
        } else {
            this.activePermision.set('guest');
        }
    }
    public logout(): void {
        this.activePermision.set('guest');
    }
}