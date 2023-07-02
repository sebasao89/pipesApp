import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  itemsMenu: MenuItem[] = []

  ngOnInit() {
    this.itemsMenu = [
        {
            label: 'Pipes de angular',
            icon: 'pi pi-desktop',
            items: [
              {
                label: 'Textos y fechas',
                icon: 'pi pi-align-left',
                routerLink: '/'
              },
              {
                label: 'Números',
                icon: 'pi pi-dollar',
                routerLink: 'numbers'
              },
              {
                label: 'No comunes',
                icon: 'pi pi-globe',
                routerLink: 'uncommon'
              }
            ]
        },
        {
          label: 'Pipes Personalizados',
          icon: 'pi pi-cog',
          items: [
            {
              label: 'Otro elemento',
              icon: 'pi pi-align-left',
              items: [
                {
                  label: 'Números',
                  icon: 'pi pi-dollar'
                },
                {
                  label: 'No comunes',
                  icon: 'pi pi-globe'
                }
              ]
            }            
          ]
      }
    ];
}

}
