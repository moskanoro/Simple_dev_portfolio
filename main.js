document.addEventListener('DOMContentLoaded', (event) => {
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
  
    document.addEventListener('mousedown', () => {
      cursor.classList.add('hover');
    });
  
    document.addEventListener('mouseup', () => {
      cursor.classList.remove('hover');
    });
  
    // Add hover class to cursor when over clickable elements
    const clickables = document.querySelectorAll('a, button, .skill, .project');
    clickables.forEach(elem => {
      elem.addEventListener('mouseover', () => cursor.classList.add('hover'));
      elem.addEventListener('mouseout', () => cursor.classList.remove('hover'));
    });
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Skill hover effect
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
      skill.addEventListener('mouseover', () => {
        skill.style.transform = 'translateY(-5px) rotate(5deg)';
      });
      skill.addEventListener('mouseout', () => {
        skill.style.transform = 'translateY(0) rotate(0deg)';
      });
    });
  
    // Project hover effect
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
      project.addEventListener('mouseover', () => {
        project.style.transform = 'scale(1.03)';
      });
      project.addEventListener('mouseout', () => {
        project.style.transform = 'scale(1)';
      });
    });
  
    // Easter egg: Konami code
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiCodePosition = 0;
  
    document.addEventListener('keydown', (e) => {
      if (e.key === konamiCode[konamiCodePosition]) {
        konamiCodePosition++;
        if (konamiCodePosition === konamiCode.length) {
          activateEasterEgg();
          konamiCodePosition = 0;
        }
      } else {
        konamiCodePosition = 0;
      }
    });
  
    function activateEasterEgg() {
      document.body.style.animation = 'matrix-effect 5s linear';
      setTimeout(() => {
        document.body.style.animation = '';
      }, 5000);
    }
  });
  
  // Simple greeting in the console
  console.log('%cWelcome to Moskanor\'s hacker den!', 'color: #00ff41; font-size: 20px; font-weight: bold;');
  console.log('%cTry the Konami code for a surprise!', 'color: #ff00ff; font-style: italic;');