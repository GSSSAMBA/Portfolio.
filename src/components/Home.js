import React from 'react';
import './home.css'
import Nav from './Nav';
import cloud from '../images/cloud.png'

import react from '../images/react.png'
import html from '../images/html.png'
import css from '../images/css.png'
import javascript from '../images/javascript.png'
import node from '../images/node.png'
import Mongodb from '../images/Mongodb.png'
import github from '../images/github.png'
import trello from '../images/trello.png'
import sass from '../images/sass.png'
import netflix from '../images/netflix.png'
import social2 from '../images/social2.png'
import invader2 from '../images/invader2.png'
import KANAP1 from '../images/KANAP1.png'
import omf from '../images/omf.png'
import booki1 from '../images/booki1.png'
import piment1 from '../images/piment1.png'
import map1 from '../images/map1.png'
import phone2 from '../images/phone2.png'
import mail1 from '../images/mail1.png'

const Home = () => {
    return (
        <div>
            <Nav />
            <section id='home' className='home' >
                <div className='titre'>
                    <img className='cloud' src={cloud} alt="imgfond" ></img>
                </div>
                <div className='global1'>
                    <div className='global'>
                        <div className='decal'>
                            <div id='about' className='test1'><p className='nameis'>Hi my name is</p></div>
                            <div className='test2'>
                                <p>
                                    <span className='alim'>G</span>
                                    <span className='alim'>a</span>
                                    <span className='alim'>u</span>
                                    <span className='alim'>t</span>
                                    <span className='alim'>h</span>
                                    <span className='alim'>i</span>
                                    <span className='alim'>e</span>
                                    <span className='alim'>r </span>
                                    <span className='alim'>S</span>
                                    <span className='alim'>a</span>
                                    <span className='alim'>m</span>
                                    <span className='alim'>b</span>
                                    <span className='alim'>a</span></p>
                            </div>
                            <div className='test3'>I'm a Junior web </div>
                            <div className='test4'>Developer </div>
                            <div>
                                <p className='loc' >French Web Developer</p>  <p className='loc loc2'>   <i className="fa-solid fa-location-dot"></i> &nbsp;Paris, Vannes Openclassrooms & O'clock</p>
                            </div>
                        </div>
                    </div>
                    <div><a href='#work'><button className='view'>View Work  <i className="fa-solid fa-arrow-right"></i></button></a></div>
                </div>
            </section >
            <section> <a href='https://www.linkedin.com/in/gauthier-samba-seale-b6286b247/?originalSubdomain=fr'>  <div className='social'>LinkedIn <i className="fa-brands fa-linkedin"></i></div></a>
                <a href='https://github.com/GSSSAMBA'>  <div className='social1'>Github <i className="fa-brands fa-github"></i></div></a>
                <a href="mailto:gauthieredc@gmail.com">   <div className='social2'>E-mail <i className="fa-regular fa-envelope"></i></div></a></section>

            <section id='hello' className='iam effet'>
                <div className='ecarte'>
                    <div className='underline'><span className='ecart'>About</span></div>
                    <div><p className='nice'>Hello, I'm Gauthier Samba. Nice to meet you.</p></div>
                    <div><p className='nice2'>Passionate about computers and screens, I decided to<br></br> gather all these tools to make it my job. Family, travel, video<br></br> games and sport are part of my life.</p></div>
                </div>
            </section>
            <section >
                <div className='tools'>
                    <div id='titre-skill' className='skills-title'><p className='positionskill'><span className='under1'>SKILL</span></p></div>

                    <div className='container-skill'>
                        <div className='skilldiv'><img className='imgskill' src={html} alt="imgfond" ></img>
                            <p>HTML 5</p>
                        </div>
                        <div className='skilldiv'><img className='imgskill' src={css} alt="imgfond" ></img>
                            <p>CSS 3</p>
                        </div>
                        <div className='skilldiv'><img className='imgskill' src={javascript} alt="imgfond" ></img>
                            <p>Javascript</p>
                        </div>
                    </div>
                    <div className='container-skill'>
                        <div className='skilldiv'><img className='imgskill' src={node} alt="imgfond" ></img>
                            <p>NodeJs</p>
                        </div>
                        <div className='skilldiv'><img className='imgskill' src={react} alt="imgfond" ></img>
                            <p>ReactJs</p>
                        </div>
                        <div className='skilldiv'><img className='imgskill' src={Mongodb} alt="imgfond" ></img>
                            <p>MongoDB</p>
                        </div>
                    </div>
                    <div className='container-skill'>
                        <div className='skilldiv'><img className='imgskill' src={github} alt="imgfond" ></img>
                            <p>GitHub</p>
                        </div>
                        <div className='skilldiv'><img className='imgskill' src={trello} alt="imgfond" ></img>
                            <p>Trello</p>
                        </div>
                        <div className='skilldiv'><img className='imgskill' src={sass} alt="imgfond" ></img>
                            <p>Sass</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='skills' className='skills'>
                <div className='skills-title2'><p id='work' className='project'><span className='under1'>WORK</span></p></div>

                <div className='skills-container'>
                    <div className='skilldiv2 '>
                        <div className='skilldivpim '><a href='https://gsssamba.github.io/FRONT-NETFLIX-v1/'><p className='parahidden'>REPRODUCTION OF THE NETFLIX INTERFACE USING THE API GIVING ACCESS TO THE AMERICAN REAL TIME DATA BUILT WITH REACT JS</p><img className='imgskill1' src={netflix} alt="imgfond" ></img>
                            <p></p></a>
                        </div>
                        <a href='https://gsssamba.github.io/FRONT-NETFLIX-v1/'> <div className='essaibox'><p>SEE MORE</p></div></a>
                    </div>
                    <div className='skilldiv2 '>

                        <div className='skilldivpim  '><a href='https://bookiii.netlify.app/'><p className='parahidden'>ONE PAGE INTERFACE OF A TRAVEL BOOKING WEBSITE HTML/CSS</p><img className='imgskill1' src={booki1} alt="imgfond" ></img>
                            <p></p></a>
                        </div>
                        <a href='https://bookiii.netlify.app/'> <div className='essaibox'><p>SEE MORE</p></div></a>

                    </div>
                    <div className='skilldiv2 '>

                        <div className='skilldivpim '><a href='http://invader-gss.tk/'><p className='parahidden'>SPACE-INVADER GAME CLONE CREATED IN JAVASCRIPT</p><img className='imgskill1' src={invader2} alt="imgfond" ></img>
                            <p> </p></a>

                        </div>
                        <a href='http://invader-gss.tk/'><div className='essaibox'><p>SEE MORE</p></div></a>

                    </div>
                </div>

                <div className='skills-container'>
                    <div className='skilldiv2 '>
                        <div className='skilldivpim '><a href='https://gsssamba.github.io/FLAG-EX/'><p className='parahidden'>ALGORITHM FOR SORTING NATIONS ACCORDING TO CONTINENTS AND NUMBER OF INHABITANTS CREATED IN REACT JS</p><img className='imgskill1' src={map1} alt="imgfond" ></img>
                            <p></p></a>
                        </div>
                        <a href='https://gsssamba.github.io/FLAG-EX/'> <div className='essaibox'><p>SEE MORE</p></div></a>
                    </div>
                    <div className='skilldiv2 '>

                        <div className='skilldivpim  '><a href='https://0h-my-food.netlify.app/'><p className='parahidden'>DYNAMIC WEBSITE TO BOOK YOUR MENU IN DIFFERENT RESTAURANTS HTML/CSS</p><img className='imgskill1' src={omf} alt="imgfond" ></img>
                            <p></p></a>
                        </div>
                        <a href='https://0h-my-food.netlify.app/'> <div className='essaibox'><p>SEE MORE</p></div></a>

                    </div>
                    <div className='skilldiv2 '>

                        <div className='skilldivpim '> <a className='couleur' href="mailto:gauthieredc@gmail.com"><p className='parahidden'>REST API creation / User authentication / RGPD compliance / User MDP encryption NODE JS</p><img className='imgskill1' src={piment1} alt="imgfond" ></img>
                            <p> </p></a>
                        </div>
                        <a href="mailto:gauthieredc@gmail.com"> <div className='essaibox'><p>LET'S TALK ABOUT IT</p></div></a>

                    </div>
                </div>

                <div className='skills-container'>
                    <div className='skilldiv2 '>

                        <div className='skilldivpim  '> <a className='couleur' href="mailto:gauthieredc@gmail.com"><p className='parahidden'>Creation of an E-COMMERCE site for buying sofas online JAVASCRIPT</p><img className='imgskill1' src={KANAP1} alt="imgfond" ></img>
                            <p></p></a>
                        </div>
                        <a href="mailto:gauthieredc@gmail.com"> <div className='essaibox'><p>LET'S TALK ABOUT IT</p></div></a>

                    </div>
                    <div className='skilldiv2 '>

                        <div className='skilldivpim '> <a className='couleur' href="mailto:gauthieredc@gmail.com"><p className='parahidden'>Creation of a corporate social network (C.R.U.D/M.E.R.N)</p><img className='imgskill1' src={social2} alt="imgfond" ></img>
                            <p> </p></a>
                        </div>
                        <a href="mailto:gauthieredc@gmail.com"> <div className='essaibox'><p>LET'S TALK ABOUT IT</p></div></a>

                    </div>
                </div>

                <div className='skills-container'>
                    <div className='contact'>
                        <a className='mail' href="mailto:gauthieredc@gmail.com" alt="mail">
                            <button id='contact' className='btn-contact'>CONTACT</button></a>
                        <div className='contact2'>
                            <div className='contact3'>
                                <a className='num' href="tel:06.61.50.50.55" alt="phone-number">
                                    <img className='imgskill5' src={phone2} alt="imgfond" ></img></a>
                                <p class="espace"><a className='mail' href="tel:06.61.50.50.55" alt="phone-number">
                                    06.61.56.50.55</a></p>
                            </div>
                            <div className='contact3'>
                                <a className='num' href="mailto:gauthieredc@gmail.com" alt="mail">
                                    <img className='imgskill5' src={mail1} alt="imgfond" ></img></a>

                                <p class="espace"><a className='mail' href="mailto:gauthieredc@gmail.com" alt="mail">
                                    gauthieredc@gmail.com</a></p>                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;