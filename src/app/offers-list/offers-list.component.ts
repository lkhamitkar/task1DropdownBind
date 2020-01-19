import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

  //Create a object for storing filter data and bind to html table.
  public offerDetails: object = [];  

  //filter offer details on name and return offer Details object.
  public OfferHeader = [{ name: 'O1' }, { name: 'O2'}, { name: 'O3' }];

    
    public Offer = [  
      {Name:'O1', title: 'Offer-Restaurant', price: '500', store: 'AB' },  
      { Name: 'O2', title: 'Offer-Shopping', price: '400', store: 'Amazon' },  
      { Name: 'O3', title: 'Offer-Electronics', price: '500', store: 'Chroma' },  
      { Name: 'O2', title: 'Offer-Clothings', price: '200', store: 'Mango' },  
      { Name: 'O1', title: 'Offer-PVR', price: '200', store: 'PVR'},  
      ];  

  
  constructor() 
  {   
    
    this.getOffers();
  } 

  getOffers() {  
      console.log("getOffers");  
      return this.OfferHeader;  
  }  

  
  SearchOffer(name: string) {   

      let obj = this.Offer.filter(m => m.Name == name);  
      this.offerDetails = obj;  
      return this.offerDetails;  
  } 
   
  ngOnInit() {
  }

}
