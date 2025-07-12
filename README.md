# 🚀 Easypanel Simple App

A simple Node.js application demonstrating deployment with Easypanel. This application features a clean, modern frontend with the Easypanel tagline and a RESTful API backend.

## 🌟 Features

- **Modern Frontend**: Clean, responsive design with Easypanel branding
- **RESTful API**: Simple health check endpoint
- **Dockerized**: Ready for container deployment
- **Production Ready**: Includes security best practices

## 📋 Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)
- Docker (optional, for containerized deployment)

## 🛠️ Installation & Setup

### Method 1: Running Locally

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ep-simple-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Method 2: Running with Docker

1. **Build the Docker image**
   ```bash
   docker build -t ep-simple-app .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 ep-simple-app
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000`

## 🚀 Deployment with Easypanel

### Using Git Repository

1. **Connect your repository** to Easypanel
2. **Configure build settings**:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Port: `3000`

### Using Docker

1. **Build and push** your Docker image to a registry
2. **Deploy using Docker image** in Easypanel:
   - Image: `your-registry/ep-simple-app:latest`
   - Port: `3000`

## 📁 Project Structure

```
ep-simple-app/
├── public/
│   ├── index.html      # Main HTML file
│   ├── styles.css      # Styling
│   └── script.js       # Client-side JavaScript
├── server.js           # Express server
├── package.json        # Node.js dependencies
├── Dockerfile          # Docker configuration
├── .dockerignore       # Docker ignore patterns
└── README.md          # This file
```

## 🔗 API Endpoints

- **GET /** - Serves the main application
- **GET /api/health** - Health check endpoint
  ```json
  {
    "status": "ok",
    "message": "Easypanel Simple App is running!",
    "timestamp": "2024-01-01T12:00:00.000Z"
  }
  ```

## 🧪 Testing

Test the health endpoint:
```bash
curl http://localhost:3000/api/health
```

## 🔧 Configuration

### Environment Variables

- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment mode (default: development)

### Docker Configuration

The Dockerfile includes:
- Multi-stage build optimization
- Non-root user for security
- Health checks for monitoring
- Production-ready configuration

## 🎨 Customization

### Styling
Edit `public/styles.css` to customize the appearance.

### Content
Modify `public/index.html` to change the content and layout.

### API
Add new endpoints in `server.js` to extend functionality.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For questions about deployment with Easypanel:
- Visit [Easypanel Documentation](https://easypanel.io/docs)
- Contact Easypanel support

---

**Made with ❤️ for Easypanel deployment tutorials** # ep-simple-app
