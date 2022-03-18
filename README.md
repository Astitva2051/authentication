# authentication

## APIs

### API for Register/Signup
http://localhost:3000/register
User need to provide email,password,name,birthdate and mobile no. in the body of the request to register.
Upon successful registration a success message will be displayed. See the below photo for clear understanding.

![Screenshot (31)](https://user-images.githubusercontent.com/57585655/159006147-a43a0a19-df65-4a57-bdb6-938f95a07aa9.png)

### API for Login
http://localhost:3000/login
User need to provide email,password in the body of the request to login.
Upon successful login a success message will be displayed. See the below photo for clear understanding.

![Screenshot (32)](https://user-images.githubusercontent.com/57585655/159006626-aa39fd0b-4642-49f9-ae81-13da8f7b5e4d.png)

## What if...
### User enters a wrong email id during login.
Error message will be shown saying email id is not regitered.
![Screenshot (36)](https://user-images.githubusercontent.com/57585655/159007882-74e626e0-3a36-4f75-abf8-294ea1d3d9b0.png)

### User enters wrong password during login.
Error message will be shoown saying wrong password.
![Screenshot (35)](https://user-images.githubusercontent.com/57585655/159008057-66ef6285-2252-4ed6-a7ca-49a1cfb8a768.png)

## Some validations

### Password Validation
Password should be of minimum length 8.Other wise a error will be show.

![Screenshot (34)](https://user-images.githubusercontent.com/57585655/159007290-b647478c-2588-40ac-8ff5-f11f4e126d58.png)

### Email Validation 
User Provide a valid email id.Other wise a error will be show.

![Screenshot (33)](https://user-images.githubusercontent.com/57585655/159007492-53fdc0ac-35f6-4763-a1a5-c995a825035e.png)
