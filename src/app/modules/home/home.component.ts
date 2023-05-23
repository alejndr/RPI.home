import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, first, map, of, switchMap } from 'rxjs';
import { fadeInAnimation } from 'src/app/core/animations/fadeIn';

const API_KEY = process.env['CF_API_KEY'];
const ZONE_ID = process.env['CF_ZONE_ID'];
const DOMAIN_NAME = 'alejndr.com';
const RECORD_TYPE = 'A';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' },
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('%c api key from env ', 'color: white; background-color: green', API_KEY);
    
    this.getCurrentIP().pipe(first()).subscribe(
      (data) => {
        console.log('%c Data ', 'color: white; background-color: green', data);
        
      },
      (error) => {
        console.log('%c Error ', 'color: white; background-color: red', error);
      }
    );
  }

  getCurrentIP(): Observable<string> {
    const url = 'https://api.ipify.org?format=json';
    return this.http.get(url)
      .pipe(
        switchMap((res: any) => {
          const ip = res.ip;
          const dnsRecordUrl = `https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records?type=${RECORD_TYPE}&name=${DOMAIN_NAME}`;
          const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
          });
          return this.http.get(dnsRecordUrl, { headers })
            .pipe(
              switchMap((res: any) => {
                const dnsRecordId = res.result[0].id;
                const dnsRecordUrl = `https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records/${dnsRecordId}`;
                const body = {
                  type: RECORD_TYPE,
                  name: DOMAIN_NAME,
                  content: ip,
                  ttl: 1,
                  proxied: false
                };
                return this.http.put(dnsRecordUrl, body, { headers })
                  .pipe(
                    switchMap((res: any) => {
                      return of(res);
                    })
                  );
              })
            );
        })
      );
  }


}
