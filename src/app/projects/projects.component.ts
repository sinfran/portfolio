import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(public matDialog: MatDialog) {
   }

  ngOnInit() {
  }

  initProject() {
    console.log('function called');
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "100%";
    dialogConfig.width = "75%";
    dialogConfig.maxHeight = '100%';
    dialogConfig.panelClass = 'custom-dialog-container';
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }


}
