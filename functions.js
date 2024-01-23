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
                    
                    <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/Unemployment-Rate-Folium-Leaflet-Map-Project" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white w3-xxlarge w3-hover-opacity"></i> GitHub</a>
                    </p>                    

                    </p> 
                <iframe class="map" , src="map.html" width="100%" height="85%"></iframe>
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
                                                    
                                                        <img src="GIS_map_images/terrain_roughness_riley.png" alt="terrain roughness" style="width:100%" float:left;>
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
                                            <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/Unemployment-Rate-Folium-Leaflet-Map-Project" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>    

            `;
       case 'modal5':
            return `
                  <h4>Flood Risk Analysis Of Yorkshire</h4>
                        <p>The city York is notorious for flooding and had recently flooded when I came up with the idea of seeing the level of flood risk in relation to where you live in York/Yorkshire.
                        To build the map I looked and tried to do some flood risk/succesptibnility mapping, but ended up following primarily a flood risk analysis tutorial that you can find the <a href="https://mapscaping.com/flood-risk-modelling/"> link to here</a>. The workflow of how the process is down is shown below:
                        </p>
                        <img src="general\\method-flood-mapping-arcgis.png" alt="terrain roughness" style="width:100%" float:left;>
                        <p> Resources used:
                            <ul>
                            
                            <li><a href="https://chrsdata.eng.uci.edu/" target="_blank">PERSIANN Rainfall Data </a></li>
                            <li><a href="https://spacedata.copernicus.eu/collections/copernicus-digital-elevation-model" target="_blank">EU DEM COPERNICUS</a></li>
                            <li><a href="https://catalogue.ceh.ac.uk/documents/c0078881-7d5a-4641-91e2-c271426bc8a1" target="_blank">Land Cover Map UK CEH</a></li>
                           
                            </ul>

                        <button class="w3-button w3-light-grey w3-padding-large w3-section">
                          <i class="fa fa-download"></i><a href="/GIS_map_images/Flood RIsk Yorkshire.jpg" download> Download Map</a>
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
                  <p>As part of my first-year undergraduate assignments, I developed a Battleships game in Java, utilizing the Java.util.swing packages. This project marked one of my early forays into object-oriented programming, prompting me to explore the principles and practices of OOP. The game, a strategic naval battle simulation, not only showcased my growing proficiency in Java programming but also laid the foundation for my understanding of object-oriented design concepts.<br>
                Skills demonstrated from this project:
                    <ul>
                    <li>OOP programming</li>
                    <li>UX/UI design</li>
                    <li>Math random logic</li>
                    
                    </ul>
                    
                    <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/UnderGradCompScience-Year-1/tree/main/Battleships/battleships/src" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white  w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>                    
                    <iframe width="100%" height="500vh" src="https://www.youtube.com/embed/W2ZrgvEHiVc" title="Battleships Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </p> 
            `;
        case 'modal2':
            return `
                <h4>Task Manager</h4>
                                                    <p>I recently completed a task reminder application using Python, designed to streamline daily productivity. This application leverages
                                                    JSON for storing and organizing task reminders efficiently. The key functionality revolves around notifying me of impending tasks.
                                                    At the start of each day, I set the application to load automatically upon PC startup using windows task scheduler, ensuring that I am promptly reminded of pending tasks.
                                                    The seamless integration with the operating system enhances ensures that reminders are not overlooked. Each task is stored as a
                                                    JSON entry, facilitating easy management and retrieval. The application employs a notification system to alert users when it's time to initiate a particular
                                                     task, providing a proactive approach to time management. Moreover, the system is designed to remind users of uncompleted tasks until they are
                                                      deliberately deleted. Through this project, I not only strengthened my Python programming skills but also gained valuable experience
                                                      in utilizing JSON for data storage, integrating with operating systems for automatic startup, and implementing a notification feature to enhance task
                                                      management efficiency. The project's focus on practical utility reflects my commitment to developing solutions that positively impact daily
                                                      routines and foster a more organized and productive workflow.</p>
                                                    <p>You can download the data here</p>

                                                    Skills demonstrated from this project:
                                                    <ul>
                                                    <li>Python Programming</li>
                                                    <li>Data Storage and Retrieval with JSON</li>
                                                    <li>User Interface (UI) Design</li>
                                                    
                                                    </ul>
                                                   
                                                                    <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/Task-Reminder-App" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white  w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>   
                                                <div id="floated">
                                                
                                                <p></p>
                                                

                                                </div>
            `;
        case 'modal3':
            return `
                  <h4>Undergraduate Train Ticket Project </h4>
                        <p>As part of my first-year undergraduate module, I completed a fundamental project in Java, a command-line-based train ticket
                        purchasing system. This project aimed to simulate a simplified ticketing experience, devoid of a graphical user interface,
                        with the code executing directly from the terminal. Upon running the Java code, the program initiates a straightforward yet
                        functional train ticket system. One notable feature is the dynamic display of available endpoints based on the user's selected
                        starting point, enhancing user interaction and simplifying the ticket purchasing process. The system also includes options for
                        selecting return or one-way tickets, providing users with flexibility in their travel choices. Through this project, I not only
                        solidified my foundational Java programming skills but also gained experience in designing a functional and responsive system, laying the groundwork for more complex programming endeavors in my academic journey.
                        </p>
                        <p>Skills demonstrated from this project:
                    <ul>
                    <li>Java programming</li>
                    <li>Command Line Interface Development</li>
                    <li>Problem-Solving and Algorithmic Thinking</li>
                   
                    <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/UnderGradCompScience-Year-1/tree/main/TrainTickets/src" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white  w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>                       
                    </ul>
                    </p>
            `;
       case 'modal4':
            return `
                  <h4>Python Renaming File Tool (Developed for ADS) </h4>
                        <p>I lead and sole-developed a file renaming tool in python to support staff to convert thousands of file types, in order to meet the company filename policy guidelines for archiving. During the project lifetime, the software was released to staff who provided feedback, which was enacted upon in updated iterations trying to bring concepts such as continuous integration and continuous delivery which are found in agile framework ideologies to my development of the software. </p>
                       <p>Skills demonstrated from this project:
                    <ul>
                    <li>Python programming</li>
                    <li>CI/CD</li>
                    <li>Time Management</li>
                    <li>Independant working</li>
                    </ul>
                                        <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/Rename-Tool-V2-Onwards" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>
                    
                    <iframe width="100%" height="500vh" src="https://www.youtube.com/embed/OVMa97eSxFg" title="File renaming tool demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `;
       case 'modal5':
            return `
                  <h4>Python ship collecting game</h4>
                        <p>I recently completed a dynamic and engaging project inspired by a tutorial from Cameron Astor on Mammoth Interactive. This project involved the development of a simple spaceship collector game using Python and the Pygame package. While following the tutorial, I expanded the scope by incorporating shooting mechanics, asteroid elements, and a lives system, enhancing the overall gameplay experience. This experience not only deepened my understanding of Python programming but also allowed me to explore the creative aspects of game development. The use of Pygame proved to be instrumental in bringing the project to life, showcasing the versatility and power of Python in the context of game design.</p>
                         <p>Skills demonstrated from this project:
                    <ul>
                    <li>Python programming</li>
                    <li>Game Development</li>
                    <li>Understanding Object classes</li>
                    <li>Pygame Framework</li>
                    <li>Problem Solving</li>
                    </ul>
                                                            <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/Simple-Spaceship-Collecting-Points-Game" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>
            `;
       case 'modal6':
            return `
                  <h4>Sudoku</h4>
                        <p>
As part of my early undergraduate coursework, I developed a Sudoku game in Java, utilizing the Swing library for the graphical user interface. The JFrame displays a 3x3 grid layout, with each cell containing a panel representing a mini 3x3 Sudoku grid. The numbers in each panel are generated and shuffled, creating a visually dynamic representation. While the current implementation lacks the full game logic and user interaction expected in a Sudoku game, it serves as a foundational step in understanding GUI programming in Java.</p>
                                                               <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/Sudoku" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>
            `;
       case 'modal7':
            return `
                  <h4>Basic Javascript Projects From Course</h4>
                        <p>As part of a beginner-level JavaScript course on Udemy, I completed several simple yet foundational projects that enriched my understanding of web development. The course, titled "JavaScript Tutorial for Beginners," guided me through hands-on exercises in creating interactive web applications. I crafted projects that ranged from basic interactive web pages to more dynamic elements like form validation and simple games later on. These exercises honed my skills in JavaScript, emphasizing concepts such as DOM manipulation and event handling. Through practical applications, I gained confidence in leveraging JavaScript to enhance user interactivity and responsiveness on web platforms. This course served as a valuable introduction, setting the stage for further exploration into the world of JavaScript development.</p>


                                                        <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/Vanilla-Javascript-Projects" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>
                       
            `;
       case 'modal8':
            return `
                  <h4>Simple Excel to CSV converter</h4>
                        <p>
I engineered a tool streamlining data processes at ADS by automatically converting Excel sheets into individual CSV files. This application, inspired by the efficiency of a file rename tool, significantly accelerates file conversion tasks. Its implementation reflects a commitment to enhancing workflow efficiency and simplifying data management procedures at ADS.</p>
                       
            `;
        default:
            return ''; // Return an empty string for unknown modal targets
    }
}




const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');


btn.addEventListener('click',function trigger(e) {
   if (!btn.classList.contains('slide')) {
       btn.classList.add('slide');
       video.play();
   }
   else{
       btn.classList.remove('slide');
       video.pause();
   }
});

const btn2 = document.querySelector('.switch-btn2');
const video2 = document.querySelector('.video-container2');


btn2.addEventListener('click',function trigger(e) {
   if (!btn2.classList.contains('slide2')) {
       btn2.classList.add('slide2');
       video2.play();
   }
   else{
       btn2.classList.remove('slide2');
       video2.pause();
   }
});

