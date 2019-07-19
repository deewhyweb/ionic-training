import { Component, OnInit } from '@angular/core';
import { RhmapSyncService } from '../rhmap-sync.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  item: string;
  task: any;
  constructor(private rhmapSyncService: RhmapSyncService) { }

  ngOnInit() {
    console.log(this.task);
    if (this.task) {
      this.item = this.task.data.item;
    }
  }
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


