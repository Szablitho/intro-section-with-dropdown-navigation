# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshots

![Desktop screen preview](127.0.0.1_5500.png)
![Mobile screen preview](127.0.0.1_5500_%20(1).png)
![Mobile screen preview with menu expanded](127.0.0.1_5500_%20(2).png)


### Links

- Code solution URL: [Code solution](https://github.com/Szablitho/intro-section-with-dropdown-navigation)
- Live Site URL: [GitHub Live Page](https://szablitho.github.io/intro-section-with-dropdown-navigation/)

## My process
I started off with initial code, design pictures and icons from FrontEnd Mentor. I firstly built HTML, you can see it in my commits. Later just slighly adjusted it for styling needs. I've met multiple challenges as for example, login/register buttons appear in two places in HTML. So I made two of them even though they do the same thing. Biggest challenge was to make one navigation but style in twice for 2 screen sizes. Plus in PC, sub-menu is absolute and because of overflow: scrool in small screen I was locked for full day because absolute positioning was locked within nav container.
I've made all the styling in mobile-first prinicple.
Main content is relatively easy to style. I used picture tag that apparently work only with max-width media query within. 
Then, in JS functions handle opening menu and dropdown of sub-menus. Additionaly they switch icons to reflect interaction further. I've used only one class for both elements - "expanded" - as it's the same styling needed for them to appear on screen.
### Built with

- Semantic HTML5 markup
- CSS custom properties for colors
- Flexbox for all small containers like `<ul>`
- CSS Grid for navigation on PC layout
- Mobile-first workflow
- CSS ampersand syntax(example under)


```css
@media screen and (min-width: 90rem) {
  section.main-content {
    flex-direction: row-reverse;
    margin: 0 10vw;
  }
  section.main-content > article {
    flex: 0.6;
    margin: 3rem 0;
    text-align: left;
    & h1 {
      font-size: 5.5rem;
    }
    & p {
      max-width: 35rem;
    }
  }
```
```css
.logos-clients {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: min(10%,5rem);
  margin: 4rem;
  & img {
    width: min(20%,7rem);
  }
}
/* min() allows here for resizing of images on change of screen size  */
```

### Continued development

In this navigation component, while having dropdown menu open, hovering on it results in highlitghting all list items which is not practical, neither good looking. I'd love to change this.
Also, I'm interested in implementing features such as, navigation fading away when scrolling down, dropdown menu appearing slowly on mobile layout.
Foremost, I'd like to write cleaner code and shorter making the same thing. I plan on making more projects and look up on other developer solutions. 


### Useful resources

- [Different solution](https://github.com/alishirani1384/intro-section-with-dropdown-navigation) - I checked JavaScript code the most. His CSS code is shorter than mine however he built two navigation components. I find it unecessary. Although, his code helped me to find my mislooked issues within my code with sub-menus absolute positioning.
- [MDN Network](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) - I always refer to MDN articles whenever im not sure how method or property works and VS Code definition isn't enough.
- [Kevin Powell On Youtube](https://www.youtube.com/watch?v=HbBMp6yUXO0&t=1445s&pp=ygUtSW50cm8gc2VjdGlvbiB3aXRoIGRyb3Bkb3duIG5hdmlnYXRpb24gY3NzIGpz) - Helped me in many CSS basis and not just this video. I recommend Kevin to learn CSS in general.

## Author

- Website on GitHub - [Szablitho](https://github.com/Szablitho)
- Frontend Mentor Profile - [@Szablitho](https://www.frontendmentor.io/profile/Szablitho)