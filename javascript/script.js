function changeColor(element) {
    const colors = ['#ff6666', '#66ff66', '#6666ff', '#ff66ff', '#66ffff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    // Change background color
    element.style.backgroundColor = randomColor;
  
    // Change text color
    const textElement = element.querySelector('p');
    textElement.style.color = getRandomColor(); // Function to get a random color
  }
  
  // Function to get a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }