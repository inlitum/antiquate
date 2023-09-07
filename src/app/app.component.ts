import { Component, OnDestroy, OnInit } from '@angular/core';
import { Theme, ThemeService }          from './services/theme.service';
import { Subscription }                 from 'rxjs';

@Component ({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, OnDestroy {

    public theme!: Theme;
    private _subscriptions = new Subscription();

    public constructor (
        private _themeService: ThemeService
    ) {
    }

    ngOnInit () {
        const themeSub = this._themeService.onThemeChange$.subscribe(theme => {
            this.theme = theme;
        });

        this._subscriptions.add(themeSub);
    }

    ngOnDestroy () {
        this._subscriptions.unsubscribe();
    }
}
