import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['../app.component.css'],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'Offline';
  getServerStatus() {
    return this.serverStatus;
  }
}
