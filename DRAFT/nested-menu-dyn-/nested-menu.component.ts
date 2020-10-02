import { 
    Component, 
    OnInit,
    AfterViewInit,
    ViewContainerRef,
    ViewChild,
} from '@angular/core';

import { 
    creat_html
} from "./ui-srv"



@Component({
    selector: 'app-nested-menu',
    template: `
        <ng-container #vc></ng-container>
    `,
})
export class NestedMenuComponent implements OnInit,AfterViewInit {
    @ViewChild("vc", {read: ViewContainerRef}) vc: ViewContainerRef;

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {

    }

}
