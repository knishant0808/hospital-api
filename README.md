# Hospital API - COVID-19 Management System

This project includes creating a server-side API for a hospital to manage COVID-19 patients. It's built using Node.js and MongoDB, focusing on funcationalities for doctors and patients, specifically in the context of COVID-19 pandemic.

## Features

- Doctor
    1. Authentication: Doctors can register and log in
    2. Patient Management: Register new patients and retrieve existing patient information
    3. Report Generation: Create reports post checkups with status updates.
- Patient
    1. Registration: Handled by doctors using patient's phone number.
- Reports
    1. Contain patient status with different categories.
    2. Include date and doctor's details.

## Installation

1. Clone the repository: `git clone https://github.com/knishant0808/hospital-api`
2. Navigate to the Project Directory: `cd hospital-api`
3. Install the dependencies: `npm install`
4. Start the application: `npm start`

## Usage

1. Doctor Registration and Login:
    - Register as a doctor using the `/doctor/register` endpoint.
    - Log in with the `/doctor/login` endpoint to access patient management features
2. Patient Registration:
    - Register patient using `/patient/register` by providing their phone number. If the patient already exists, their details will be returned.
3. Patient Reports:
    - Create a patient report after each checkup using `/patient/:id/create_report`.
4. Listing Reports:
    - List all reports of a patient using `/patient/:id/all_reports`.
    - Retrieve all reports filtered based on the COVID-19 status using `/report/:status`.

## Contributing

Contributions are welcome! If you have any ideas or suggestions, please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch `git checkout -b feature-branch`.
3. Make your changes and commit them `git commit -am 'Add some feature'`.
4. Push to the branch `git push origin feature-branch`.
4. Create a new Pull Request.
 
