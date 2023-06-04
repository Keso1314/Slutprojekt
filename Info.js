// Function to parse query parameters from URL
function parseQueryParameters() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const boxIndex = parseInt(urlParams.get('box'));
    return boxIndex;
  }
  
  // Function to display box details
  function displayBoxDetails() {
    const boxIndex = parseQueryParameters();
    if (boxIndex >= 0 && boxIndex < boxData.length) {
      const box = boxData[boxIndex];
      document.getElementById('boxName').textContent = box.name;
      document.getElementById('boxImage').src = box.imageSrc;
    }
  }
  
  // Call the displayBoxDetails function when the page loads
  window.onload = function() {
    displayBoxDetails();
  };

  window.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedImage = urlParams.get('image');
  
    if (selectedImage) {
      const imageContainer = document.getElementById('image-container');
      const imgElement = document.createElement('img');
      imgElement.src = selectedImage;
      imgElement.alt = 'Selected Image';
      imageContainer.appendChild(imgElement);
    }
  });
  
  