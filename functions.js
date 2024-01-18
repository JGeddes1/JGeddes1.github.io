// Get references to elements
const modalContainer = document.getElementById('modal-container');
const modalContent = document.getElementById('modal-content');

// Get all project images
const projectImages = document.querySelectorAll('.project-image');

// Add click event listener to each project image
projectImages.forEach(image => {
    image.addEventListener('click', () => {
        // Get the target modal ID
        const modalTarget = image.getAttribute('data-modal-target');
        
        // Get the content for the specific modal
        const projectDetails = getProjectDetails(modalTarget);

        // Set the modal content
        modalContent.innerHTML = projectDetails;

        // Display the modal
        modalContainer.style.display = 'block';
    });
});

// Function to close the modal
function closeModal() {
    modalContainer.style.display = 'none';
}

// Function to get the content for a specific project modal
function getProjectDetails(modalTarget) {
    switch (modalTarget) {
        case 'modal1':
            return `
                <h4>Unemployment rate in uk 2023 regions</h4>
                  <p>This choropleth map descrives the unemployment percentage across the major uk regions. The map was created using
                                        python. The packages involved in the creation of </p> 
                <iframe class="map" , src="/map.html" width="100%" height="85%"></iframe>
            `;
        case 'modal2':
            return `
                <h4>Topographic Ruggedness Index (Riley) Mesolithic Sites in Iron Gates</h4>
                                                    <h5>Introduction</h5>
                                                    <p>In this project I am focusing on the main burial sites within the Iron gate, from the mesolithic
                                                        period. These sites include Vlasac, Lepenski Vir, Climente II, Kula, and Schela Cladovei.
                                                        The rationale for choosing this project is that the sites all have different burial practises
                                                        within the small terrain. This is thought to be due to the landscape being hard to navigate
                                                        and pass, therefore leading to a spread of tribes and lack of interaction between tribes
                                                        leading to the use of different mortuary rights taking place.
                                                        The maps developed aim to demonstrate if this theory is correct and to provide evidence
                                                        that helps to provide an understanding of why there are varying burial practises across the
                                                        sites.</p>
                                                    <p>You can download the data here</p>
                                                    <div id="image_container">
                                                    
                                                        <img src="/GIS_map_images/terrain_roughness_riley.png" alt="terrain roughness" style="width:100%" float:left;>
                                                </div>
                                               
                                                <div id="floated">
                                                <p></p>
                                                
                                                                        <button class="w3-button w3-light-grey w3-padding-large w3-section">
                                                                            <i class="fa fa-download"></i><a href="darkmee.png" download> Download PDF </a>
                                                                        </button>
                                                </div>
            `;
        case 'modal3':
            return `
                  <h4>Site Suitability for a new Hospital in York</h4>
                        <p>This choropleth map descrives the unemployment percentage across the major uk regions. The map was created using python. The packages involved in the creation of </p>
                        <iframe class="map" , src="/map.html" width="100%" height="85%"></iframe>
            `;
       case 'modal4':
            return `
                  <h4>Strava React and Javascript API project</h4>
                        <p>This API project</p>
                        <iframe class="map" , src="/map.html" width="100%" height="85%"></iframe>
            `;
       case 'modal5':
            return `
                  <h4>Flood Risk Analysis Of Yorkshire</h4>
                        <p>Modal 4 </p>
                        <button class="w3-button w3-light-grey w3-padding-large w3-section">
                          <i class="fa fa-download"></i><a href="/GIS_map_images/Flood RIsk Yorkshire.jpg" download> Download PDF </a>
                        </button>
            `;
       case 'modal6':
            return `
                  <h4>Flood Risk Analysis Of Yorkshire</h4>
                        <p>Modal 4 </p>
                        <iframe class="map" , src="/GIS_map_images/Flood RIsk Yorkshire.jpg" width="100%" height="85%"></iframe>
            `;
        default:
            return ''; // Return an empty string for unknown modal targets
    }
}



// General Coding Projects Modals:



// Get references to elements
const modalContainer2 = document.getElementById('modal-container2');
const modalContent2 = document.getElementById('modal-content2');

// Get all project images
const projectImages2 = document.querySelectorAll('.project-image2');

// Add click event listener to each project image
projectImages2.forEach(image => {
    image.addEventListener('click', () => {
        // Get the target modal ID
        const modalTarget2 = image.getAttribute('data-modal-target');
        
        // Get the content for the specific modal
        const projectDetails2 = getProjectDetails(modalTarget2);

        // Set the modal content
        modalContent2.innerHTML = projectDetails2;

        // Display the modal
        modalContainer2.style.display = 'block';
    });
});

// Function to close the modal
function closeModal2() {
    modalContainer2.style.display = 'none';
}

// Function to get the content for a specific project modal
function getProjectDetails(modalTarget2) {
    switch (modalTarget2) {
        case 'modal1':
            return `
                <h4>adssssssUnemployment rate in uk 2023 regions</h4>
                  <p>This choropleth map descrives the unemployment percentage across the major uk regions. The map was created using
                                        python. The packages involved in the creation of </p> 
                <iframe class="map" , src="/map.html" width="100%" height="85%"></iframe>
            `;
        case 'modal2':
            return `
                <h4>Topographic Ruggedness Index (Riley) Mesolithic Sites in Iron Gates</h4>
                                                    <h5>Introduction</h5>
                                                    <p>In this project I am focusing on the main burial sites within the Iron gate, from the mesolithic
                                                        period. These sites include Vlasac, Lepenski Vir, Climente II, Kula, and Schela Cladovei.
                                                        The rationale for choosing this project is that the sites all have different burial practises
                                                        within the small terrain. This is thought to be due to the landscape being hard to navigate
                                                        and pass, therefore leading to a spread of tribes and lack of interaction between tribes
                                                        leading to the use of different mortuary rights taking place.
                                                        The maps developed aim to demonstrate if this theory is correct and to provide evidence
                                                        that helps to provide an understanding of why there are varying burial practises across the
                                                        sites.</p>
                                                    <p>You can download the data here</p>
                                                    <div id="image_container">
                                                    
                                                        <img src="/GIS_map_images/terrain_roughness_riley.png" alt="terrain roughness" style="width:100%" float:left;>
                                                </div>
                                               
                                                <div id="floated">
                                                <p></p>
                                                
                                                                        <button class="w3-button w3-light-grey w3-padding-large w3-section">
                                                                            <i class="fa fa-download"></i><a href="darkmee.png" download> Download PDF </a>
                                                                        </button>
                                                </div>
            `;
        case 'modal3':
            return `
                  <h4>Site Suitability for a new Hospital in York</h4>
                        <p>This choropleth map descrives the unemployment percentage across the major uk regions. The map was created using python. The packages involved in the creation of </p>
                        <iframe class="map" , src="/map.html" width="100%" height="85%"></iframe>
            `;
       case 'modal4':
            return `
                  <h4>Strava React and Javascript API project</h4>
                        <p>This API project</p>
                        <iframe class="map" , src="/map.html" width="100%" height="85%"></iframe>
            `;
       case 'modal5':
            return `
                  <h4>Flood Risk Analysis Of Yorkshire</h4>
                        <p>Modal 4 </p>
                        <button class="w3-button w3-light-grey w3-padding-large w3-section">
                          <i class="fa fa-download"></i><a href="/GIS_map_images/Flood RIsk Yorkshire.jpg" download> Download PDF </a>
                        </button>
            `;
       case 'modal6':
            return `
                  <h4>Flood Risk Analysis Of Yorkshire</h4>
                        <p>Modal 4 </p>
                        <iframe class="map" , src="/GIS_map_images/Flood RIsk Yorkshire.jpg" width="100%" height="85%"></iframe>
            `;
        default:
            return ''; // Return an empty string for unknown modal targets
    }
}
