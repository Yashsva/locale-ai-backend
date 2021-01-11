# Locale AI Backend Task
The task is completed using NodeJS with Express framework and MVC design pattern.
#### The project is hosted on heroku <a href="https://localeai-backend-task.herokuapp.com" target="_blank">here</a> but there are some issues, one can use POSTMAN with all functions working properly. 
## Task Statement:
 XRides, delivers about a 200 rides per minute or 288,000 rides per day. Now, they want to send this data to your system via an API. Your task is to create this API and save the data into PostgreSQL. The API should be designed, keeping in mind the real-time streaming nature of data and the burst of requests at peak times of the day. The user of this API expects an acknowledgment that the data is accepted and a way to track if the request fails.
## Data description:
● id - booking ID<br/>
● user_id - the ID of the customer (based on mobile number)<br/>
● vehicle_model_id - vehicle model type.<br/>
● package_id - type of package (1=4hrs & 40kms, 2=8hrs & 80kms, 3=6hrs & 60kms, 4= 10hrs
& 100kms, 5=5hrs & 50kms, 6=3hrs & 30kms, 7=12hrs & 120kms)<br/>
● travel_type_id - type of travel (1=long distance, 2= point to point, 3= hourly rental).<br/>
● from_area_id - unique identifier of area. Applicable only for point-to-point travel and
packages<br/>
● to_area_id - unique identifier of area. Applicable only for point-to-point travel<br/>
● from_city_id - unique identifier of city<br/>
● to_city_id - unique identifier of city (only for intercity)<br/>
● from_date - time stamp of requested trip start<br/>
● to_date - time stamp of trip end<br/>
● online_booking - if booking was done on desktop website<br/>
● mobile_site_booking - if booking was done on mobile website<br/>
● booking_created - time stamp of booking<br/>
● from_lat - latitude of from area<br/>
● from_long - longitude of from area<br/>
● to_lat - latitude of to area<br/>
● to_long - longitude of to area<br/>
● Car_Cancellation - whether the booking was cancelled (1) or not (0) due to unavailability of a
car.<br/>
## Installation
#### Pre-Installation, following should be installed
1. Node.JS
2. PostgreSQL
3. Postman
#### 1. Get project in PC.(<a href="https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository" target="_blank">link</a>)
```
git clone https://github.com/Yashsva/locale-ai-backend.git
```
#### 2. Install all dependencies.
```
npm install
```
#### 3. Create a .env file with all its contents same as .env_sample file and add the PostgreSQL URI to ```POSTGRESQL_URI``` field.
#### 4. Run the project
```
npm start
```
#### 5. We are good to go, can start sending requests on ```http://localhost:3500/book/add_booking_detail``` .


## Snapshots
### Database design

#### 1. Booking table
<img src="https://user-images.githubusercontent.com/47325436/104216450-158ba900-5460-11eb-945e-05fc4440f436.png"></img>

#### 2. Package_types table
<img src="https://user-images.githubusercontent.com/47325436/104216604-479d0b00-5460-11eb-93b4-cadc62f2616d.png"></img>

#### 3. Travel_types table
<img src="https://user-images.githubusercontent.com/47325436/104216665-5b487180-5460-11eb-84a3-ab5eca4de527.png"></img>

---
### Request
<img src="https://user-images.githubusercontent.com/47325436/104218520-df035d80-5462-11eb-8b6b-99d584e8b8b0.png"></img>
### Response
<img src="https://user-images.githubusercontent.com/47325436/104218724-27bb1680-5463-11eb-818e-b87be76c868d.png"></img>

---
### Invalid Input Request
<img src="https://user-images.githubusercontent.com/47325436/104219046-9ac48d00-5463-11eb-8557-e9a1ac7d65dd.png"></img>
### Invalid Input Response
<img src="https://user-images.githubusercontent.com/47325436/104219205-d65f5700-5463-11eb-9b21-cd3a8a29632f.png"></img>

---
### Duplicate Value For Unique Field Request
<img src="https://user-images.githubusercontent.com/47325436/104219736-82a13d80-5464-11eb-9689-66ef16e8271c.png"></img>
### Duplicate Value For Unique Field Response
<img src="https://user-images.githubusercontent.com/47325436/104219783-92b91d00-5464-11eb-8e37-d0b21a8a8e44.png"></img>
