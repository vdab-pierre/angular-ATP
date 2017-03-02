import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    //styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ATP Rankings';
    isCollapsed: boolean = true;

    toggleCollapse(): void {
        this.isCollapsed = !this.isCollapsed;
    }
}