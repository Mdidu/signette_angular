import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DocumentService} from "../../../service/document.service";

@Component({
  selector: 'app-list-document-by-trip',
  templateUrl: './list-document-by-trip.component.html',
  styleUrls: ['./list-document-by-trip.component.css']
})
export class ListDocumentByTripComponent implements OnInit {

  @Input() tripId: any;
  documents: any;

  constructor(private route:ActivatedRoute, private documentService: DocumentService, private router: Router) { }

  ngOnInit(): void {
    this.displayDocument();
  }

  displayDocument() {
    this.tripId = this.route.snapshot.paramMap.get('id');

    this.documentService.findDocumentByTrip(this.tripId).subscribe(
      (documents) => {
        this.documents = documents;
      }
    )
  }

  onDownloadDocument(id: number) {}
  onSignedDocument(id: number) {}
}
