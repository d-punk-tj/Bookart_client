import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  img_urls = [
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/red-book-hi8d6431a.png',
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/indexa51d5d7.jpeg',
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/blue-book-hic09def7.png',
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/blue-book-reading-hid3b6f09.png',        
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/green-book-reading-hiec1b149.png',
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/closed-book-cartoon-vector-symbol-icon-design-beautiful-illustr-illustration-isolated-white-background-975033320bc2a72.jpeg',
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/inex290acda.jpeg',
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/f958c0ca1c1701d236796ed90542a21940742f7.jpeg',
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/index5848f8e.png',
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/2511916-orange-book-cartoon6cc76e1.jpeg'
  ]


  constructor() { }

  getimg(){
    return this.img_urls[Math.floor(Math.random() * 10)];
  
  }
}
