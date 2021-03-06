'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];


function calculPrice(rentals,cars)
{
  for(var i = 0; i<rentals.length ; i++)
  { 
    var CarofRental = getCarsbyId(cars, cars.id);
    var date1 = new Date(rentals[i].pickupDate);
    var date2 = new Date(rentals[i].returnDate);
    var datedif = 1+ (date1.getDay() - date2.getDay());
    console.log(datedif);
    
    var prixReduit = CarofRental.pricePerDay;
    if(datedif>= 1 && datedif < 4)
    {
      prixReduit = prixReduit * 0.1;
    }
    else if(datedif>= 4  && datedif < 10)
    {
      prixReduit = prixReduit * 0.3;
    }
    else if(datedit>=10)
    {
      prixReduit = prixReduit * 0.5;
    }
    var timecomponent =datedif*prixReduit;
    var distancecomponent = rentals[i].distance * CarofRental.pricePerKm;

    rentals[i].price = timecomponent+distancecomponent;

    if(rentals[i].deductibleReduction == TRUE)
    {
      rentals[i].price += 4* datedif;
    }

    rentals[i].commission = rantals[i].price * 0.3;
    rentals[i].insurance = rentals[i].commission/2;
    rentals[i].assistance = datedif;
    rentals[i].drivy = rentals[i].price - rentals[i].commission - rentals[i].insurance - rentals[i].assistance;




    console.log(nbDays);
    console.log(rentals[i].price);
  }
}

function getCarsbyId(cars, Id)
{
  for (var c in cars)
    {
      if(cars[c].id == Id)
        return cars[c];
    }
  return;
}

calculPrice(cars,rentals);
console.log("bonjour");
console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
