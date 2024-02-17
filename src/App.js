import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './responsive_style.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



import myImage from './images/pic-removebg-preview.png';
import socialmedia from './images/socialmedia.PNG';
import chatlatest from './images/chatlatest.PNG';
import quiz1 from './images/quiz1.PNG';
import crud from './images/crud.PNG';
import quiz from './images/quiz.PNG';
import country from './images/country.PNG';
import bookRedux from './images/bookRedux.PNG';
import emp_info_storage from './images/emp_info_storage.PNG';
import html_css1 from './images/html_css1.PNG';
import html_css2 from './images/html_css2.PNG';
import logo from './images/logo-removebg-preview.png';
import video from './videos/video.mp4';

function App() {
  const hide = () => {
    document.querySelector(".navCollapse1").classList.remove("show");
  } 
  const func1 = () =>{
      let div1 = document.createElement("div");
      div1.style.backgroundColor="rgb(0,0,0,0.5)";
      div1.style.backgroundImage=`url(${socialmedia})`;
      div1.style.backgroundRepeat="no-repeat";
      div1.style.backgroundPosition="center";
      div1.style.backgroundSize="contain";
      div1.style.width = "100vw";
      div1.style.height = "100vh";
      div1.style.cursor = "zoom-out";
      div1.style.zIndex = "10000";
      div1.style.position = "fixed";
      div1.style.top = "0";
      div1.style.left = "0";
      document.querySelector("body").appendChild(div1)
      div1.addEventListener("click",function(){
          div1.remove();
      }) 
}
  const func2 = () =>{
      let div1 = document.createElement("div");
      div1.style.backgroundColor="rgb(0,0,0,0.5)";
      div1.style.backgroundImage=`url(${chatlatest})`;
      div1.style.backgroundRepeat="no-repeat";
      div1.style.backgroundPosition="center";
      div1.style.backgroundSize="contain";
      div1.style.width = "100vw";
      div1.style.height = "100vh";
      div1.style.cursor = "zoom-out";
      div1.style.zIndex = "10000";
      div1.style.position = "fixed";
      div1.style.top = "0";
      div1.style.left = "0";
      document.querySelector("body").appendChild(div1)
      div1.addEventListener("click",function(){
          div1.remove();
      }) 
}
  const func3 = () =>{
      let div1 = document.createElement("div");
      div1.style.backgroundColor="rgb(0,0,0,0.5)";
      div1.style.backgroundImage=`url(${quiz1})`;
      div1.style.backgroundRepeat="no-repeat";
      div1.style.backgroundPosition="center";
      div1.style.backgroundSize="contain";
      div1.style.width = "100vw";
      div1.style.height = "100vh";
      div1.style.cursor = "zoom-out";
      div1.style.zIndex = "10000";
      div1.style.position = "fixed";
      div1.style.top = "0";
      div1.style.left = "0";
      document.querySelector("body").appendChild(div1)
      div1.addEventListener("click",function(){
          div1.remove();
      }) 
}
  const func4 = () =>{
      let div1 = document.createElement("div");
      div1.style.backgroundColor="rgb(0,0,0,0.5)";
      div1.style.backgroundImage=`url(${crud})`;
      div1.style.backgroundRepeat="no-repeat";
      div1.style.backgroundPosition="center";
      div1.style.backgroundSize="contain";
      div1.style.width = "100vw";
      div1.style.height = "100vh";
      div1.style.cursor = "zoom-out";
      div1.style.zIndex = "10000";
      div1.style.position = "fixed";
      div1.style.top = "0";
      div1.style.left = "0";
      document.querySelector("body").appendChild(div1)
      div1.addEventListener("click",function(){
          div1.remove();
      }) 
}
  const func5 = () =>{
      let div1 = document.createElement("div");
      div1.style.backgroundColor="rgb(0,0,0,0.5)";
      div1.style.backgroundImage=`url(${quiz})`;
      div1.style.backgroundRepeat="no-repeat";
      div1.style.backgroundPosition="center";
      div1.style.backgroundSize="contain";
      div1.style.width = "100vw";
      div1.style.height = "100vh";
      div1.style.cursor = "zoom-out";
      div1.style.zIndex = "10000";
      div1.style.position = "fixed";
      div1.style.top = "0";
      div1.style.left = "0";
      document.querySelector("body").appendChild(div1)
      div1.addEventListener("click",function(){
          div1.remove();
      }) 
}
  const func6 = () =>{
      let div1 = document.createElement("div");
      div1.style.backgroundColor="rgb(0,0,0,0.5)";
      div1.style.backgroundImage=`url(${country})`;
      div1.style.backgroundRepeat="no-repeat";
      div1.style.backgroundPosition="center";
      div1.style.backgroundSize="contain";
      div1.style.width = "100vw";
      div1.style.height = "100vh";
      div1.style.cursor = "zoom-out";
      div1.style.zIndex = "10000";
      div1.style.position = "fixed";
      div1.style.top = "0";
      div1.style.left = "0";
      document.querySelector("body").appendChild(div1)
      div1.addEventListener("click",function(){
          div1.remove();
      }) 
}
  const func7 = () =>{
      let div1 = document.createElement("div");
      div1.style.backgroundColor="rgb(0,0,0,0.5)";
      div1.style.backgroundImage=`url(${bookRedux})`;
      div1.style.backgroundRepeat="no-repeat";
      div1.style.backgroundPosition="center";
      div1.style.backgroundSize="contain";
      div1.style.width = "100vw";
      div1.style.height = "100vh";
      div1.style.cursor = "zoom-out";
      div1.style.zIndex = "10000";
      div1.style.position = "fixed";
      div1.style.top = "0";
      div1.style.left = "0";
      document.querySelector("body").appendChild(div1)
      div1.addEventListener("click",function(){
          div1.remove();
      }) 
}
  const func8 = () =>{
      let div1 = document.createElement("div");
      div1.style.backgroundColor="rgb(0,0,0,0.5)";
      div1.style.backgroundImage=`url(${emp_info_storage})`;
      div1.style.backgroundRepeat="no-repeat";
      div1.style.backgroundPosition="center";
      div1.style.backgroundSize="contain";
      div1.style.width = "100vw";
      div1.style.height = "100vh";
      div1.style.cursor = "zoom-out";
      div1.style.zIndex = "10000";
      div1.style.position = "fixed";
      div1.style.top = "0";
      div1.style.left = "0";
      document.querySelector("body").appendChild(div1)
      div1.addEventListener("click",function(){
          div1.remove();
      }) 
}
  const func9 = () =>{
      let div1 = document.createElement("div");
      div1.style.backgroundColor="rgb(0,0,0,0.5)";
      div1.style.backgroundImage=`url(${html_css1})`;
      div1.style.backgroundRepeat="no-repeat";
      div1.style.backgroundPosition="center";
      div1.style.backgroundSize="contain";
      div1.style.width = "100vw";
      div1.style.height = "100vh";
      div1.style.cursor = "zoom-out";
      div1.style.zIndex = "10000";
      div1.style.position = "fixed";
      div1.style.top = "0";
      div1.style.left = "0";
      document.querySelector("body").appendChild(div1)
      div1.addEventListener("click",function(){
          div1.remove();
      }) 
}
  const func10 = () =>{
      let div1 = document.createElement("div");
      div1.style.backgroundColor="rgb(0,0,0,0.5)";
      div1.style.backgroundImage=`url(${html_css2})`;
      div1.style.backgroundRepeat="no-repeat";
      div1.style.backgroundPosition="center";
      div1.style.backgroundSize="contain";
      div1.style.width = "100vw";
      div1.style.height = "100vh";
      div1.style.cursor = "zoom-out";
      div1.style.zIndex = "10000";
      div1.style.position = "fixed";
      div1.style.top = "0";
      div1.style.left = "0";
      document.querySelector("body").appendChild(div1)
      div1.addEventListener("click",function(){
          div1.remove();
      }) 
}


  return (
    <div>
       
        <header className="header_wrapper1">
        <Navbar bg="black" expand="lg" variant="dark" fixed='top' className='navbar'>
        <Container>
            <Navbar.Brand href="#home" className='text-white brand'><img src={logo} className="img-fluid" alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='menu1' />
            <Navbar.Collapse id="basic-navbar-nav" className="navCollapse1 justify-content-end">
            <Nav className="menu-navbar-nav1">
                <Nav.Link href="#home" className='text-white link1' onClick={hide}>HOME</Nav.Link>
                <Nav.Link href="#client" className='text-white link1' onClick={hide}>CLIENTS</Nav.Link>
                <Nav.Link href="#about" className='text-white link1' onClick={hide}>SERVICE</Nav.Link>
                <Nav.Link href="#education" className='text-white link1' onClick={hide}>ABOUT US</Nav.Link>
                <Nav.Link href="#experience" className='text-white link1' onClick={hide}>CONTACT US</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </header>
        <div>
            <video autoPlay muted loop playsInline className='back-video' id="home">
                    <source src={video} type='video/mp4'></source>
            </video>
            <section className="banner-content">
                <div className="container">
                    <div>
                            <p className="banner-content-item">Offering Better Software</p>
                            <h3 className="banner-content-item">For More Efficient 2024</h3>  
                    </div>
                </div>
            </section>
        </div>


    
    <section id="client" className="client_wrapper1 bg-black pt-5">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-left">
                    <br /><br /><br />
                    <h2 className="bg-secondary text-center">CLIENTS</h2>
                    <p className="p1">
                    My name is Raihanul. I am from Bangladesh. I am a web development enthusiast. 
                    Actually, I am an EEE graduate. I have a professional experience of almost 2.5 years, 
                    but it is not related to Web/Software Development. I have been working on web development
                     personally (non-professionally) since September 19, 2021. During this time I used React 
                     JS, Redux, Angular, SASS, LESS, Node JS, Express JS, MongoDB, MySQL, MERN, MEAN,
                      Firebase, EJS Template Engine, JSON Web Token, Multer, Express Validator, Socket.io, 
                      JSON Server, Asynchronous Javascript, Event Loop, Unit Testing, Javascript, Typescript,
                       HTML, CSS, Bootstrap, Docker, Microservices using Node JS, RabbitMQ, API Gateway, 
                       Netlify, Vercel, Render, Git, Github etc.
                    </p>
                </div>
                
            </div>
        </div>
    </section>


    

    {/* My Education section start */}
    <section id="education" className="education_wrapper bg-black">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 mb-5">
                    <h2 className="text-center bg-secondary">SERVICE</h2>
                         
                          <p className="p5">1. BSc in EEE (September 2018), United International 
                            University, Dhaka, Bangladesh (CGPA-3.93/4)</p>
                           <p className="p6">2. HSC in Science (2013), Rangpur Govt. College, 
                                Rangpur, Bangladesh (GPA-5/5)</p>
                          <p className="p7">3. SSC in Science (2011), Rangpur Zila School,
                              Rangpur, Bangladesh (GPA-5/5)</p>
                </div>
                
            </div>
        </div>
    </section>
    {/* My Education section exit */}

    {/* My Experience section start */}
    <section id="experience" className="experience_wrapper bg-black">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-left mb-5">
                    <h2 className="text-center bg-secondary">ABOUT US</h2>
                    <p className="p2">1. Web Development [Doing it personally] (September 19, 2021 - Present),
                        Dhaka, Bangladesh

                    </p>
                    <p className="p3">2. Former Associate Engineer (August 18, 2019 - July 31, 2021),
                            Neural Semiconductor Ltd, Tafuri Technologies, Dhaka, Bangladesh</p>
                    <p className="p4">3. Former Intern (February 12, 2019 - August 12, 2019), Neural Semiconductor 
                        Ltd, Tafuri Technologies, Dhaka, Bangladesh</p>
                </div>
                
            </div>
        </div>
    </section>
    {/* My Experience section exit */}

   

    {/* portfolio Section start */}
    <section id="portfolio" className="portfolio_wrapper bg-black">
        <div className="container">
           {/* <div className="row bg-danger"> */}
                <div className="col-sm-12 text-center mb-md-5 mb-5 bg-secondary">
                    <h2>Portfolio regarding web development</h2>
                </div>
           {/* </div> */}
            
               
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 mb-5">
                                <h5 className="mb-2 mt-4">Social Media App using MERN Stack</h5>
                                <div className="portfolio-img">
                                    <img src={socialmedia} className="img-fluid w-100" alt="socialmedia" />
                                   {/* <div className="overlay"> <i className="fas fa-plus"></i></div> */}
                                </div>
                                <button className="btn btn-primary text-black mt-2 btn1 mb-5" onClick={func1}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">Realtime Chat App using MERN Stack and Socket.io</h5>
                                <div className="portfolio-img">
                                    <img src={chatlatest} className="img-fluid w-100" alt="chat app"/>
                                   {/* <div className="overlay"> <i className="fas fa-plus"></i></div> */}
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn2 mb-5" onClick={func2}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">Millionaire Quiz App using React</h5>
                                <div className="portfolio-img">
                                    <img src={quiz1} className="img-fluid w-100" alt="Millionaire quiz app"/>
                                    {/* <div className="overlay"> <i className="fas fa-plus"></i></div> */}
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn3 mb-5" onClick={func3}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">Food CRUD Application using MERN Stack (this has also been completed using MySQL, Node JS, Express JS, React JS, and MEAN Stack)</h5>
                                <div className="portfolio-img">
                                    <img src={crud} className="img-fluid w-100" alt="CRUD App"/>
                                    {/* <div className="overlay"> <i className="fas fa-plus"></i></div> */}
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn4 mb-5" onClick={func4}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">Quiz Application using React</h5>
                                <div className="portfolio-img">
                                    <img src={quiz} className="img-fluid w-100" alt="Quiz app"/>
                                    {/* <div className="overlay"> <i className="fas fa-plus"></i></div> */}
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn5 mb-5" onClick={func5}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">Country Application using React</h5>
                                <div className="portfolio-img">
                                    <img src={country} className="img-fluid w-100" alt="Country App"/>
                                   {/*  <div className="overlay"> <i className="fas fa-plus"></i></div> */}
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn6 mb-5" onClick={func6}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">React Book CRUD App using Redux</h5>
                                <div className="portfolio-img">
                                    <img src={bookRedux} className="img-fluid w-100" alt="Book CRUD App"/>
                                    {/* <div className="overlay"> <i className="fas fa-plus"></i></div> */}
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn7 mb-5" onClick={func7}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">Employee Info Storage CRUD Application using Angular, Bootstrap, and JSON Server</h5>
                                <div className="portfolio-img">
                                    <img src={emp_info_storage} className="img-fluid w-100"  alt="Employee Info Storage CRUD App"/>
                                    {/* <div className="overlay"> <i className="fas fa-plus"></i></div> */}
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn8 mb-5" onClick={func8}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">A website template demo using HTML and CSS</h5>
                                <div className="portfolio-img">
                                    <img src={html_css1} className="img-fluid w-100"  alt="Web Template 01"/>
                                    {/* <div className="overlay"> <i className="fas fa-plus"></i></div> */}
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn9 mb-5" onClick={func9}>View Project</button>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <h5 className="mb-2 mt-4">A website template demo using HTML and CSS</h5>
                                <div className="portfolio-img">
                                    <img src={html_css2} className="img-fluid w-100"  alt="Web Template 02"/>
                                   {/* <div className="overlay"> <i className="fas fa-plus"></i></div> */}
                                </div>
                                
                                <button className="btn btn-primary text-black mt-2 btn10 mb-5" onClick={func10}>View Project</button>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <p className="text-center">Note : I did all the projects with the help of internet.</p>
                        </div>
                   
           
        </div>
    </section>
    {/* portfolio Section exit */}

  

    {/*Footer section*/}
    <section id="contact" className="contact_wrapper mt-md-0 bg-black">
        <div className="container mt-5">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 text-center">
                    <div className="footer-logo mb-3 mb-md-0">
                        <h2 className="bg-secondary">Contact US</h2>
                        <p>Gmail ID : ronyraihan141@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <video autoPlay muted loop playsInline>
        <source src='./videos/video.mp4' type='video/mp4'></source>
   </video>

    {/* Footer section exit */}

    
{/* </body> */}
</div>
    
  );
}

export default App;
