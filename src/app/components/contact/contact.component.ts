import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientModel } from '../../models/client.model';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  constructor(private firestore: FirebaseService) {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      organization: new FormControl(''),
      phone: new FormControl(null),
      mail: new FormControl('', Validators.required),
      comments: new FormControl('')
    })
   }

  ngOnInit(): void {
  }

  public newClientContact(data: ClientModel, e: Event) {
    console.log('hice click', e)
    this.firestore.createClient(data).then(() => {
      this.contactForm.setValue({
        name: '',
        organization: '',
        phone: '',
        mail: '',
        comments: ''
      })
      console.log('documento creado exitosamente')
    })
  }

}
