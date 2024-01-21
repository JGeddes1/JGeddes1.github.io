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
                <h4>Unemployment rate in uk 2023 regions Folium Leaflet Map Project</h4>
                  <p>This choropleth map was created from the open government csv data (May 2023) and grabbing a geojson file that has the UK region geometry data. The geojson and region unemployment data is joined
                   and the map is created. The Folium Python package allowed me to create this cool visual leaflet map, then to display it on this website I used Flask. Some other packages involved in the creation of map were:<br>
                    
                    <ul>
                    <li>pandas</li>
                    <li>geopandas</li>
                    <li>numpy</li>
                    
                    </ul>
                    
                    <p class="w3-text-light-grey">
                        <a href="https://github.com/JGeddes1/Unemployment-Rate-Folium-Leaflet-Map-Project" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-grey w3-xxlarge w3-hover-opacity"></i> GitHub</a>
                    </p>                    

                    </p> 
                <iframe class="map" , src="/map.html" width="100%" height="85%"></iframe>
            `;
        case 'modal2':
            return `
                <h4>Topographic Ruggedness Index (Riley) Mesolithic Sites in Iron Gates</h4>
                                                    <h5>Introduction</h5>
                                                    <p>In this project I was focusing on the main burial sites within the Iron gate, from the mesolithic
                                                        period and wanted to use see using geospatial data analysis if there was a correlation between landscape and mortuary rights. These sites include Vlasac, Lepenski Vir, Climente II, Kula, and Schela Cladovei.
                                                        The rationale for choosing this project is that the sites all have different burial practises
                                                        within the small terrain. This is thought to be due to the landscape being hard to navigate
                                                        and pass, therefore leading to a spread of tribes and lack of interaction between tribes
                                                        leading to the use of different mortuary rights taking place.
                                                        In the download there are a few maps developed aim to demonstrate if this theory is correct and to provide evidence
                                                        that helps to provide an understanding of why there are varying burial practises across the
                                                        sites.</p>
                                                   
                                                    <div id="image_container">
                                                    
                                                        <img src="/GIS_map_images/terrain_roughness_riley.png" alt="terrain roughness" style="width:100%" float:left;>
                                                </div>
                                               
                                                <div id="floated">
                                                <p></p>
                                                
                                                                        <button class="w3-button w3-light-grey w3-padding-large w3-section">
                                                                            <i class="fa fa-download"></i><a href="PDF Files/Spatial Analysis in GIS.pdf" download> Download PDF </a>
                                                                        </button>
                                                </div>
            `;
        case 'modal3':
            return `
                  <h4>Site Suitability for a new Hospital in York</h4>
                        <h5>Introduction</h5>
                                                    <p>This project I wanted to figure out where abouts the best place for a new hospital in York if there was tobe a
                                                     new hospital located. This is because York has very high waiting times for the hospitals it currently has and the wait time
                                                      could be lowered by opening a new hospital. To produce this map which demonstrates the best suitable zones I used ArcGIS Pro.
                                                      
                                                    </p>

                                                    <p>To create this map I decided upon 5 key factors that input to where the new hospital should go:<br>
                                                    1. Population Density<br>
                                                    2. Land Cover <br>
                                                    3. Proximity to major roads <br>
                                                    4. Location to other hospitals <br>
                                                    5. Slope <br>
                                                    <br> I had to use GIS tool and techniques to make the map, such as feature to raster etc, but the main statistical output to produce the map was using a weighted overlay.
                                                    </p>
                                                    <p> Resources used:
                                                    <ul>
                                                    <li><a href="https://developer.api.nhs.uk/" target="_blank">NHS Hospital Location Data</a></li>
                                                    <li><a href="https://www.data.gov.uk/dataset/65bf62c8-eae0-4475-9c16-a2e81afcbdb0/os-open-roads" target="_blank">OS Open Roads Data</a></li>
                                                    <li><a href="https://spacedata.copernicus.eu/collections/copernicus-digital-elevation-model" target="_blank">EU DEM COPERNICUS</a></li>
                                                    <li><a href="https://catalogue.ceh.ac.uk/documents/c0078881-7d5a-4641-91e2-c271426bc8a1" target="_blank">Land Cover Map UK CEH</a></li>
                                                    <li><a href="https://www.nomisweb.co.uk/census/2011/QS102EW/view/1946157112?rows=rural_urban&cols=cell" target="_blank">Population Density</a></li>
                                                    </ul>

                                                    </p>
                                                   
                                                    <div id="image_container">
                                                    
                                                        <img src="GIS_map_images\\Site Suitability Layout.jpg" alt="terrain roughness" style="width:100%" float:left;>
                                                </div>
                       
            `;
       case 'modal4':
            return `
                  <h4>Strava React Javascript API project</h4>
                        <p>This API project uses the open Strava API to display my workouts on a map for me to view. It displays some API features such as the average heartrate and Date of the run that can be found
                         through the API call. I built the map using React Leaflet to display the data. The main purpose of the map was view my running workouts and to gain experience using an API and learning a bit about how to use React javascript library. </p>
                        <p>
                    Skills demonstrated from this project:
                    <ul>
                    <li>API usage</li>
                    <li>React</li>
                    <li>Javascript</li>
                    </p>
                                            <p class="w3-text-light-grey">
                        <a href="https://github.com/JGeddes1/Unemployment-Rate-Folium-Leaflet-Map-Project" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-grey w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>    

            `;
       case 'modal5':
            return `
                  <h4>Flood Risk Analysis Of Yorkshire</h4>
                        <p></p>
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
        const projectDetails2 = getProjectDetails2(modalTarget2);

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
function getProjectDetails2(modalTarget2) {
    switch (modalTarget2) {
        case 'modal1':
            return `
                <h4>Battleships Undergraduate Year 1 </h4>
                  <p>This was project was part of my undergraduate year 1 assignment submissions.
                  The game is made from Java and incorporates Java.util.swing packages and was one of the first instances of me starting to think
                  about object orientated programming.<br>
                Skills demonstrated from this project:
                    <ul>
                    <li>OOP programming</li>
                    <li>UX/UI design</li>
                    <li>Math random logic</li>
                    
                    </ul>
                    
                    <p class="w3-text-light-grey">
                        <a href="https://github.com/JGeddes1/Unemployment-Rate-Folium-Leaflet-Map-Project" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-grey w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>                    

                    </p> 
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
                        <p>This API project uses the </p>
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
