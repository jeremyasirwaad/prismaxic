import React, { useEffect } from 'react'
import Aos from 'aos'
export const Reviews = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="testimonials" style={{ marginBottom : "40px" }}>
  
    <div class="testimonial-heading meeteamh1">
        <h1 data-aos="zoom-in" style={{ fontSize : "clamp(2.5rem, 10vw, 5rem)"  }}>​​​​​​​What Our Client's Say</h1>
    </div>
    
    <div class="testimonial-box-container">

      <div class="testimonial-box" data-aos="fade-zoom-in">

        <div class="box-top">

          <div class="profile">
       
            <div class="profile-img">
              <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
            </div>
      
            <div class="name-user">
              <strong>Liam mendes</strong>
              <span>@liammendes</span>
            </div>
          </div>
    
          <div class="reviews">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>

          </div>
        </div>
  
        <div class="client-comment">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
        </div>
      </div>
  
      <div class="testimonial-box">
 
        <div class="box-top">
    
          <div class="profile">
    
            <div class="profile-img">
              <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
            </div>
  
            <div class="name-user">
              <strong>Noah Wood</strong>
              <span>@noahwood</span>
            </div>
          </div>

          <div class="reviews">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
  
          </div>
        </div>

        <div class="client-comment">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
        </div>
      </div>

      <div class="testimonial-box">
     
        <div class="box-top">
      
          <div class="profile">
      
            <div class="profile-img">
              <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
            </div>
        
            <div class="name-user">
              <strong>Oliver Queen</strong>
              <span>@oliverqueen</span>
            </div>
          </div>
    
          <div class="reviews">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
 
          </div>
        </div>

        <div class="client-comment">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
        </div>
      </div>
   
      <div class="testimonial-box">
       
        <div class="box-top">
        
          <div class="profile">
       
            <div class="profile-img">
              <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
            </div>
       
            <div class="name-user">
              <strong>Barry Allen</strong>
              <span>@barryallen</span>
            </div>
          </div>
      
          <div class="reviews">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
       
          </div>
        </div>
      
        <div class="client-comment">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
        </div>
      </div>
    </div>
  </section>
  )
}
