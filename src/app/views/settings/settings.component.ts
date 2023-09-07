import { Component, OnInit }   from '@angular/core';
import { Theme, ThemeService }        from '../../services/theme.service';
import { CaseStyle, SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit{

    protected themes: Theme[] = [];
    protected selectedTheme!: Theme;
    public constructor (
        private _themeService: ThemeService
        , private _settingsService: SettingsService
    ) {
        this._themeService.onThemeChange$.subscribe(theme => {
            this.selectedTheme = theme;
        })
    }

    handleThemeChange (event: any) {
        const theme = event.value;
        this._themeService.changeTheme(theme);
    }

    ngOnInit (): void {
        this.themes = this._themeService.getAllThemes();
    }

}
