import {Component} from '@angular/core';
import {Card} from "./interfaces/card";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() {
  }

  cards: Card[] = [
    {
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta earum explicabo impedit incidunt labore sunt totam! Architecto corporis esse ex id maxime necessitatibus nisi nostrum placeat qui, recusandae repellat velit?',
      imgUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Card 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta earum explicabo impedit incidunt labore sunt totam! Architecto corporis esse ex id maxime necessitatibus nisi nostrum placeat qui, recusandae repellat velit?',
      imgUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Card 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta earum explicabo impedit incidunt labore sunt totam! Architecto corporis esse ex id maxime necessitatibus nisi nostrum placeat qui, recusandae repellat velit?',
      imgUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Card 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta earum explicabo impedit incidunt labore sunt totam! Architecto corporis esse ex id maxime necessitatibus nisi nostrum placeat qui, recusandae repellat velit?',
      imgUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Card 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta earum explicabo impedit incidunt labore sunt totam! Architecto corporis esse ex id maxime necessitatibus nisi nostrum placeat qui, recusandae repellat velit?',
      imgUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Card 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta earum explicabo impedit incidunt labore sunt totam! Architecto corporis esse ex id maxime necessitatibus nisi nostrum placeat qui, recusandae repellat velit?',
      imgUrl: 'https://via.placeholder.com/150'
    }
  ]

  public deleteCard(deletedCard: object): void {
    const newCardList = this.cards.filter((card: Card) => card != deletedCard)
    this.cards = [...newCardList]
  }

}
