function openModal1() {
  const modal = document.getElementById('terminal-modal1');
  
  modal.style.display = 'block'; // Show the modal
 
  // Focus on the input field
  document.getElementById('terminal-input1').focus();
}

// Function to get the current date and time
function getCurrentDateTime() {
    const now = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    return `${now.toLocaleString('en-US', options)}`;
  }
  

  // Update the environment info dynamically
  
  document.getElementById('current-datetime').textContent = getCurrentDateTime();
  
  // Simulate a build process with typing effect
  const lines = [
    "[INFO] Initializing...",
    "[INFO] Compiling assets...",
    "[INFO] Running tests...",
    "[WARN] Found 2 warnings (non-critical).",
    "[INFO] Deployment successful!"
  ];
  
  const codeOutput = document.querySelector('.code-output');
  let lineIndex = 0;
  
  function typeLine(callback) {
    if (lineIndex >= lines.length) {
      document.querySelector('.cursor-line').style.display = 'none';
      callback();
      return;
    }
  
    const currentLine = document.createElement('div');
    currentLine.classList.add('code-line');
  
    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex < lines[lineIndex].length) {
        currentLine.textContent += lines[lineIndex][charIndex];
        charIndex++;
      } else {
        clearInterval(interval);
        codeOutput.appendChild(currentLine);
        lineIndex++;
        setTimeout(() => {
          typeLine(callback);
        }, 500);
      }
    }, 10);
    openModal1()
  }
  
  // Start the typing animation when the page loads
  window.addEventListener('load', () => {
    typeLine(() => {
      setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
      }, 500);
    });
  });

  
  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const paragraphs = document.querySelectorAll('p');
  
    // Function to check if element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Function to apply typing effect
    function applyTypingEffect(paragraph) {
      if (!paragraph.classList.contains('typing')) {
        paragraph.style.opacity = '1';
        paragraph.classList.add('typing');
      }
    }
  
    // Event listener for scroll event
    window.addEventListener('scroll', () => {
      paragraphs.forEach(paragraph => {
        if (isInViewport(paragraph)) {
          applyTypingEffect(paragraph);
        }
      });
    });
  
    // Initial check in case some paragraphs are already in view on page load
    paragraphs.forEach(paragraph => {
      if (isInViewport(paragraph)) {
        applyTypingEffect(paragraph);
      }
    });
  });

// Function to open the modal
function openModal() {
  const modal = document.getElementById('terminal-modal');
  
  modal.style.display = 'block'; // Show the modal
 
  // Focus on the input field
  document.getElementById('terminal-input').focus();
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('terminal-modal');
  const inputField = document.getElementById('terminal-input');

  // Check if the user typed "OK"
  if (inputField.value.trim().toUpperCase() === 'OK') {
    modal.style.display = 'none'; // Hide the modal
    inputField.value = ''; // Clear the input field
  } else {
    alert('Type "OK" to close the modal.');
  }
}

function closeModal1() {
  const modal = document.getElementById('terminal-modal1');
  const inputField = document.getElementById('terminal-input1');

  // Check if the user typed "OK"
  if (inputField.value.trim().toUpperCase() === 'HELLO') {
    modal.style.display = 'none'; // Hide the modal
    inputField.value = ''; // Clear the input field
  } else {
    alert('Type "hello" to close the modal.');
  }
}