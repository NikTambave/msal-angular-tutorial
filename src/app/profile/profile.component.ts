import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

type ProfileType = {
  givenName?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile!: ProfileType;

  constructor(
    private authService: MsalService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getProfile();
    this.getAccessToken();
  }

  getProfile() {
    this.http.get(GRAPH_ENDPOINT)
      .subscribe(profile => {
        this.profile = profile;
      });
  }

  getactivity(){
    debugger;
    this.http.get('https://www.boredapi.com/api/activity')
      .subscribe(profile => {
        debugger;
        this.profile = profile;
      });
  }

  async getAccessToken(){
debugger;
var request = {
  scopes: ['api://mail-proxy/ReadMail'],
};

this.authService.acquireTokenSilent(request).subscribe(tokenResponse => {
  // Do something with the tokenResponse
  debugger;
  console.log(tokenResponse.accessToken);
});

  }
}
