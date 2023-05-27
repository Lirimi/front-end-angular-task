import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { BehaviorSubject, takeUntil } from 'rxjs';
import { OrganizationUsersUtils } from '../../utils/organization-users';
import { TransformedOrgUsers } from '../../models/organizations';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // recommended to be used because of permornce especially for big scalable applications (not neccesery in this case)
})
export class SidebarComponent extends BaseComponent implements OnInit {
  private orgUsers = new BehaviorSubject<TransformedOrgUsers[] | null>(null);
  orgUsers$ = this.orgUsers.asObservable();

  constructor(private sidebarService: SidebarService) {
    super();
  }

  ngOnInit(): void {
    this.getOrganizationUsers();
  }

  getOrganizationUsers(): void {
    this.sidebarService
      .getOrganizationsUsers()
      .pipe(takeUntil(this.isDestroyed))
      .subscribe((result) => {
        this.orgUsers.next(OrganizationUsersUtils.transform(result));
      });
  }
}
