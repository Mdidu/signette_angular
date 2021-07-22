import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DocumentService} from "../../../service/document.service";

@Component({
  selector: 'app-list-document-by-user',
  templateUrl: './list-document-by-user.component.html',
  styleUrls: ['./list-document-by-user.component.css']
})
export class ListDocumentByUserComponent implements OnInit {

  userId: any;
  documents: any;

  constructor(private route:ActivatedRoute, private documentService: DocumentService, private router: Router) { }

  ngOnInit(): void {
    this.displayDocument();
  }

  displayDocument() {
    this.userId = this.route.snapshot.paramMap.get('id');

    this.documentService.findDocumentByTrip(this.userId).subscribe(
      (documents) => {
        this.documents = documents;
      }
    )
  }

  onDownloadDocument(id: number) {}
  onSignedDocument(id: number) {}

}
