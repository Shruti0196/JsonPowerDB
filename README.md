# Student Enrollment Form
The platform is a Student registration platform. The user can enter the details of the student by filling fields like Roll Number, Full Name, Class, Birth Date, Address, Enrollment Date. The form has three control buttons which are Save,Update and Reset. Initially, all the fields and buttons except the Roll Number field are disabled. On loading the page or clicking any of the control buttons, all the fields are disabled except Roll Number. The user first enters the Roll Number.If Roll number does not exist in the database then all the fields including save and reset button are activated.The record is saved after validating the data. If the Roll number exists in the database, then all the data gets autofilled in their resective fields.The Roll Number and Save field are disabled. All other fields including chamge and reset button are enabled to update the record.The record is updated after validating the data.
## Benefits of using JSONPowerDB:
- JsonPowerDB is lightweight database, so it can be used with various large applications with ease. 
- It is a non relational database because of which predefined schema need not be created. 
- Since it is a non relational database, it is scalable.
- It is easy to use and hence even the budding programmers can use it without complexity. 
## Release History:
- 0.0.1
   - Complete student registration platform
   
## Walkthrough of the project:
**Default page:**

![image](https://user-images.githubusercontent.com/80119277/217292065-7fe3a5f9-0e38-414b-ae56-6a50192388e7.png)

**Initial database is empty**

**If the Roll Number does not exist in the database:**

![image](https://user-images.githubusercontent.com/80119277/217293068-d7919cdf-43ab-4d76-834b-2e8015ce6429.png)

**On trying to save invalid data:**

![image](https://user-images.githubusercontent.com/80119277/217293740-dc413d57-fc6f-4a54-b492-74a0a0034153.png)
![image](https://user-images.githubusercontent.com/80119277/217295752-423b84c6-03db-4ac1-8e91-4f0a29479546.png)

**Saving valid data:**

![image](https://user-images.githubusercontent.com/80119277/217295999-53ce2138-531a-4aec-a15a-4901c66e99e3.png)
![image](https://user-images.githubusercontent.com/80119277/217296263-96053b8f-559d-47f6-8c91-72ee58fbe24c.png)

**If the Roll Number exist in database:**

![image](https://user-images.githubusercontent.com/80119277/217296539-cd26215e-c143-47ef-b600-587113994192.png)

**On trying to update with invalid data:**

![image](https://user-images.githubusercontent.com/80119277/217296722-33eada7d-a42b-46d1-bdfe-7050764434cd.png)
![image](https://user-images.githubusercontent.com/80119277/217300389-1397e820-39b5-4eff-8fd5-bda5c2ee16b7.png)

**Updating valid data:**

![image](https://user-images.githubusercontent.com/80119277/217297586-d4c15b78-a1b9-48e3-96ae-8909b6faeb77.png)
![image](https://user-images.githubusercontent.com/80119277/217297859-daa1b57c-4196-48fa-862c-bde3b9b531d7.png)

**On clicking reset:**

**Before:**

![image](https://user-images.githubusercontent.com/80119277/217298077-4152e861-5d13-49e8-8376-e593ec2820a6.png)

**After:**

![image](https://user-images.githubusercontent.com/80119277/217298182-10caf5d7-97c5-4fa1-9182-29f2b7afc1be.png)

