import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component ({
    selector: 'p-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: [ './sidebar.component.scss' ]
})
export class SidebarComponent implements OnInit {

    protected state: string = 'opening';
    @ViewChild('sidebar', {static: true}) sidebar!: ElementRef;

    ngOnInit (): void {
        const animationTime = this.toMS(getComputedStyle(this.sidebar.nativeElement).getPropertyValue('--animation-time'));


        setTimeout(()=>{                           // <<<---using ()=> syntax
            this.state = 'opened';
        }, animationTime);
    }

    private toMS (s: string) {
        return parseFloat(s) * (/\ds$/.test(s) ? 1000 : 1);
    }

}
