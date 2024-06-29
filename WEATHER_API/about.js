  // Dropdown menu functionality
  const settingsIcon = document.getElementById('h1-icon2');
  const settingsMenu = settingsIcon.nextElementSibling;

 

  settingsIcon.addEventListener('click', () => {
      toggleDropdown(settingsMenu);
      helpMenu.style.display = 'none'; // Close other menu if open
  });

  document.addEventListener('click', (event) => {
      if (!event.target.matches('.icon')) {
          helpMenu.style.display = 'none';
          settingsMenu.style.display = 'none';
      }
  });

  function toggleDropdown(menu) {
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }

  // Dark mode functionality
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
  });
