import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss']
})
export class BasicsPageComponent {

  public nameLower: string = 'SEBASTIAN'
  public nameUpper: string = 'alarcon'
  public fullName: string = 'sEBAStian aLARcon'

}
