import { 
    NgModule,
} from '@angular/core';

import {
    CommonModule
} from '@angular/common';


import {
    MatIconModule,
} from '@angular/material/icon';

import {
    MatMenuModule,
} from '@angular/material/menu';

import { 
    MatButtonModule, 
} from '@angular/material/button';


import { NestMenuComponent } from './nest-menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';




@NgModule({
    declarations: [NestMenuComponent, MenuItemComponent],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
    ],
    exports: [NestMenuComponent]
})
export class NestMenuModule { }
