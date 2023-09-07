import { Injectable }               from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export type CaseStyle = 'lowercase' | 'normalcase' | 'uppercase';

@Injectable ({
    providedIn: 'root'
})
export class SettingsService {

    private _animationTime: number = 2500;
    constructor () {
        document.documentElement.style.setProperty('--animation-time', this.fromMS(this._animationTime));
    }

    private fromMS (ms: number): string {
        return ms / 1000 + 's';
    }
}
