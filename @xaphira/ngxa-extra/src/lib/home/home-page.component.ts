import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { PROFILE_INDEXED_DB, IndexedDBFactoryService } from '@xaphira/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'xa-home-page',
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit, OnDestroy {

  public name: Promise<string>;

  constructor(@Inject(PROFILE_INDEXED_DB) private profileIndexedDB: IndexedDBFactoryService) {}

  ngOnInit(): void {
    this.name = this.profileIndexedDB.get('name');
  }

  ngOnDestroy(): void {}

}
