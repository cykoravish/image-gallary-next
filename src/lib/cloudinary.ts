import { v2 as cloudinary } from 'cloudinary';

// (async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: 'dwuohu2i5', 
        api_key: '391318976836965', 
        api_secret: 'IlZu0FC-Gkp8pTYv6OR2Lx5ZVJ0' // Click 'View API Keys' above to copy your API secret
    });
    export default cloudinary;
    
//     // Upload an image
//      const uploadResult = await cloudinary.uploader
//        .upload(
//            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//                public_id: 'shoes',
//            }
//        )
//        .catch((error) => {
//            console.log(error);
//        });
    
//     console.log(uploadResult);
    
//     // Optimize delivery by resizing and applying auto-format and auto-quality
//     const optimizeUrl = cloudinary.url('shoes', {
//         fetch_format: 'auto',
//         quality: 'auto'
//     });
    
//     console.log(optimizeUrl);
    
//     // Transform the image: auto-crop to square aspect_ratio
//     const autoCropUrl = cloudinary.url('shoes', {
//         crop: 'auto',
//         gravity: 'auto',
//         width: 500,
//         height: 500,
//     });
    
//     console.log(autoCropUrl);    
// })();