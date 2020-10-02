import {
    Component,
    Input,
    OnInit,
    ViewChild
} from '@angular/core';

import {
    Router
} from '@angular/router';

import {
    Dict,
    Nest,
    Nnode,
    Data,
    load,
    set_auto_icon,
} from "./_data-srv"



@Component({
    selector: 'nv-nest-menu',
    templateUrl:'./nest-menu.component.html'
})
export class NestMenuComponent implements OnInit {
    public _data:Nnode;
    public _enable_auto_icon;
    @Input()
    get enable_auto_icon():boolean {
        return(this._enable_auto_icon)
    }
    set enable_auto_icon(bl:boolean|undefined){
        this._enable_auto_icon = (bl===undefined)?false:bl;
        if(this._data !== undefined){
            this._data = set_auto_icon(this._data,this._enable_auto_icon);
        }
    }
    @Input()
    get data():Data {
        return(this._data)
    }
    set data(o:Data) {
        this._data = load(o)
    }
    constructor(
        public router: Router
    ) {

    }

    ngOnInit() {
    }

}
