import { AbstractControl } from "@angular/forms";

export function MinusculoValidator(control: AbstractControl) {

    const valorAserValidado = control.value as string;

    if (valorAserValidado != valorAserValidado.toLowerCase()) {
        return { minusculo: true };
    } else {
        return null
    }
}