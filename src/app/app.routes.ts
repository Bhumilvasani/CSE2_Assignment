import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {
        path:"login",
        component : LoginComponent
    },
    {
        path:"register",
        component : RegisterComponent
    },
    {
        path:"forgotpassword",
        component : ForgotpasswordComponent
    },
    {
        path:"user",
        component : UserComponent
    }
    
];
