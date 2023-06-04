const boxData = [
    {
      name: "Havsörn",
      imageSrc: "Images/New eagle.jpg"
    },
    {
      name: "Tofsvipa",
      imageSrc: "Images/Tofsvipa.jpg"
    },
    {
      name: "Svarthakedopping",
      imageSrc: "Images/Svarthake.jpg"
    },
    {
      name: "Brushane",
      imageSrc: "Images/Ruff(brushane).jpg"
    },
    {
      name: "Korp",
      imageSrc: "Images/Raven.jpg"
    },
    {
      name: "Trana",
      imageSrc: "Images/Crane.jpg"
    }
  ];
  
  // Function to generate box elements
  function generateBoxes() {
    const boxContainer = document.querySelector(".box-container");
    boxContainer.innerHTML = "";
  
    for (let i = 0; i < boxData.length; i++) {
      const box = boxData[i];
  
      const boxElement = document.createElement("div");
      boxElement.className = "box";
  
      const linkElement = document.createElement("a");
      linkElement.href = `Info.html?box=${i}`;
  
      const imageElement = document.createElement("img");
      imageElement.src = box.imageSrc;
      imageElement.alt = "Box Image";
  
      const nameElement = document.createElement("span");
      nameElement.textContent = box.name;
  
      linkElement.appendChild(imageElement);
      linkElement.appendChild(nameElement);
      boxElement.appendChild(linkElement);
  
      boxContainer.appendChild(boxElement);
    }
  }
  
  // Call the generateBoxes function when the page loads
  window.onload = function() {
    generateBoxes();
  };
  