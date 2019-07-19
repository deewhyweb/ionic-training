import { Injectable } from '@angular/core';
import { sync } from 'fh-js-sdk';

@Injectable({
  providedIn: 'root'
})
export class RhmapSyncService {
  dataset = 'myShoppingList';
  items: Array<any>;
  constructor() {
    sync.init({
      do_console_log: false,
      storage_strategy: 'indexed-db',
      auto_sync_local_updates: true
    });
    const options = {
      sync_frequency: 30 // Sync every 30 seconds for the 'myShoppingList' dataset
    };
    sync.manage(this.dataset, options, {}, {}, () => {
      console.log(this.dataset + ' initialized');
      this.refresh();
      this.notify();
    });
   }

   createItem(item) {
     return new Promise((resolve, reject) => {
       const data = {
         item
       };
       sync.doCreate(this.dataset, data, (res) => {
         console.log(res);
         resolve();
       },
       (err) => {
        console.error(err);
        reject(err);
       });
     });
   }

   updateItem(item) {
    const data = {
      item
    };
    return new Promise((resolve, reject) => {
      sync.doUpdate(this.dataset, item.key, item.data, (res) => {
        console.log(res);
        resolve();
      },
      (err) => {
       console.error(err);
       reject(err);
      });
    });
  }

   listItems() {
     return new Promise((resolve, reject) => {
      sync.doList(this.dataset, (records) => {
        console.log(records);
        const results = [];
        const keys = Object.keys(records);
        keys.forEach(key => {
          const record = {
            key,
            data: records[key].data
          };
          results.push(record);
        });
        resolve(results);
      },
      err => {
        reject(err);
      });
     });
   }

   refresh() {
    this.listItems()
    .then((records: Array<any>) => {
      this.items = records;
    })
    .catch(err => {
      console.error(err);
    });
   }

   notify() {
    sync.notify(event => {
      if (event.code === 'delta_received' || event.code === 'local_update_applied') {
        this.refresh();
      }
    });
   }

   deleteItem(uid: string) {
    return new Promise((resolve, reject) => {
      sync.doDelete (this.dataset, uid, (res) => {
        console.log(res);
        resolve();
      },
      (err) => {
       console.error(err);
       reject(err);
      });
    });
  }
}
