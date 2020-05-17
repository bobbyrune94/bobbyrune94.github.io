import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    success = null;

    constructor(
        private router: Router, 
        private route: ActivatedRoute
    ) {}

    ngOnInit() {}

    public sendEmail(e: Event) {
      emailjs.sendForm('kenny_email', 'template_K2pl1K6A', e.target as HTMLFormElement, 'user_q8iH1h8XehfXwHcnmh3dd')
        .then((result: EmailJSResponseStatus) => {
          this.router.navigate(['contact']);
          this.success = true;
        }, (error) => {
          this.router.navigate(['contact']);
          this.success = false;
        });
    }
}
