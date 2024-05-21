import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EncryptionComponent } from './components/encryption/encryption.component';
import { DecryptionComponent } from './components/decryption/decryption.component';
import { FilesComponent } from './components/files/files.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'encryption',
    component:EncryptionComponent
  },
  {
    path:'decryption',
    component:DecryptionComponent
  },
  {
    path:'files',
    component:FilesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
