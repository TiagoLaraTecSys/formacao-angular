import { AbstractControl, FormGroup } from "@angular/forms";

export function senhasDiferentes(formControl: FormGroup) {

    const senha = formControl.get('password')?.value ?? '';
    const senhaConfirmação = formControl.get('confirmPassword')?.value ?? '';
    console.log(`Validando ${senha} e ${senhaConfirmação}`)
    return (senha !== senhaConfirmação) ?
        { senhasDiferentes: true } : null;
}