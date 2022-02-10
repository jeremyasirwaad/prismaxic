import React from 'react';
import Meetteam from './Meetteam'
import { ReactPhotoCollage } from "react-photo-collage";

const setting = {
  width: '100%',
  height: ['250px', '170px'],
  layout: [1, 4],
  photos: [
    { source: '/web1.jpg/' },
    { source: '/web2.jpg/' },
    { source: '/web3.jpg/' },
    { source: '/web4.png/' },
    { source: '/web4.jpg/' },
    { source: 'url/image-6.jpg' },
  ],
  showNumOfRemainingPhotos: true
};

const Landing = () => {
    return (
      <div>
      <div >
      <section className='text-dark  bgimg'>
        <div className="blackwrap p-5">
          <div className='container sec1cont'>
              <div className='landtextcont'>
                  <h1 className='landtextt1'>We Provide Solution To All Your Business Requirements.
                  </h1>
                <span className='exwhatsin'>Experience What's Inside</span>
                  <div>
                  <button className='button1'>
                    <span>Lets Talk</span>
                  </button>
                  </div>
              </div>
          </div>
        </div>
      </section>

      <section className=' text-dark sec2 bg-light text-center'>
        <div className='container'>
          <div className='sec2title'>
            <span className='sec2t1'>What We Do ?</span>
            <span>"We aim to provide a seamless
              growth strategy and services to
              remove process bottlenecks
              Our process is simple. We understand
                our clients’ vision and then consolidate
                multiple strategies that fetches results"
              </span>
          </div>
        </div>
      </section>


      <section className='pt-5 text-dark'>
          <div className="container  mt-3 sec3cont">
              <h1 className='sec3ti'> <span style={{color:"red"}}>Industries</span> We Serve</h1>
              <div className='industdiv'> 
                  <div className="indust1">
                    <img src="/img1.jpg/" alt="" />
                    <div className='indtextpad'><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti veniam, fugiat ratione sapiente tempora </span></div>
                  </div>
                  <div className="indust1">
                    <img src="/img2.jpg/" alt="" />
                    <div className='indtextpad'><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti veniam, fugiat ratione sapiente tempora </span></div>
                  </div>
                  <div className="indust1">
                    <img src="/img3.jpg/" alt="" />
                    <div className='indtextpad'><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti veniam, fugiat ratione sapiente tempora </span></div>
                  </div>
                  <div className="indust1">
                    <img src="/img4.jpg/" alt="" />
                    <div className='indtextpad'><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti veniam, fugiat ratione sapiente tempora </span></div>
                  </div>
                  <div className="indust1">
                    <img src="/img5.jpg/" alt="" />
                    <div className='indtextpad'><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti veniam, fugiat ratione sapiente tempora </span></div>
                  </div>
                  <div className="indust1">
                    <img src="/img6.jpg/" alt="" />
                    <div className='indtextpad'><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti veniam, fugiat ratione sapiente tempora </span></div>
                  </div>
                  <div className="indust1">
                    <img src="/img7.jpg/" alt="" />
                    <div className='indtextpad'><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti veniam, fugiat ratione sapiente tempora </span></div>
                  </div>
                  <div className="indust1">
                    <img src="/img8.jpg/" alt="" />
                    <div className='indtextpad'><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti veniam, fugiat ratione sapiente tempora </span></div>
                  </div>
              </div>
          </div>
      </section>

      <section className='bg-dark text-light mt-5 sec4'>
        <div className="container sec4cont"> 
        <div className="sec4textcont">
          <h1>Our Latest <span style={{ color: "red" }}>Projects</span></h1>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt nostrum voluptate praesentium nisi, eveniet itaque corrupti culpa vel nobis veritatis labore cumque quod doloremque architecto sequi maxime blanditiis. Eius temporibus corrupti consectetur ipsa dolorum, enim praesentium magnam, omnis error nihil iusto 
            quis itaque placeat suscipit est delectus sapiente commodi officia Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus quae minima nulla commodi assumenda? Eaque voluptates debitis explicabo veritatis a maiores omnis autem dolore esse maxime, facere accusamus quos.</span>
        </div> 
        <div className="caro">
          <ReactPhotoCollage {...setting} />
        </div>
        </div>
        </section>

        <section className='pt-5'>
            <div className="meetcont container">
            <h1 className='meeteamh1'>Meet our Team</h1>
           <Meetteam />
            </div>
        </section>

        <section>

        </section>
    </div>
        </div>
    );
}

export default Landing;
