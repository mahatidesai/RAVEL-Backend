from django.db import models

class User(models.Model):
    userID = models.AutoField(primary_key=True)
    userName = models.CharField(max_length=100,null=False, blank=False)
    userEmail = models.EmailField(null=False, blank=False)
    userLiscenseNumber = models.CharField(max_length=15,null=False, blank=False)
    

class Vehicle(models.Model):
    vehicleID = models.AutoField(primary_key=True)
    ownerID = models.ForeignKey(User,null=True, on_delete=models.CASCADE),
    vehicleName = models.CharField(max_length=100, blank = False, null=False)
    vehicleModel = models.CharField(max_length=100, blank=False, null=False)
    vehicleDescription = models.TextField(blank = False, null=False)
    vehicleType = models.CharField(max_length=100, null= False, blank = False,
        choices={
        "Car": "Car",
        "Scooter": "Scooter",
        "Bike": "Bike",
        "Cycle": "Cycle",
    })
    vehicleSeater = models.IntegerField(null= False, blank=True, choices={5:5,7:7, 9:9})
    vehicleRent = models.IntegerField(blank=False, null=False)
    vehicleLocation = models.CharField(max_length= 50, null=False, blank=False)
    vehicleAddress = models.TextField(null=False, blank = False)
    fuelType = models.TextField(choices={
        "Petrol": "Petrol",
        "Diesel": "Diesel",
        "EV": "EV",
    })

class Rented(models.Model):
    vehicleID = models.ForeignKey(Vehicle, null=True, on_delete=models.CASCADE, related_name='rents')
    renterID = models.ForeignKey(User, null=True, on_delete=models.CASCADE, related_name='rentals_as_renter')
    ownerID = models.ForeignKey(User, null=True, on_delete=models.CASCADE, related_name='rentals_as_owner')
    pickupLocation = models.CharField(max_length=255, null=False, blank=False)
    dropOffLocation = models.CharField(max_length=255, null=False, blank=False)
    pickupTime = models.TimeField(blank=False, null=False)
    dropOffTime = models.TimeField(blank=False, null=False)
    dateRentFrom = models.DateField(blank=False, null=False)
    dateRentTo = models.DateField(blank=False, null=False)

    
class Payement(models.Model):
    transactionID = models.CharField(max_length = 100, blank= True, null=False)
    transactionType = models.CharField(max_length=255,blank = False, null=False)
    transactionDate = models.DateField(max_length=255, blank = False, null=False)
    transactionAmount = models.IntegerField(blank =False, null=False)
    rentID = models.ForeignKey(Rented,null=True, on_delete=models.CASCADE)



