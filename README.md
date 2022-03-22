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

#### When a admin login
![Screenshot (37)](https://user-images.githubusercontent.com/57585655/159477013-18a5b345-afc6-4e34-baeb-52f910a5f9dc.png)

### When a normal user login
![Screenshot (38)](https://user-images.githubusercontent.com/57585655/159477139-f264a7a1-d3d5-4f0c-9124-2763ca7c67b1.png)

## What if...
### User enters a wrong email id during login.
Error message will be shown saying email id is not regitered.
![Screenshot (39)](https://user-images.githubusercontent.com/57585655/159477251-20ced628-f491-445f-95bc-51b28c59c026.png)


### User enters wrong password during login.
Error message will be shoown saying wrong password.
![Screenshot (40)](https://user-images.githubusercontent.com/57585655/159477391-c3c92d95-9fc7-417c-bcac-75689e97f61d.png)

## Some validations

### Password Validation
Password should be of minimum length 8.Other wise a error will be show.

![Screenshot (34)](https://user-images.githubusercontent.com/57585655/159007290-b647478c-2588-40ac-8ff5-f11f4e126d58.png)

### Email Validation 
User Provide a valid email id.Other wise a error will be show.

![Screenshot (33)](https://user-images.githubusercontent.com/57585655/159007492-53fdc0ac-35f6-4763-a1a5-c995a825035e.png)
