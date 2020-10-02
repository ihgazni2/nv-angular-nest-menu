import {
    Component, 
    Input, 
    OnInit, 
    ViewChild,
} from '@angular/core';


import {
    Router
} from '@angular/router';



@Component({
    selector: 'nv-menu-item',
    templateUrl: './menu-item.component.html',
})
export class MenuItemComponent implements OnInit {
    @Input() children: any[];
    @ViewChild('_childMenu',{static: true}) public _childMenu;
    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {
    }
}
