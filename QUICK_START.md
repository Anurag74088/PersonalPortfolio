# ⚡ Quick Start Guide

Get your portfolio running in 5 minutes!

## 🚀 Installation (3 Commands)

```bash
# 1. Navigate to project folder
cd Portfolio

# 2. Install dependencies
npm install

# 3. Start the server
npm start
```

## 🌐 Open Portfolio

Open your browser and visit:
```
http://localhost:3000
```

## ✅ First Steps Checklist

### 1️⃣ Update Your Information (5 minutes)
Open `index.html` and replace:
- ✏️ "Your Name" → Your actual name
- ✏️ "yourname@gmail.com" → Your email
- ✏️ "+91 XXXXX XXXXX" → Your phone number
- ✏️ "Your City, India" → Your location

### 2️⃣ Update Social Links (2 minutes)
Replace these URLs in `index.html`:
- 🔗 Instagram: `https://www.instagram.com/yourusername`
- 🔗 LinkedIn: `https://www.linkedin.com/in/yourusername`
- 🔗 GitHub: `https://github.com/yourusername`

### 3️⃣ Add Your Resume (1 minute)
1. Save your resume as `resume.pdf`
2. Put it in the `assets/` folder

### 4️⃣ Add Your Images (5 minutes)
Put these images in the `images/` folder:
- `about.jpg` - Your photo
- `project1.jpg` through `project6.jpg` - Project screenshots

*Don't have images yet?* The site will work with placeholders.

### 5️⃣ Customize Projects (10 minutes)
Edit the projects section in `index.html`:
- Update project names
- Update descriptions
- Update technology tags
- Add your demo and GitHub links

## 🎨 Optional Customization

### Change Colors
Edit `css/style.css` (lines 8-17):
```css
--primary-color: #6c63ff;    /* Change this */
--secondary-color: #ff6584;   /* And this */
```

### Change Skills
Edit the skills section in `index.html`:
- Add/remove skills
- Update percentages

## 📁 Project Structure

```
Portfolio/
├── index.html           ← Main website file
├── css/
│   └── style.css       ← All styling
├── js/
│   └── script.js       ← Frontend JavaScript
├── server/
│   └── server.js       ← Backend server
├── assets/
│   └── resume.pdf      ← Your resume (add this)
└── images/
    ├── about.jpg       ← Your photo (add this)
    └── project*.jpg    ← Project images (add these)
```

## 🧪 Test Your Portfolio

After customization, test these features:
- ✅ All navigation links work
- ✅ Contact form submits (check terminal/console)
- ✅ Resume downloads
- ✅ Social links open correctly
- ✅ Responsive on mobile (resize browser)

## 📱 View on Mobile

1. Find your computer's local IP:
   ```bash
   # On Mac/Linux
   ifconfig | grep "inet "
   
   # On Windows
   ipconfig
   ```

2. Open on your phone:
   ```
   http://YOUR_IP:3000
   ```
   Example: `http://192.168.1.5:3000`

## 🚀 Deploy Your Portfolio

### Easiest Option: Netlify (Free)
1. Create free account at [netlify.com](https://www.netlify.com)
2. Drag and drop your Portfolio folder
3. Done! You get a free URL like `your-name.netlify.app`

### With Backend: Railway (Free)
1. Create account at [railway.app](https://railway.app)
2. Deploy from GitHub
3. Your portfolio will be live!

## ❓ Common Issues

**Q: Port 3000 already in use?**
```bash
# Use different port - edit server.js line 8:
const PORT = 3001;  // Change to 3001 or any other port
```

**Q: Images not showing?**
- Check image files are in `images/` folder
- Check file names match exactly (case-sensitive)
- Restart the server

**Q: Resume download not working?**
- Add `resume.pdf` to `assets/` folder
- File name must be exactly `resume.pdf`
- Restart the server

## 📚 Full Documentation

Need more details? Check these files:
- `README.md` - Complete documentation
- `SETUP_GUIDE.md` - Detailed setup instructions

## 💡 Tips

1. **Start Simple:** Get it running first, customize later
2. **Test Often:** Check after each change
3. **Use Placeholders:** Don't wait for perfect images/content
4. **Ask for Help:** Check documentation if stuck

## 🎉 You're Ready!

Your portfolio is set up! Now customize it and share it with the world! 🚀

### Commands Reference:
```bash
npm start        # Start server (production)
npm run dev      # Start with auto-reload (development)
npm install      # Install dependencies
```

### Important URLs:
- Portfolio: http://localhost:3000
- Contact API: http://localhost:3000/api/contact
- Resume Download: http://localhost:3000/api/download-resume
- View Messages: http://localhost:3000/api/messages

---

**Need help?** Read the SETUP_GUIDE.md or README.md

**Happy Coding! 💻**
