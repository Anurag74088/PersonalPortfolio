# 🚀 Portfolio Setup Guide

Follow these steps to set up and customize your portfolio.

## 📋 Step-by-Step Setup

### Step 1: Install Node.js
1. Download Node.js from [nodejs.org](https://nodejs.org/)
2. Install Node.js (includes npm)
3. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Install Dependencies
```bash
cd Portfolio
npm install
```

This will install:
- Express.js (backend framework)
- CORS (for API access)
- Nodemon (for development)

### Step 3: Customize Your Information

#### 3.1 Update Personal Details in `index.html`

Search and replace the following:

**Your Name:**
```html
Line 44: <h1>Hi, I'm <span class="highlight">Your Name</span></h1>
```
Replace `Your Name` with your actual name.

**Email:**
Search for: `yourname@gmail.com`
Replace with: your actual email

**Phone Number:**
Search for: `+91 XXXXX XXXXX`
Replace with: your actual phone number

**Location:**
Search for: `Your City, India`
Replace with: your actual location

#### 3.2 Update Social Media Links

**Instagram:**
```html
https://www.instagram.com/yourusername
```
Replace `yourusername` with your Instagram handle

**LinkedIn:**
```html
https://www.linkedin.com/in/yourusername
```
Replace with your LinkedIn profile URL

**GitHub:**
```html
https://github.com/yourusername
```
Replace with your GitHub username

### Step 4: Add Your Images

#### 4.1 Profile/About Image
1. Add your professional photo as `images/about.jpg`
2. Recommended size: 800x1000px
3. Keep file size under 500KB

#### 4.2 Project Images
Add screenshots of your projects:
- `images/project1.jpg` - Project 1 screenshot
- `images/project2.jpg` - Project 2 screenshot
- `images/project3.jpg` - Project 3 screenshot
- `images/project4.jpg` - Project 4 screenshot
- `images/project5.jpg` - Project 5 screenshot
- `images/project6.jpg` - Project 6 screenshot

**Temporary Placeholders:**
You can use free stock photos from:
- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)
- Or use placeholder URLs: `https://picsum.photos/1200/800`

### Step 5: Add Your Resume

1. Create your resume in PDF format
2. Name it exactly: `resume.pdf`
3. Place it in the `assets/` folder
4. File path should be: `assets/resume.pdf`

**Resume Tips:**
- Keep it 1-2 pages
- Use professional format
- Include contact info, skills, experience, projects
- Proofread carefully

### Step 6: Customize Projects Section

Edit the projects in `index.html` (starting around line 280):

For each project, update:
1. **Project title** (e.g., "E-Commerce Platform")
2. **Project description**
3. **Technology tags** (React, Node.js, etc.)
4. **Demo link** (replace `#` with actual URL)
5. **GitHub link** (replace `#` with GitHub repo URL)

Example:
```html
<div class="project-card">
    <div class="project-image">
        <img src="images/project1.jpg" alt="Your Project Name">
        <div class="project-overlay">
            <div class="project-links">
                <a href="https://your-demo-link.com" class="project-link" title="View Demo">
                    <i class="fas fa-eye"></i>
                </a>
                <a href="https://github.com/yourusername/project" class="project-link" title="View Code">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-info">
        <h3>Your Project Name</h3>
        <p>Description of your project...</p>
        <div class="project-tech">
            <span class="tech-tag">HTML</span>
            <span class="tech-tag">CSS</span>
            <span class="tech-tag">JavaScript</span>
        </div>
    </div>
</div>
```

### Step 7: Customize Skills Section

Edit skills in `index.html` (starting around line 185):

1. **Add/Remove Skills:**
   ```html
   <div class="skill-item">
       <div class="skill-header">
           <span class="skill-name">Your Skill</span>
           <span class="skill-percentage">85%</span>
       </div>
       <div class="skill-bar">
           <div class="skill-progress" style="width: 85%"></div>
       </div>
   </div>
   ```

2. **Update skill percentages** based on your proficiency
3. **Add/remove tech stack icons** at the bottom of skills section

### Step 8: Customize Colors (Optional)

Edit `css/style.css` (lines 8-17):

```css
:root {
    --primary-color: #6c63ff;      /* Main brand color */
    --secondary-color: #ff6584;     /* Accent color */
    --dark-color: #1a1a2e;         /* Dark backgrounds */
    --light-color: #f8f9fa;        /* Light backgrounds */
    --text-color: #333;            /* Main text */
    --text-light: #666;            /* Secondary text */
}
```

Change these hex codes to your preferred colors.

### Step 9: Test Locally

1. **Start the server:**
   ```bash
   npm start
   ```

2. **Open your browser:**
   ```
   http://localhost:3000
   ```

3. **Test all features:**
   - ✅ Navigation links work
   - ✅ All sections display correctly
   - ✅ Contact form submits (check console)
   - ✅ Resume downloads successfully
   - ✅ Social media links work
   - ✅ Mobile responsive (resize browser)
   - ✅ Smooth scrolling works
   - ✅ All images load

### Step 10: Deploy Your Portfolio

#### Option A: Deploy Frontend (Netlify - Free)
1. Create account on [Netlify](https://www.netlify.com/)
2. Connect your GitHub repository
3. Build command: Leave empty (static site)
4. Publish directory: `/` (root)
5. Deploy!

#### Option B: Deploy Full-Stack (Railway/Render - Free)
1. Create account on [Railway](https://railway.app/) or [Render](https://render.com/)
2. Connect GitHub repository
3. Set start command: `npm start`
4. Set environment variables if needed
5. Deploy!

#### Option C: Deploy Backend Separately
1. Frontend → Netlify/Vercel
2. Backend → Heroku/Railway/Render
3. Update API URLs in `js/script.js`:
   ```javascript
   const API_URL = 'https://your-backend-url.com/api';
   ```

### Step 11: Final Checklist

- [ ] All personal information updated
- [ ] Email and phone number correct
- [ ] Social media links working
- [ ] All images added and optimized
- [ ] Resume PDF added to assets folder
- [ ] Projects section customized with your projects
- [ ] Skills updated to match your expertise
- [ ] Colors customized (optional)
- [ ] Tested contact form locally
- [ ] Tested resume download
- [ ] Tested on mobile devices
- [ ] All links working
- [ ] No console errors
- [ ] Deployed to hosting service

## 🎨 Customization Ideas

### Change Hero Section Background
Edit `css/style.css` (line 188):
```css
.hero {
    background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%);
}
```

### Add Your Photo to Hero Section
Replace the placeholder `.profile-pic` div with:
```html
<div class="profile-pic">
    <img src="images/profile.jpg" alt="Your Name">
</div>
```

And update CSS to remove the pseudo-element.

### Add More Sections
You can add sections like:
- Blog
- Testimonials
- Experience Timeline
- Education
- Certifications
- Awards

## 🐛 Troubleshooting

### Issue: Resume download not working
**Solution:** 
- Ensure `resume.pdf` exists in `assets/` folder
- Check file name is exactly `resume.pdf` (case-sensitive)
- Restart the server after adding the file

### Issue: Images not showing
**Solution:**
- Check image paths are correct
- Ensure images are in `images/` folder
- Check image file extensions match HTML (jpg, png, etc.)
- Clear browser cache

### Issue: Contact form not working
**Solution:**
- Make sure server is running (`npm start`)
- Check browser console for errors
- Verify API URL is correct (`http://localhost:3000/api/contact`)
- Check CORS is enabled in `server.js`

### Issue: Port already in use
**Solution:**
- Change port in `server.js`: 
  ```javascript
  const PORT = 3001; // Change to different port
  ```
- Or kill the process using port 3000

### Issue: npm install fails
**Solution:**
- Update Node.js to latest version
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Try `npm install --force` if needed

## 📞 Need Help?

If you encounter any issues:
1. Check the README.md file
2. Review the code comments
3. Check browser console for errors
4. Verify all file paths are correct

## 🎉 You're Done!

Congratulations! Your portfolio is now ready. Share it with the world! 🚀

### Share Your Portfolio:
- Add to LinkedIn profile
- Share on social media
- Include in job applications
- Add to email signature
- Submit to portfolio galleries

**Good luck with your career! 💼**
