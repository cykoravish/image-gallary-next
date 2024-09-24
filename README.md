# Image Gallery Website

This project is an image gallery built using **Next.js** with **TypeScript**, integrating **Cloudinary** for image storage and **MongoDB** for storing image URLs. Users can upload images, and the image file is stored on Cloudinary while the URL is saved in MongoDB, allowing for efficient management and retrieval of images.

## Features

- **Image Upload**: Users can upload images directly from the interface.
- **Cloudinary Storage**: Uploaded images are stored in Cloudinary, an image hosting service that provides powerful image transformation and delivery options.
- **MongoDB**: The URL of each uploaded image is stored in a MongoDB database.
- **TypeScript**: The project is written in TypeScript, ensuring type safety and better developer experience.
- **Next.js**: The project uses the Next.js framework, which provides server-side rendering, API routes, and a powerful development experience.

## Technologies Used

- **Next.js**: React-based framework with built-in server-side rendering and API routes.
- **TypeScript**: Static type checking for better code quality and fewer runtime errors.
- **Cloudinary**: Image hosting and transformation service.
- **MongoDB**: NoSQL database used for storing image URLs.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

2. **Install dependencies**:
   npm install

3. **Set up environment variables**:
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   MONGODB_URI=your_mongodb_connection_string

4. **Run the development server**:
   npm run dev


## This update ensures that users create an `.env.local` file to store their environment variables, following best practices.
 
