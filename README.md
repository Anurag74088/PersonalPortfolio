# Professional Full-Stack Portfolio

A stunning, professional portfolio website built with HTML, CSS, JavaScript (frontend) and Node.js/Express (backend). This portfolio includes all modern features like contact form, resume download, social media links, and more.

## 🌟 Features

### Frontend Features
- ✨ **Modern & Responsive Design** - Works perfectly on all devices
- 🎨 **Beautiful UI/UX** - Gradient colors and smooth animations
- 📱 **Mobile-Friendly** - Hamburger menu for mobile devices
- 🎯 **Smooth Scrolling** - Navigate sections seamlessly
- 💼 **Projects Showcase** - Display your best work
- 🛠️ **Technical Skills** - Show your expertise with progress bars
- 📧 **Contact Form** - Let visitors reach out to you
- 📄 **Resume Download** - One-click resume download
- 🔗 **Social Media Integration** - Instagram, LinkedIn, GitHub links
- ⬆️ **Scroll to Top Button** - Easy navigation
- 🎭 **Animations** - Smooth reveal animations on scroll

### Backend Features
- 🚀 **Node.js & Express Server**
- 📬 **Contact Form API** - Handle form submissions
- 📥 **Resume Download API** - Serve resume file
- 💾 **Message Storage** - Store contact messages
- 📊 **Statistics Dashboard** - Track messages and stats
- 🔒 **Input Validation** - Secure form handling
- 🌐 **CORS Enabled** - Cross-origin resource sharing

## 📂 Project Structure

```
Portfolio/
│
├── index.html              # Main HTML file
├── package.json            # Node.js dependencies
├── README.md              # Documentation
│
├── css/
│   └── style.css          # All styling
│
├── js/
│   └── script.js          # Frontend JavaScript
│
├── server/
│   └── server.js          # Backend Node.js server
│
├── assets/
│   └── resume.pdf         # Your resume (add your own)
│
└── images/
    ├── about.jpg          # About section image
    ├── project1.jpg       # Project images
    ├── project2.jpg
    ├── project3.jpg
    ├── project4.jpg
    ├── project5.jpg
    └── project6.jpg
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. **Navigate to the project folder:**
   ```bash
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```
   
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   ```
   http://localhost:3000
   ```

## ⚙️ Configuration

### 1. Personal Information
Edit `index.html` and update:
- Your Name (line 44, 172, 332, etc.)
- Email: `yourname@gmail.com` → your actual email
- Phone: `+91 XXXXX XXXXX` → your actual phone number
- Location: Update city and state
- Social Media Links:
  - Instagram: `https://www.instagram.com/yourusername`
  - LinkedIn: `https://www.linkedin.com/in/yourusername`
  - GitHub: `https://github.com/yourusername`

### 2. Add Your Resume
1. Create an `assets` folder in the root directory:
   ```bash
   mkdir assets
   ```
2. Add your resume PDF file as `resume.pdf` in the `assets` folder

### 3. Add Images
1. Create an `images` folder in the root directory:
   ```bash
   mkdir images
   ```
2. Add your images:
   - `about.jpg` - Your photo for the About section
   - `project1.jpg` to `project6.jpg` - Screenshots of your projects

### 4. Customize Projects
Edit the projects section in `index.html` (starting around line 280):
- Update project titles
- Update project descriptions
- Update technology tags
- Add your project demo and GitHub links

### 5. Customize Skills
Edit the skills section in `index.html` (starting around line 185):
- Add/remove skills
- Update skill percentages
- Modify technology stack icons

## 🎨 Customization

### Colors
Edit CSS variables in `css/style.css` (lines 8-17):
```css
:root {
    --primary-color: #6c63ff;    /* Change primary color */
    --secondary-color: #ff6584;   /* Change secondary color */
    --dark-color: #1a1a2e;       /* Change dark color */
    /* ... other colors */
}
```

### Fonts
Update the font family in `css/style.css` (line 25):
```css
font-family: 'Your Font', sans-serif;
```

## 🔌 API Endpoints

### POST `/api/contact`
Submit contact form
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Hello",
  "message": "Your message here"
}
```

### GET `/api/download-resume`
Download resume file

### GET `/api/messages`
Get all contact messages (admin)

### GET `/api/messages/:id`
Get single message by ID

### DELETE `/api/messages/:id`
Delete message by ID

### GET `/api/stats`
Get statistics (total messages, unread, etc.)

### POST `/api/subscribe`
Newsletter subscription
```json
{
  "email": "user@example.com"
}
```

## 📱 Responsive Breakpoints

- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 To-Do After Setup

- [ ] Replace "Your Name" with your actual name
- [ ] Update email and phone number
- [ ] Add social media profile links
- [ ] Add your resume PDF to `assets/` folder
- [ ] Add your photos/images to `images/` folder
- [ ] Customize projects section with your actual projects
- [ ] Update skills based on your expertise
- [ ] Test contact form functionality
- [ ] Test resume download
- [ ] Customize colors to match your brand
- [ ] Add your profile picture
- [ ] Deploy to hosting service (Netlify, Vercel, Heroku, etc.)

## 🚀 Deployment

### Deploy Frontend (Netlify/Vercel)
1. Push code to GitHub
2. Connect to Netlify/Vercel
3. Deploy

### Deploy Backend (Heroku/Railway)
1. Create account on Heroku/Railway
2. Connect repository
3. Deploy backend
4. Update frontend API URLs to production backend URL

### Environment Variables
For production, add:
```
PORT=3000
NODE_ENV=production
```

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3 (with CSS Grid & Flexbox)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (optional)

### Backend
- Node.js
- Express.js
- CORS
- File System (fs)

## 💡 Tips

1. **Images:** Use optimized images (compress before uploading)
2. **SEO:** Update meta tags in HTML for better SEO
3. **Performance:** Enable caching on server
4. **Security:** Add rate limiting for production
5. **Analytics:** Add Google Analytics for tracking
6. **Email:** Integrate email service (SendGrid, Nodemailer) for contact form

## 📧 Contact Form Integration

To send actual emails when someone submits the contact form, integrate with:
- **Nodemailer** (SMTP)
- **SendGrid** (Email API)
- **EmailJS** (Client-side)
- **Formspree** (Third-party service)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT License - feel free to use this for your personal portfolio.

## 👤 Author

**Your Name**
- Website: http://yourwebsite.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from modern portfolio designs

---

**Made with ❤️ by a Full Stack Developer**

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue
- Contact via email: yourname@gmail.com
- Connect on LinkedIn

---

### Quick Start Commands

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Run in production mode
npm start

# Install nodemon globally (optional)
npm install -g nodemon
```

**Happy Coding! 🚀**
# AnuragPortfolio
