// eslint-disable-next-line no-unused-vars
const projectName = 'tribute-page';

const switcher = document.querySelector('button#theme-switcher');

switcher.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme')
  document.body.classList.toggle('light-theme')

  const className = document.body.className;
  if(className === "light-theme") {
      this.textContent = "Dark";
  }
  else {
      this.textContent = "Light";
  }
});