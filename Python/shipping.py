weight = 8.4
ground_shipping_price = 0
premium_ground_shipping_price = 125.00
drone_shipping_price = 0

#Price for Ground Shipping
print("Weight=", weight)
if weight <= 2:
  ground_shipping_price = weight * 1.50
elif weight <=6:
  ground_shipping_price = weight * 3.00
elif weight <=10:
  ground_shipping_price = weight * 4.00
else:
  ground_shipping_price = weight * 4.75

ground_shipping_price += 20

#Drone shipping
if weight <= 2:
  drone_shipping_price = weight * 4.50
elif weight <= 6:
  drone_shipping_price = weight * 9.00
elif weight <= 10:
  drone_shipping_price = weight * 12.00
else:
  drone_shipping_price = weight * 14.25

print("Ground shipping price: ",ground_shipping_price)
print("Premium Ground shipping price", premium_ground_shipping_price)
print("Drone shipping price:", drone_shipping_price)

print("---------------------------------")


weight = 4.8
print("Weight=", weight)
#Price for Ground Shipping
if weight <= 2:
  ground_shipping_price = weight * 1.50
elif weight <=6:
  ground_shipping_price = weight * 3.00
elif weight <=10:
  ground_shipping_price = weight * 4.00
else:
  ground_shipping_price = weight * 4.75

ground_shipping_price += 20

#Drone shipping
if weight <= 2:
  drone_shipping_price = weight * 4.50
elif weight <= 6:
  drone_shipping_price = weight * 9.00
elif weight <= 10:
  drone_shipping_price = weight * 12.00
else:
  drone_shipping_price = weight * 14.25
print("Ground shipping price: ",ground_shipping_price)
print("Premium Ground shipping price", premium_ground_shipping_price)
print("Drone shipping price:", drone_shipping_price)

print("---------------------------------")

weight = 41.5
print("Weight=", weight)
#Price for Ground Shipping
if weight <= 2:
  ground_shipping_price = weight * 1.50
elif weight <=6:
  ground_shipping_price = weight * 3.00
elif weight <=10:
  ground_shipping_price = weight * 4.00
else:
  ground_shipping_price = weight * 4.75

ground_shipping_price += 20

#Drone shipping
if weight <= 2:
  drone_shipping_price = weight * 4.50
elif weight <= 6:
  drone_shipping_price = weight * 9.00
elif weight <= 10:
  drone_shipping_price = weight * 12.00
else:
  drone_shipping_price = weight * 14.25
print("Ground shipping price: ",ground_shipping_price)
print("Premium Ground shipping price", premium_ground_shipping_price)
print("Drone shipping price:", drone_shipping_price)