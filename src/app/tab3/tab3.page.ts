import { Component } from '@angular/core';
import { RhmapSyncService } from '../rhmap-sync.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  items: Array<any>;
  constructor(public rhmapSyncService: RhmapSyncService ) {

  }
  editItem(item) {
    console.log(item.key);
  }

}
