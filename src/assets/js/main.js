// To open pdf in blank tab

window.addEventListener('DOMContentLoaded', () => {
  
  const elements = document.querySelectorAll('[href$=".pdf"]');
  
  elements.forEach((element) => {
    
    element.setAttribute('target', '_blank');
    
  });
  
  
  //to adjust partner and founders logos in ArteMIA
  const paragraphs = document.querySelectorAll ('p');
  
  paragraphs.forEach((paragraph) => {
    
    if (paragraph.textContent.includes('Partner:') ||paragraph.textContent.includes('Partners:') || paragraph.textContent.includes('Finanziato da:') || paragraph.textContent.includes('Founded by:') || paragraph.textContent.includes('Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the Youth Affairs Agency. Neither the European Union nor the granting authority can be held responsible for them.')) {
      
      paragraph.style.display = 'flex';
      paragraph.style.flexDirection = 'column';
      paragraph.style.gap ='10px';
      paragraph.style.height = 'auto';
      
      const imageContainer = document.createElement('div');
      imageContainer.style.display = 'flex';
      imageContainer.style.flexDirection = 'row';
      imageContainer.style.gap ='10px';
      imageContainer.style.flexWrap = 'wrap';
      
      const images = paragraph.querySelectorAll('img');
      
      images.forEach((image) => {
        image.style.width = 'auto';
        image.style.height = '70px';
        image.style.objectFit = 'cover';
        imageContainer.appendChild(image)
      });
      
      paragraph.appendChild(imageContainer);
      
    }
    
    if (paragraph.textContent.includes(`L’intervento è stato realizzato con il sostegno dei "Fondi per Bando Sostegno per il sostegno di progetti nel settore del welfare culturale anno 2023” “PR FESR 2021-2027. Az. 1.3.4.– Sostegno alle imprese turistiche, di servizi per il turismo, cinematografiche, audiovisive, culturali e creative e sociali"`) || paragraph.textContent.includes(`The intervention was realised with the support of the ‘Funds for the support of projects in the field of cultural welfare year 2023’ ‘ERDF PR 2021-2027. Az. 1.3.4.- Support for tourism, tourism services, film, audiovisual, cultural and creative and social enterprises’.`) || paragraph.textContent.includes('Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the Youth Affairs Agency. Neither the European Union nor the granting authority can be held responsible for them.')) {

      paragraph.style.fontSize = '10px';
    }

  });
  
  const dropdownTitles = document.querySelectorAll('h3');
  
  dropdownTitles.forEach((title) => {
    if (title.textContent.includes('ArteMIA-') || title.textContent.includes('Analisi dei Bisogni per una Gestione Sostenibile dei Rifiuti') || title.textContent.includes('Needs Analysis for Sustainable Waste Management')) {
      // Create a new div to wrap the h3 and the subsequent elements
      const wrapperDiv = document.createElement('div');
      wrapperDiv.classList.add('dropdown-container');
      
      // Create an arrow span element
      const arrow = document.createElement('span');
      arrow.textContent = '▼'; // Initial down arrow
      arrow.classList.add('dropdown-arrow');
      
      // Add the arrow next to the title
      title.appendChild(arrow);
      
      // Create a container to hold the content below the h3
      const contentContainer = document.createElement('div');
      contentContainer.classList.add('dropdown-content');
      
      // Get the next sibling element of the current h3
      let nextElement = title.nextElementSibling;
      
      // Collect all the elements between this h3 and the next h3 (or end of section)
      const elementsToMove = [];
      while (nextElement && nextElement.tagName.toLowerCase() !== 'h3') {
        elementsToMove.push(nextElement);
        nextElement = nextElement.nextElementSibling;
      }
      
      // Insert the wrapper div before the h3
      title.before(wrapperDiv);
      
      // Move the h3 (title) inside the wrapperDiv
      wrapperDiv.appendChild(title);
      
      // Move all the collected elements into the contentContainer
      elementsToMove.forEach((element) => {
        contentContainer.appendChild(element);
      });
      
      // Add the content container to the wrapper
      wrapperDiv.appendChild(contentContainer);
      
      // Initially hide the content (but NOT the title and arrow)
      contentContainer.classList.add('hidden');
      
      // Toggle content visibility and arrow direction when the title is clicked
      title.addEventListener('click', () => {
        contentContainer.classList.toggle('hidden');
        arrow.classList.toggle('open');
        // Change arrow direction based on the 'open' class
        arrow.textContent = arrow.classList.contains('open') ? '▲' : '▼';
      });
      
      // Apply dropdown-related classes to the title
      title.classList.add('dropdown');
      title.classList.add('dropdown-title');
    }
  });
  
  
  
});