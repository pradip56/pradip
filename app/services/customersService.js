app.service('customersService', function () {
    this.getCustomers = function () {
        return customers;
    };   

    var customers = [
        {
            id: 2, firstName: 'Pradip', lastName: 'Aryal', address: 'Baneshwor-35.', city: 'kathmandu',
          
        },           
                 
        
    ];

});