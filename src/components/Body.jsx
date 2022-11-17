import React from 'react'
import { useState } from 'react';
import { usePopper } from 'react-popper';
function Body() {
  

return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
          <div class="container px-4 px-lg-5">
              <a class="navbar-brand" href="#page-top">Mario Povil</a>
              <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ms-auto my-2 my-lg-0">
                  <li class="nav-item"><a class="nav-link" href="#about"> Estudios</a></li>
                      <li class="nav-item"><a class="nav-link" href="#services">Conocimientos </a></li>
                      <li class="nav-item"><a class="nav-link" href="#portfolio">Proyectos</a></li>
                      <li class="nav-item"><a class="nav-link" href="#contact">Redes</a></li>


                  </ul>
              </div>
          </div>
      </nav><header class="masthead">
              <div class="container px-4 px-lg-5 h-100">
                  <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                      <div class="col-lg-8 align-self-end mb-4 ">
                          <h1 class="text-white font-weight-bold">¡Un placer soy Mario Ponce!</h1> <br/>
                          <h2 class="text-white font-weight-bold">Me encuentro como Mario Povil en <a href='https://github.com/MarioPovil'><img style={{width:"2.5rem"}} src='https://cdn4.iconfinder.com/data/icons/socialcones/508/Github-128.png'/>
                           </a>
                          <br></br>  Me encuentro estudiando Desarrollo Web FullStack, y por egresar de Universidad UTEL. </h2><br/>
                          <hr class="divider" />
                          <h3> Apasionado autodidacta, me encanta aprender cosas nuevas, y mantenerme actualizado. <br/>
                                Cooperativo, me gusta mucho el trabajo en equipo, y más en equipos a largo plazo. <br/>
                                Contendiente, por lo cual me apasionan los trabajos retadores, y el aprendizaje 
                                nuevo, para poder mejorar, ampliar, y refinar mis habilidades en programación. <br/>
                                <span style={{color:"#AAFFDD"}}>  Sin reinventar la rueda, pero si sabiendo como es que esta puede rodar. </span> </h3>
                                
                      </div>
                  </div>
              </div>
          </header> 
          <section class="page-section bg-primary" id="about">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-white mt-0">Estudios </h2>
                        <hr class="divider divider-light" />
                        <ul> 
                        <li><h3 class="text-white-75 mb-4"> Licenciatura en Ingenieria en Sistemas Computacionales en Universidad UTEL <br/>
                       <div class="fw-bold ">( Actualmente Estudiando ) </div></h3>  </li>
                       <br/>
                        <li><h3 class="text-white-75 mb-4"> Ingenieria en Mecatronica En ITESRC <br/>(Instituo Tecnologico de La Región Carbonifera) 
                        <div class="fw-bold ">( Carrera concluida ) </div> </h3> </li>                       
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="page-section" id="services">
            <div class="container px-4 px-lg-5">
                <h2 class="text-center mt-0">Conocimientos</h2>
                <hr class="divider" />
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5" style={{background:"#DEEEEE", borderRadius:"15px 2px 15px 2px"}}> <br/>
                            <div class="mb-2"><i class="bi-laptop fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Program Lenguages</h3>
                            <div class="grid "> <img src='https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/logo-javascript-128.png' style={{width:'50px'}}/>
                            <p class="text-muted mb-0"> Es mi lenguaje preferido en frontend</p> 
                            </div>
                            <div  > <img src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-128.png' style={{width:'50px'}}/>
                            <p class="text-muted mb-0"> y Java mi lenguaje preferido en Backend</p> 
                            <br/>  </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5" style={{background:"#EEDEEE", borderRadius:"15px 2px 15px 2px"}}> <br/>
                            <div class="mb-2"><i class="bi-globe fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Frameworks</h3>
                            <div class="grid "> <img src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-128.png' style={{width:'50px'}}/>
                           <img src='https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-128.png' style={{width:'50px'}}/>
                            <p class="text-muted mb-0">Uso más frecuentemente React, pero me gustaría poder especializarme más en Angular y Vue</p> 
                            </div>
                            <div > <img src='https://cdn2.iconfinder.com/data/icons/boxicons-logos/24/bxl-spring-boot-128.png' style={{width:'50px'}}/>
                            <p class="text-muted mb-0"> Por el momento en Java solo utilizo de framework Spring Boot</p> 
                            <br/></div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5" style={{background:"#EEEEDE", borderRadius:"15px 2px 15px 2px"}}> <br/>
                            <div class="mb-2"><img src='https://cdn4.iconfinder.com/data/icons/web-basics-vol-05/512/data_database_mysql_server_sql_storage-128.png' style={{width:'45px'}}/></div>
                            <h3 class="h4 mb-2">DataBases</h3>
                            <div class="grid "> <img src='https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/mysql-128.png' style={{width:'50px'}}/>
                            <p class="text-muted mb-0"> Para bases de datos SQl, me gusta usar MySQL</p> 
                            </div>
                            <div  > <img src='https://cdn1.iconfinder.com/data/icons/soleicons-fill-vol-1/64/postgres_database_server_relational_dbms_sql-128.png' style={{width:'50px'}}/>
                            <img src='https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-128.png'/>
                            <p class="text-muted mb-0"> En NoSQL uso comunmente Postgres, y MongoDB, junto con  <span style={{color:"blue"}}> Docker.</span></p> 
                            <br/>  </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-md-6 text-center">
                    <div class="mt-5" style={{background:"#CDDECC", borderRadius:"15px 2px 15px 2px"}}>
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-heart fs-1 text-primary"></i></div>
                            <ul> 

                            <h3 class="h4 mb-2">Idiomas</h3> <br/>
                            <div class="bg-secondary">
                            <h3 style={{color:"#FED"}} > Español</h3><br/>
                            <p id='idioms'>Lengua Materna</p> <br/>
                            </div>
                            <div class=" bg-secondary">
                             <h3 style={{color:"#FED"}}> Ingles</h3>  <br/>
                            <p id='idioms'> Speaking: Advance 
                              Reading: Advance <br/> 
                              Listening: Advance  </p>     
                             </div> <br/>
                              </ul>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <div id="portfolio">
                    <div class="container-fluid p-0">
                     <div class="row g-0">
                          <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="./src/assets/img/portfolio/fullsize/1.jpg" title="Project Name">
                            <img class="img-fluid" src="assets/img/PERN1.png" alt="PERN stack" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Category</div>
                                <div class="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="assets/img/PernCrud.png" title="Project Name">
                            <img class="img-fluid" src="assets/img/portfolio/thumbnails/2.jpg" alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Category</div>
                                <div class="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="#" title="TicTacToe">
                            <img class="img-fluid" src="./assets/img/tictactoe.png" alt="TicTacToe" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Category</div>
                                <div class="project-name">Project Name</div>
                            </div>
                            </a>
                    </div>
                            <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="assets/img/tictactoecode.png" title="Project Name">
                            <img class="img-fluid" src="assets/img/portfolio/thumbnails/3.jpg" alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Category</div>
                                <div class="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <section class="page-section bg-dark text-white">
            <div class="container px-4 px-lg-5 text-center">
                <h2 class="mb-4">Proyectos</h2>
                <a class="btn btn-light btn-xl" href="https://github.com/MarioPovil?tab=repositories" target="_blank">Github</a>
            </div>
        </section>
         <section class="page-section" id="contact">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6 text-center">
                        <h2 class="mt-0">Let's Get In Touch!</h2>
                        <hr class="divider" />
                        <p class="text-muted mb-5">Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div class="col-lg-6">
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div class="form-floating mb-3">
                                <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Full name</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Email address</label>
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="phone">Phone number</label>
                                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                            <div class="form-floating mb-3">
                                <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." ></textarea>
                                <label for="message">Message</label>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                            <div class="d-grid"><button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Submit</button></div>
                        </form>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-4 text-center mb-5 mb-lg-0">
                        <i class="bi-phone fs-2 mb-3 text-muted"></i>
                        <div>+1 (555) 123-4567</div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Body