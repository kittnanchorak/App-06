import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) { }
  gotoDetails(item: any) {
    this.navCtrl.navigateForward('/pond', { state: { item } });
  }
  items = [
    {
      id: 1,
      title: 'รุ่นA54',
      content: 'ราคา25,000 ', 
      imageURL: 'assets/img/A54 1.png.png'
    },
    {
      id: 2,
      title: 'รุ่นi15promax',
      content: 'ราคา25,000',
      imageURL: 'assets/img/i15promax 1.png.png'
    },
    {
      id: 3,
      title: 'รุ่นmi14tpro',
      content: 'ราคา25,000',
      imageURL: 'assets/img/mi14tpro 1.png.png'
    },
    {
      id: 4,
      title: 'รุ่นGalaxy S24 Ultra',
      content: 'ราคา25,000',
      imageURL: 'assets/img/s24u 1.png.png'
    }
  ]
}
