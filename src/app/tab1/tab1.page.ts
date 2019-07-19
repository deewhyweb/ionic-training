
import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AddTaskPage } from '../add-task/add-task.page';
import { RhmapSyncService } from '../rhmap-sync.service';

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  items: Array<any>;
  constructor(private modalController: ModalController, private rhmapSyncService: RhmapSyncService ) {}

  addTask() {
    console.log("Adding task");
    this.presentModal();
  }

  async presentModal(task = {}) {
    const modal = await this.modalController.create({
      component: AddTaskPage,
      componentProps: {
        task
      }
    });
    return await modal.present();
  }

  editItem(item: any){
    console.log(item);
    //this.items.push(item);
    this.presentModal(item);
  }

}
