import { Component, OnInit } from '@angular/core';
import { RhmapSyncService } from '../rhmap-sync.service';
import {ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  /*item: {
    title: string;
    activeInd: boolean
  };*/
  item: string;
  task: any;
  saveButtonTitle = 'Save';
  addTaskTitle = 'Add Task';
  constructor(private rhmapSyncService: RhmapSyncService, private modalController: ModalController){ }

  ngOnInit() {
    console.log(this.task);
    if (this.task && this.task.data) {
      this.saveButtonTitle = 'Update';
      this.addTaskTitle = 'Update Task';
      this.item = this.task.data.item;
    }
  }
  saveItem() {
    if (this.task.data) {
      console.log('UPDATE');
      console.log(this.task.data);
      this.task.data.item = this.item;
      this.rhmapSyncService.updateItem(this.task)
      .then(res => {
        this.item = '';
      })
      .catch(err => {
        console.error(err);
      });

    } else {
      console.log(this.item);
      this.rhmapSyncService.createItem(this.item)
      .then(res => {
        this.item = '';
      })
      .catch(err => {
        console.error(err);
      });
    }
    this.modalController.dismiss();

  }

  deleteItem() {
    if (this.task.data) {
      const uid = this.task.key;
      console.log(uid);
      this.rhmapSyncService.deleteItem(uid)

    .then(res => {
      console.log('success');
    })
    .catch(err => {
      console.error(err);
    });
    }
    this.modalController.dismiss();
  }

  }


