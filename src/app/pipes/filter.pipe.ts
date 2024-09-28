import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(values: any[], searchString: string): any[] {
    if (!values || !searchString) {
      return values; // retourne le tableau complet si aucune chaîne de recherche n'est fournie
    }
    
    // Convertit la chaîne de recherche en minuscules pour une comparaison insensible à la casse
    const lowerCaseSearchString = searchString.toLowerCase();

    // Filtre les valeurs qui contiennent la chaîne de recherche
    return values.filter(value =>
      value.title.toLowerCase().includes(lowerCaseSearchString)
    );
  }
}
