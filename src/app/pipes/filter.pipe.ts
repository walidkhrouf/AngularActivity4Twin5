import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(values: any[], searchString: string): any[] {
    if (!values || !searchString) {
      return values; // retourne le tableau complet si aucune chaîne de recherche n'est fournie
    }
    
   
    const lowerCaseSearchString = searchString.toLowerCase();

   
    return values.filter(value =>
      value.title.toLowerCase().includes(lowerCaseSearchString)
    );
  }
}
