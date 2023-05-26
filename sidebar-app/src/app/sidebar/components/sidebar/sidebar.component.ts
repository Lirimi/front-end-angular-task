import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { BehaviorSubject, reduce } from 'rxjs';
import { OrganizationUsersUtils } from '../../utils/organization-users';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // recommended to be used because of permornce especially for big scalable applications (not neccesery in this case)
})
export class SidebarComponent implements OnInit, OnDestroy {

  constructor(private sidebarService: SidebarService) {
    this.getOrganizationUsers()
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {

  }

  getOrganizationUsers(): void {
    this.sidebarService.getOrganizationsUsers()
      // .pipe(reduce(this.transform))
      .subscribe(result => {
        console.log(result)
        console.log('Transformed Data', OrganizationUsersUtils.transform(result))
      }) 
  }
}
