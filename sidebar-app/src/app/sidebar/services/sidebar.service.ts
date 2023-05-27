import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InitialOrgUsers } from '../models/organizations';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor() {}

  getOrganizationsUsers(): Observable<InitialOrgUsers[]> {
    return of([
      { id: '1', name: 'Ravvivo / Finance Team / Michael P. Lucifer' },
      { id: '2', name: 'Ravvivo / Technical Team / Marlyn B. Brown' },
      { id: '3', name: 'Ravvivo / Technical Team / David P. Perez' },
      { id: '4', name: 'CashLab / Anna J. Kelley' },
      { id: '5', name: 'CashLab / Brenda J. Soto' },
      { id: '6', name: 'Dovish / Management / Timothy A. Merrow' },
    ]);
  }
}
