import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { BehaviorSubject, reduce } from 'rxjs';
import { OrganizationUsersUtils } from '../../utils/organization-users';
import { TranformedOrgUsers } from '../../models/organizations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // recommended to be used because of permornce especially for big scalable applications (not neccesery in this case)
})
export class SidebarComponent implements OnInit, OnDestroy {

  private orgUsers = new BehaviorSubject<TranformedOrgUsers[] | null>(null);
  orgUsers$ = this.orgUsers.asObservable()

  constructor(private sidebarService: SidebarService) {
  }

  ngOnInit(): void {
    this.getOrganizationUsers() 
  }

  ngOnDestroy(): void {

  }

  getOrganizationUsers(): void {
    this.sidebarService.getOrganizationsUsers()
      .subscribe(result => this.orgUsers.next(OrganizationUsersUtils.transform(result))) 
  }
}
