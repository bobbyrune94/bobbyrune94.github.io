import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    email = new EmailData('', '', '');
    proxyUrl = 'https://cors-anywhere.herokuapp.com/'; //to fix the CORS preflight request issue
    apiUrl = 'https://api.sendgrid.com/v3/mail/send';
    apiKey = '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'
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + this.apiKey,
        })
    }

    constructor(private http: HttpClient) { }

    ngOnInit() {
    }

    sendEmail(): void {
        var emailData = {
            "personalizations": [
                {
                    "to": [
                        {
                            "email": "bobbyrune94@gmail.com"
                        }
                    ],
                    "subject": "[Website] Message from " + this.email.name + " at " + this.email.address
                }
            ],
            "from": {
                "email": "kenchenpersonalsite@gmail.com"
            },
            "content": [
                {
                    "type": "text/plain",
                    "value": this.email.message
                }
            ]
        }
        this.http.post(this.proxyUrl + this.apiUrl, emailData, this.httpOptions).subscribe(
            (val) => {
                console.log("POST call successful value returned in body", val);
            },
            response => {
                console.log("POST call in error", response);
            },
            () => {
                console.log("The POST observable is now completed.");
            }
        );
        alert("Sent Email");
    }
}

class EmailData {
  constructor(
    public name: string,
    public address: string,
    public message: string,
  ) {}
}
