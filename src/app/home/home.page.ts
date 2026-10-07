import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, 
  IonList, IonItem, IonLabel, IonButton, IonBadge 
} from '@ionic/angular';

interface Counter {
  base: number;
  value: number;
  color: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
    IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, 
    IonList, IonItem, IonLabel, IonButton, IonBadge
  ],
})
export class HomePage {
  // 5 contadores requeridos con múltiplos de 2, 3, 5, 7 y 10
  counters: Counter[] = [
    { base: 2, value: 0, color: '#427A3C' },
    { base: 3, value: 0, color: '#0f766e' },
    { base: 5, value: 0, color: '#0369a1' },
    { base: 7, value: 0, color: '#4338ca' },
    { base: 10, value: 0, color: '#6d28d9' }
  ];

  showPrimes: boolean = false;
  primeNumbers: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

  increment(counter: Counter) {
    counter.value += counter.base;
  }

  togglePrimes() {
    this.showPrimes = !this.showPrimes;
  }
}