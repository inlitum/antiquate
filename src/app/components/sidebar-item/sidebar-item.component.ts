import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription }                                           from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'p-sidebar-item[route]',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit, OnDestroy{

    @Input()
    text: string | null = null;

    @Input()
    icon: string | null = null;

    @Input()
    activeIcon: string | null = null;

    @Input()
    route!: string;

    protected currentIcon: string = '';

    public active (): boolean {
        return this.route === this.currentRoute;
    }

    public hasText (): boolean {
        return this.text != null && this.text !== '';
    }

    public hasIcon (): boolean {
        return this.icon != null && this.icon !== '';
    }

    public hasActiveIcon (): boolean {
        return this.activeIcon != null && this.activeIcon !== '';
    }

    public getCurrentIcon(): string {
        if (this.icon == null || this.icon === '') {
            return '';
        }

        if (this.hasActiveIcon() && this.active()) {
            return this.activeIcon!;
        }

        return this.icon!;
    }

    protected currentRoute: string = '';
    private _subscriptions = new Subscription();

    public constructor (
        private _router: Router
        , private _changeDetector: ChangeDetectorRef
    ) {
    }

    ngOnInit () {
        const routerSub = this._router.events.subscribe(val => {
            if (val instanceof NavigationEnd) {
                this.currentRoute = val.url;

                this.currentIcon = this.getCurrentIcon();

                this._changeDetector.detectChanges();
            }
        });

        this._subscriptions.add(routerSub);
    }

    ngOnDestroy () {
        this._subscriptions.unsubscribe();
    }
}
