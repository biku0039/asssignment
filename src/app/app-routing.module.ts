import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdfComponent } from './pdf/pdf.component';
import { ExcelSheetComponent } from './excel-sheet/excel-sheet.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  {
  path: 'pdf',
  component: PdfComponent
  },
  {
    path: 'sheet',
    component: ExcelSheetComponent
  },
  {
    path: 'chart',
    component: ChartsComponent
  },
  {
    path: '**',
    redirectTo: '/pdf'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
