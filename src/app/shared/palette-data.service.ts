import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaletteDataService {
  public columns!: number;

  public setColumns(value: number) {
    this.columns = value;
    console.log(this.columns)
}

  constructor() { }
}
