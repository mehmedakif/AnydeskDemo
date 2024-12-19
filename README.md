# Anydesk Demo Project

This repository contains a demo project with two components:
- **Backend**: A Spring Boot application.
- **Frontend**: A Next.js application.

## Prerequisites

Ensure you have the following installed on your system:

### General:
- [Git](https://git-scm.com/)

### Backend:
- [Java JDK 17](https://jdk.java.net/17/)
- [Maven](https://maven.apache.org/)

### Frontend:
- [Node.js (LTS version)](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Clone the Repository

To clone this repository, run:
```bash
git clone <repository-url>
cd anydesk-demo
```

## Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Build the application using Maven:
   ```bash
   mvn clean install
   ```
3. Run the application:
   ```bash
   mvn spring-boot:run
   ```
4. The backend will be available at [http://localhost:8080](http://localhost:8080).

## Frontend Setup

1. Navigate to the `anydesk-demo-frontend` directory:
   ```bash
   cd ../anydesk-demo-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   or if you're using Yarn:
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   or with Yarn:
   ```bash
   yarn dev
   ```
4. The frontend will be available at [http://localhost:3000](http://localhost:3000).

## Running Both Simultaneously

To run both the backend and frontend simultaneously:

1. Open two terminal windows or tabs.
2. In the first terminal, start the backend:
   ```bash
   cd backend
   mvn spring-boot:run
   ```
3. In the second terminal, start the frontend:
   ```bash
   cd anydesk-demo-frontend
   npm run dev
   ```

## Additional Notes

- Make sure the backend service is running before using the frontend to avoid API errors.
- You can modify the backend and frontend configurations (like ports) if needed in their respective configuration files.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

If you encounter any issues, feel free to open an issue or contact the maintainers.

