import { Injectable, OnInit }       from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface Theme {
    displayName: string;
    class: string;
    selected?: boolean;
}

@Injectable ({
    providedIn: 'root'
})
export class ThemeService {

    private _availableThemes: {[key: string]: Theme} = {
        'catppuccin-mocha': {
            displayName: 'Catppucin Mocha',
            class: 'catppuccin-mocha'
        },
        'catppuccin-latte': {
            displayName: 'Catppucin Latte',
            class: 'catppuccin-latte'
        },
        'nord-dark': {
            displayName: 'Nord Dark',
            class: 'nord-dark'
        },
        'nord-light': {
            displayName: 'Nord Light',
            class: 'nord-light'
        },
        'solarized-dark': {
            displayName: 'Solarized Dark',
            class: 'solarized-dark'
        },
        'solarized-light': {
            displayName: 'Solarized Light',
            class: 'solarized-light'
        }
    };
    private _currentTheme: Theme = this._availableThemes['catppuccin-mocha'];

    public onThemeChange$: Subject<Theme> = new BehaviorSubject<Theme>(this._currentTheme);

    constructor () {
        const themeClass = localStorage.getItem('theme');

        let theme: Theme;

        if (themeClass == null || themeClass === '') {
            theme = this._availableThemes[0];
        } else {
            let t = this._availableThemes[themeClass];

            if (t == null) {
                theme = this._availableThemes[0];
            } else {
                theme = t;
                theme.selected = true;
            }
        }

        this._currentTheme = theme;
        this.onThemeChange$.next(this._currentTheme);
    }

    public changeTheme (themeClass: string) {
        const theme = this._availableThemes[themeClass];
        if (theme == null) {
            console.log('TODO - Display a little flair saying we dont support this...');
            return;
        }

        this._availableThemes[this._currentTheme.class].selected = false;
        this._availableThemes[theme.class].selected = true;


        this._currentTheme = theme
        this.onThemeChange$.next(this._currentTheme);

        localStorage.setItem('theme', this._currentTheme.class);
    }

    public getAllThemes (): Theme[] {
        let themes: Theme[] = [];

        let keys = Object.keys(this._availableThemes);

        for (let key of keys) {
            themes.push(this._availableThemes[key]);
        }

        return themes;
    }
}
