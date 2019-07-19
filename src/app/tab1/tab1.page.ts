
import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AddTaskPage } from '../add-task/add-task.page';

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  constructor(private modalController: ModalController) {}

  addTask() {
    console.log("Adding task");
    this.presentModal();
  
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddTaskPage
    });
    return await modal.present();
  }


}
