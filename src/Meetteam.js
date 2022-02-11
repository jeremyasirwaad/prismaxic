import women1 from './women1.jpg'
import { useEffect } from 'react';
import Aos from 'aos';
const Meetteam = () => {

  useEffect(() => {
    Aos.init({ duration: 1000, once: true})
  }, []);

    return ( 

<section id="team" class="team-area section5">
  <div class="container">
    <div class="row">
      <div class="col-md-12">

      </div>
    </div>
    <div class="row team-items" data-aos = "fade-up">
      <div class="col-md-4 single-item">
        <div class="item">
          <div class="thumb">
            <img class="img-fluid" src={women1} alt="Thumb" />
            <div class="overlay">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div class="social">
                <ul>
                  <li class="twitter">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li class="pinterest">
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                  </li>
                  <li class="instagram">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </li>
                  <li class="vimeo">
                    <a href="#"><i class="fab fa-vimeo-v"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="info">
            <span class="message">
              <a href="#"><i class="fas fa-envelope-open"></i></a>
            </span>
            <h4>Lorem Ipsum</h4>
            <span>Project Manager</span>
          </div>
        </div>
      </div>
      <div class="col-md-4 single-item">
        <div class="item">
          <div class="thumb">
            <img class="img-fluid" src="./man1.jpg" alt="Thumb" />
            <div class="overlay">
              <h4>Lorem Ipsum</h4>
              <p>
                kING.
              </p>
              <div class="social">
                <ul>
                  <li class="twitter">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li class="pinterest">
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                  </li>
                  <li class="instagram">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </li>
                  <li class="vimeo">
                    <a href="#"><i class="fab fa-vimeo-v"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="info">
            <span class="message">
              <a href="#"><i class="fas fa-envelope-open"></i></a>
            </span>
            <h4>Lorem Ipsum</h4>
            <span>App Developer</span>
          </div>
        </div>
      </div>
      <div class="col-md-4 single-item">
        <div class="item">
          <div class="thumb">
            <img class="img-fluid" src="./man2.jpg" alt="Thumb" />
            <div class="overlay">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div class="social">
                <ul>
                  <li class="twitter">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li class="pinterest">
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                  </li>
                  <li class="instagram">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </li>
                  <li class="vimeo">
                    <a href="#"><i class="fab fa-vimeo-v"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="info">
            <span class="message">
              <a href="#"><i class="fas fa-envelope-open"></i></a>
            </span>
            <h4>Lorem Ipsum</h4>
            <span>Web designer</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
     );
}
 
export default Meetteam;