import { AbstractControl } from "@angular/forms";

export function passwordValidator(control:AbstractControl):{[key:string]:boolean} | null{
    const password = control.get('password');
    const confirmationPassword = control.get('confirmationPassword');
    return password && confirmationPassword && password.value!=confirmationPassword.value? {'misMatch':true}:null;
    }
    