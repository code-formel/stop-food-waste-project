import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

//On va créer une variable avec tous les modules que l'on veut importer
//Pour éviter de dupliquer les mêmes données dans imports et exports, 
//On utilise une variable pour écrire une fois
const MATERIAL_MODULES = [
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,//Exemple: c'est le module pour importer le components des bouttons
  MatSidenavModule,
  MatIconModule,
  MatListModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule, MATERIAL_MODULES],//On importe le module de chaque component. CommonModule est automatiquement ajouté lors de la génération du module
  exports: [MATERIAL_MODULES],//Obligatoire pour pouvoir être importé dans AppModule
})
export class MaterialModule {}
