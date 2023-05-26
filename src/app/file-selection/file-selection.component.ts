import { Component, OnInit } from '@angular/core';
import { FileSelectionModel } from './file-selection-model';

@Component({
  selector: 'app-file-selection',
  templateUrl: './file-selection.component.html',
  styleUrls: ['./file-selection.component.css']
})
export class FileSelectionComponent implements OnInit {
  file1: FileSelectionModel;
  file2: FileSelectionModel;
  fileSelectionLabel: string = "Select Files:";
  pictureLabel: string = "";
  message: string = "";

  constructor() { 
    this.file1 = new FileSelectionModel("", "", new Date());
    this.file2 = new FileSelectionModel("", "", new Date());
  }

  ngOnInit(): void {
  }

  onFileSelect(event: any)
  {
    const files = event.target.files;
    if (files.length === 0)
    {
      this.message = "No file selected";
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
    }

    this.populateFileSelectionModel(files[0]);
  }

  private populateFileSelectionModel(file: any)
  {
    const reader = new FileReader();
    if(!this.file1.image) {
      this.file1.fileName = file.name;
      this.file1.dateTime = new Date();
      reader.readAsDataURL(file);
      reader.onload = (_event) => { 
        this.file1.image = reader.result;
      }
      this.fileSelectionLabel = "Select Last File:";
      this.pictureLabel = "Chosen File:";
    } else if(!this.file2.image) {
      this.file2.fileName = file.name;
      this.file2.dateTime = new Date();
      reader.readAsDataURL(file);
      reader.onload = (_event) => { 
        this.file2.image = reader.result;
      }
      this.fileSelectionLabel = "Replace File:";
      this.pictureLabel = "Chosen Files:";
    } else {
      // determine which file is the oldest
      const date1 = this.file1.dateTime;
      const date2 = this.file2.dateTime;

      if (date1 < date2) {
        this.file1.fileName = file.name;
        this.file1.dateTime = new Date();
        reader.readAsDataURL(file);
        reader.onload = (_event) => { 
          this.file1.image = reader.result;
        }
      } else {
        this.file2.fileName = file.name;
        this.file2.dateTime = new Date();
        reader.readAsDataURL(file);
        reader.onload = (_event) => { 
          this.file2.image = reader.result;
        }
      }
    }
  }

}
