
---![FitAbs Banner](https://i.imgur.com/your-fitabs-banner-image.png) # 🔥 FitAbs - Fitness Tracking & Workout Analysis Application 🔥

**Your Ultimate AI-Powered Fitness Companion**
🏋️‍♀️ Track Workouts | 🧠 Analyze Form | 🚀 Elevate Your Journey

[//]: # (Below are example badges. Replace with your actual badge URLs and links.)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)](YOUR_BUILD_URL)
[![Framework](https://img.shields.io/badge/Framework-Flask-000000.svg)](https://flask.palletsprojects.com/)
[![Database](https://img.shields.io/badge/Database-SQLite-003B57.svg)](https://www.sqlite.org/index.html)
[![Computer Vision](https://img.shields.io/badge/CV-OpenCV%20%7C%20MediaPipe-FF4500.svg)](https://opencv.org/)
[![Python](https://img.shields.io/badge/Python-3.7%2B-3776AB.svg)](https://www.python.org/)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-blueviolet.svg)](CONTRIBUTING.md)

---

## 💡 About FitAbs 🚀

FitAbs is a comprehensive web application built with Flask that empowers users to meticulously track their workouts, analyze exercise form with cutting-edge computer vision, and proactively manage their fitness journey. Get ready for a smarter way to train and achieve your goals\! 💪

Our application boasts an array of powerful features:
- 🏋️‍♂️ **Real-time Pose Detection**: Get instant feedback on your exercise form.
- 📊 **Workout Tracking**: Log and monitor every aspect of your training.
- 📄 **PDF Report Generation**: Visualize your progress with detailed reports.
- 📱 **User Profile Management**: Your personalized fitness hub.
- 🗺️ **Nearby Gym Locator**: Find the perfect workout spot anytime, anywhere.
- 📈 **Statistics & Analytics**: Dive deep into your performance data.
- 🔐 **Secure Authentication**: Your fitness data is safe and private.
- 📸 **Profile Picture Upload**: Personalize your FitAbs experience.

## 🛠️ Prerequisites: What You'll Need to Get Started 🛠️

To embark on your FitAbs development journey, ensure you have these essentials:

- 🐍 **Python 3.7+**: The robust foundation of our backend.
- 👁️ **OpenCV**: The powerhouse for all computer vision operations.
- 🌐 **Flask**: Our elegant and efficient web framework.
- 🗄️ **SQLite3**: The lightweight, file-based database.
- 🧘 **Mediapipe**: For advanced and accurate pose detection.
- 💻 **Modern Web Browser**: Must support WebRTC for real-time video streams.

## 🚀 Installation: Get FitAbs Up and Running\! 🚀

Follow these straightforward steps to set up FitAbs locally:

1.  **Clone the repository**:

    ```bash
    git clone [repository-url]
    cd fittab-new
    ```

2.  **Create and activate a virtual environment** (recommended for dependency management):

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3.  **Install the required dependencies**:

    ```bash
    pip install -r requirements.txt
    ```

4.  **Initialize the database**:

    ```bash
    flask db upgrade
    ```

## 📂 Project Structure: A Glimpse Inside FitAbs 📂

Our project is thoughtfully organized for clarity and maintainability:

fittab-new/
├── app.py                  # 🏃‍♀️ The core Flask application file.
├── helper.py               # 🔧 Collection of reusable helper functions.
├── dumbel_curl_script.py   # 🧠 The brain behind the pose detection logic.
├── requirements.txt        # 📦 Lists all Python dependencies.
├── static/                 # 🖼️ Contains CSS, JavaScript, and images for the frontend.
├── templates/              # 🎨 HTML templates for rendering web pages.
├── migrations/             # 🔄 Database migration scripts.
└── instance/               # ⚙️ Instance-specific configuration and files.


## ⚙️ Configuration: Tailoring Your FitAbs Experience ⚙️

Key configuration settings are managed in `app.py`:

-   `SQLALCHEMY_DATABASE_URI`: 🗄️ Path to the SQLite database file.
-   `SECRET_KEY`: 🔑 A critical secret key for session security. **Change this for production\!**
-   `UPLOAD_FOLDER`: 📁 Directory where user-uploaded files are stored.
-   `MAX_CONTENT_LENGTH`: 📏 Maximum allowed size for file uploads (e.g., 16MB).
-   `SESSION_COOKIE_HTTPONLY`: 🔒 Improves security by preventing client-side script access to session cookies.
-   `SESSION_COOKIE_SECURE`: 🌐 Ensures session cookies are only transmitted over HTTPS.

## ▶️ Running the Application: Start Your Fitness Journey\! ▶️

Let's fire up FitAbs and begin tracking\!

1.  **Start the Flask development server**:

    ```bash
    python app.py
    ```

2.  **Access the application at**: `http://localhost:5001` 🌐

## 🏗️ Technical Architecture: The Engine Behind FitAbs 🏗️

### Backend Architecture 💻

-   **Flask Framework**: 🌐 The core web framework, meticulously handling routing and request processing.
-   **SQLAlchemy ORM**: 🗄️ Our powerful database abstraction layer for seamless user and workout data management.
-   **Flask-Migrate**: 🔄 Effortless database migration management to keep your schema up-to-date.
-   **Flask-SocketIO**: 💬 Enables real-time, bi-directional communication for smooth video streaming and interactive features.
-   **Werkzeug**: 🔐 The indispensable WSGI web application library, providing security and essential utilities.

### Frontend Components ✨

-   **HTML5/CSS3**: 🎨 Crafted for a modern, responsive, and aesthetically pleasing user interface.
-   **JavaScript**: ⚡ Powers client-side interactivity and robust WebSocket communication.
-   **WebRTC**: 🎥 Facilitates real-time video streaming directly in your browser.
-   **Canvas API**: 🖌️ Used for real-time drawing and visualization of pose detection results on screen.

### Computer Vision Pipeline 👁️‍🗨️

-   **OpenCV**: 📸 The go-to library for intricate image processing and frame manipulation.
-   **MediaPipe**: 🧘 Leveraged for its advanced pose detection and precise landmark tracking capabilities.
-   **NumPy**: ➕ Essential for high-performance mathematical computations required for sophisticated pose analysis.

## 🌟 Detailed Features: Dive Deeper Into FitAbs 🌟

### 1. Pose Detection System 🤸‍♂️

The application utilizes a sophisticated pose detection system, meticulously implemented in `dumbel_curl_script.py`. It's your personal AI coach\!

| Feature | Description |
| :------ | :---------- |
| **Real-time Landmark Detection** | Tracks 33 precise body points, ensuring comprehensive form analysis. |
| **Angle Calculation Between Joints** | Scientifically calculates joint angles to provide accurate form feedback. |
| **Rep Counting Based on Angle Thresholds** | Smartly counts your reps, adjusting for proper range of motion. |
| **Visual Feedback with On-screen Metrics** | Get instant visual cues and metrics to perfect your movements. |
| **Customizable Detection Confidence Thresholds** | Fine-tune the sensitivity to match your specific exercise needs. |

### 2. User Management System 👤

A truly comprehensive system for managing your personal fitness journey.

| Feature | Description |
| :------ | :---------- |
| **Registration** | Email validation, secure password hashing, profile picture upload with size validation, basic fitness metrics collection. |
| **Profile Management** | Height, weight, and age tracking, progress photo management, workout history visualization, personal records tracking. |

### 3. Workout Tracking System 📝

Detailed logging and intelligent analysis to supercharge your workouts.

| Feature | Description |
| :------ | :---------- |
| **Exercise Logging** | Set-by-set tracking, weight and rep recording, rest time monitoring, form quality notes. |
| **Progress Tracking** | Weight progression graphs, volume calculations, personal records tracking, performance analytics. |

### 4. Report Generation 📈📄

Sophisticated and professional PDF report generation powered by ReportLab.

| Feature | Description |
| :------ | :---------- |
| **Workout Summaries** | Exercise breakdown, set and rep analysis, weight progression, form improvement notes. |
| **Progress Reports** | Monthly/weekly summaries, performance metrics, goal tracking, comparison charts. |

## 🧑‍💻 Development Setup: For Contributors & Developers 🧑‍💻

Want to contribute or run this project in a development environment? Here's how:

### Environment Setup 🌍

1.  **System Requirements**: Ensure your system has the necessary build tools.

    ```bash
    # Ubuntu/Debian
    sudo apt-get update
    sudo apt-get install python3-pip python3-venv libsqlite3-dev python3-opencv
    ```

2.  **Python Virtual Environment**: Set up your isolated Python environment.

    ```bash
    python3 -m venv venv
    source venv/bin/activate
    pip install --upgrade pip
    ```

3.  **Install Dependencies**: Get all the required Python packages.

    ```bash
    pip install -r requirements.txt
    ```

### Database Setup 🗄️

1.  **Initialize the database**:

    ```bash
    flask db init
    ```

2.  **Create and apply migrations**:

    ```bash
    flask db migrate -m "Initial migration"
    flask db upgrade
    ```

### Configuration 🔑

1.  **Environment Variables**: Set these for proper application function.

    ```bash
    export FLASK_APP=app.py
    export FLASK_ENV=development
    export SECRET_KEY=your_secret_key # ⚠️ CHANGE THIS IN PRODUCTION ⚠️
    ```

2.  **Application Configuration**: Example of settings within `config.py` (or directly in `app.py`).

    ```python
    # config.py (or similar configuration section)
    class Config:
        SQLALCHEMY_TRACK_MODIFICATIONS = False
        SQLALCHEMY_DATABASE_URI = 'sqlite:///users.sqlite3'
        MAX_CONTENT_LENGTH = 16 * 1024 * 1024  # 16MB max file size
        UPLOAD_FOLDER = 'static/uploads'
    ```

## 📄 API Documentation: For Integrations & Advanced Use 📄

FitAbs provides a clear API for interacting with its features.

### Authentication Endpoints 🔐

  * `POST /login`: User authentication
    ```json
    {
      "email": "user@example.com",
      "password": "secure_password"
    }
    ```
  * `POST /register`: New user registration
    ```json
    {
      "name": "John Doe",
      "email": "user@example.com",
      "password": "secure_password",
      "age": 25,
      "height": 175,
      "weight": 70
    }
    ```

### Workout Endpoints 🏋️‍♂️

  * `POST /workouts`: Log new workout.
  * `GET /workouts`: Retrieve workout history.
  * `GET /workouts/download`: Download workout data.
  * `GET /workouts/report`: Generate PDF report.

### Profile Endpoints 👤

  * `GET /profile`: Get user profile.
  * `PUT /profile`: Update user information.
  * `POST /profile/picture`: Upload profile picture.

## ⚡ Performance Optimization: Keeping FitAbs Fast & Fluid ⚡

We've implemented several strategies to ensure FitAbs runs smoothly and efficiently.

| Area | Optimization Strategies |
| :--- | :---------------------- |
| **Video Processing** | Frame rate optimization, resolution scaling, parallel processing for pose detection, memory management for video streams. |
| **Database Optimization** | Indexed queries, efficient relationship mapping, lazy loading of related data, connection pooling. |
| **Caching Strategy** | Static asset caching, session data caching, database query results caching, API response caching. |

## 🔒 Security Measures: Protecting Your Fitness Journey 🔒

Security is paramount. FitAbs incorporates robust measures to safeguard your data and privacy.

| Area | Security Measures Implemented |
| :--- | :---------------------------- |
| **Authentication Security** | Bcrypt password hashing, secure session management, CSRF protection, rate limiting. |
| **Data Security** | Input validation, SQL injection prevention, XSS protection, file upload validation. |
| **Network Security** | HTTPS enforcement, secure WebSocket connections, header security, cookie security. |


Support 🆘
For further support, please:

Check the existing issues in the repository.

Create a new issue with detailed information about your problem, including relevant error messages and screenshots.

🙏 Acknowledgments 🙏
A big thank you to the tools and communities that make FitAbs possible:

OpenCV for its invaluable computer vision capabilities.

MediaPipe for cutting-edge pose detection.

The Flask community for creating an excellent web framework.

All contributors who help improve this project
