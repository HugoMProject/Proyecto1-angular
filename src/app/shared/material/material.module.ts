import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatCardModule
  ],
  exports:[
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatCardModule
    
  ]
})
export class MaterialModule { }
