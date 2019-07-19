import { Component } from '@angular/core';
import { RhmapSyncService } from '../rhmap-sync.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  item: string;
  constructor(private rhmapSyncService: RhmapSyncService ) {}
  saveItem() {
    console.log(this.item);
    this.rhmapSyncService.createItem(this.item)
    .then(res => {
      this.item = '';
    })
    .catch(err => {
      console.error(err);
    });
  }
}
