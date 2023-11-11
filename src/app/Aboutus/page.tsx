"use client";
import { OrbitControls } from "@react-three/drei";
import React, { useState } from "react";
import GlitchTextNoMargin from "@/components/GlitchTextNoMargin";
import Sidebar from "@/components/sidebar";
import { Canvas } from "@react-three/fiber";
// import Brain from "@/components/brain";
import Image from "next/image";

import * as THREE from "three";
import IconBox from "../components/IconBox";
import VideoPlayer from "@/components/VideoPlayer";

function AboutUs() {
  const [menuOpened, setMenuOpened] = useState(false);

  const updateMenuOpened = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className="w-full h-screen bg-[#100404] flex flex-col overflow-y-auto over">
      <div className="flex justify-center items-center h-1/4">
        <div className="font-abc text-8xl">
          <div>
            <div className="absolute inset-y-0 left-0 w-16">
              <Sidebar
                menuOpened={menuOpened}
                updateMenuOpened={updateMenuOpened}
              />
            </div>    
            <button
              onClick={updateMenuOpened}
              className={`absolute z-100 top-0 -left-1 mt-5 hover:scale-110 hover:duration-300 ease-in-out hover:-rotate-3`}
            >
              <Image
                className="md:w-[2rem] lg:w-[3rem] ml-8 mr-1"
                src="/images/chisquare.png"
                width={160}
                height={160}
                alt="Company Logo"
                priority
              />
            </button>
          </div>
          
          <GlitchTextNoMargin displayText="ABOUT US"  uniqueKey="aboutus"/>
          
          
        </div>
      </div>
      <div className="flex flex-col flex-grow justify-start  text-6xl text-[#ff0000]">
        <div className="py-[2%] px-[1%] font-abc">
          <GlitchTextNoMargin
            displayText="WHO ARE WE ?"
            uniqueKey="whorewetext"
          />
        </div>
        <div className="bg-gradient-to-r from-transparent from-0% via-zinc-500 via-50% to-transparent to-100% min-h-[0.2vh] "></div>
        <div className="flex flex-around justify-evenly py-[2%] px-[2%] space-x-4 flex-grow  scrollbar-none">
          <div className="relative text-ellipsis bg-slate-300/10 p-[2%] flex-grow w-[50%] h-[50vh] text-xl text-justify text-[#f1eeee] overflow-y-auto scrollbar-none font-medium font-sans font-family-arial">
            <p>
              Chi SquareX Technologies is a leading DeepTech startup in India,
              specializing in providing cutting-edge research assistance
              solutions in the domains of Machine Learning, AI, Deep Learning,
              Computer Vision, and Natural Language Processing. Our services
              cater to a wide range of clients, including individual
              researchers, small-scale startups, and established corporations
              seeking professional assistance with their research projects. We
              take pride in our ability to consistently deliver high-quality
              research assistance, with a proven track record of completing 250+
              research projects and satisfying over 100 happy clients.Our team
              of highly skilled developers comprises graduates from the top
              IITs, NITs, and other prestigious institutions, who bring to the
              table a wealth of knowledge and experience.{" "}
            </p>
            <br></br>
            <p>
              {" "}
              At Chi SquareX Technologies, we are passionate about pushing the
              boundaries of research in AI and related fields. Our commitment to
              innovation is reflected in the multiple publications we have
              authored and the independent research we have conducted. We
              believe that innovation is key to addressing critical challenges
              in various sectors, and our solutions are designed to have a
              meaningful impact on society. Our services are aimed at providing
              customized and cost-effective research assistance solutions to our
              clients. We work closely with our clients to understand their
              unique needs and requirements, and then tailor our solutions to
              match their specific research goals. Our services include data
              analysis, model development, algorithm design, and optimization,
              among others. We take pride in our ability to provide personalized
              research assistance solutions that are efficient, effective, and
              impactful. Our goal is to help our clients achieve their research
              objectives and drive meaningful innovation in their respective
              fields. To learn more about our services, please visit our
              official website. Chi SquareX Technologies.
            </p>
            {/* <div className="absolute bg-gradient-to-t from-[#070202cb] from-20% via-[#070202a5] via-60% to-transparent to-100% w-full h-[15%] bottom-0 left-0">
          Shadow effect overlay BROKEN
          </div> */}
          </div>
          <div className="w-[50%]">
            {/* <Canvas camera={{ position: [0.2, 0.02, 0.2], near: 0.0001 }}>
              <ambientLight />
              {/* <OrbitControls/>  */}
              {/* <Brain
                x_Scale={1.3}
                y_Scale={1.3}
                z_Scale={1.3}
                position={new THREE.Vector3(0, 0, 0)}
              />
            // </Canvas> */} 
            <VideoPlayer/>
          </div>
        </div>
        <div className="bg-gradient-to-r from-transparent from-0% via-zinc-500 via-50% to-transparent to-100% min-h-[0.2vh]  overscroll-x-hidden"></div>
        <div className="flex flex-col mt-[5%]">
          <div className="flex justify-center font-abc">
            <GlitchTextNoMargin
              displayText="SERVICES WE PROVIDE"
              uniqueKey="services"
            />
          </div>
        </div>
        <div className="flex flex-col mt-[5%] h-[80%] w-[100%]">
          <div className="grid grid-flow-col justify-evenly mb-[5%] ">
            <IconBox
              imageUrl="/images/desktop.png"
              text="Our ML/AI blog writing services help businesses establish thought leadership in the field of AI and machine learning. We offer high-quality, informative blog content covering topics such as emerging industry trends, best practices for implementing AI, and the latest technological advancements. Our team of experienced writers and data scientists perform in-depth research and work closely with clients to ensure that each piece of content aligns with their brand and message. Contact us to learn more about how our ML/AI blog writing services can help your business succeed."
              heading="ML/AI blog writing services"
            />
            <IconBox
              imageUrl="/images/aibrain.png"
              text="Our Natural Language Processing (NLP) services include sentiment analysis, explanation regeneration, sentence and word tagging, machine translation, and multi-lingual models. We specialize in static word embeddings and language models such as BERT, RoBERTa, and ELECTRA. Our services help businesses better understand and communicate with their customers, improve operational efficiency, and gain a competitive edge."
              heading="Natural Language Processing"
            />
            <IconBox
              imageUrl="/images/robot.png"
              text="We provide comprehensive machine learning model implementation services to help businesses leverage the power of AI. Our services cover the entire ML development cycle, including data preparation, model training, optimization, and deployment. We specialize in developing custom ML models tailored to our clients' specific needs, using popular frameworks like TensorFlow and PyTorch. Our team of experienced ML professionals ensures that the models we develop are accurate, efficient, and scalable."
              heading="Machine Learning Models"
            />
          </div>
          <div className="grid grid-flow-col justify-evenly">
            <IconBox
              imageUrl="/images/application.png"
              text="Our computer vision models can be deployed using three methods, depending on the client's requirements. The first option is on-premises deployment, which involves installing and operating the model directly on the client's hardware or servers. This approach provides greater control and security over the model and data, but may require additional resources and technical expertise. The second option is cloud deployment, using services such as AWS, Azure, or Google Cloud. This method provides greater scalability, flexibility, and accessibility for the model and data, and eliminates the need for on-premises infrastructure. However, it may require ongoing maintenance and subscription costs."
              heading="Deployement services"
            />
            <IconBox
              imageUrl="/images/machine-learning.png"
              text="We provide comprehensive computer vision services using PyTorch, TensorFlow, and OpenCV. Our services include image classification, image captioning, and video classification models. We ensure accuracy and efficiency by performing feature engineering and data preprocessing techniques like data augmentation, feature extraction, and normalization. Our computer vision services help businesses better understand and analyze visual data for informed decision-making."
              heading="Computer Vision Models"
            />
            <IconBox
              imageUrl="/images/classification.png"
              text="At Chi SquareX Technologies, we provide ML consultancy services to help businesses navigate the complex field of machine learning and artificial intelligence. Our team of experienced data scientists and machine learning experts works closely with clients to understand their unique challenges and goals and provide customized solutions to meet their needs. Our ML consultancy services cover a wide range of topics, including data analysis and management, algorithm selection and development, model training and optimization, and deployment and monitoring. We also offer guidance on best practices for implementing machine learning in various industries, such as finance, healthcare, and manufacturing."
              heading="ML Consultancy services"
            />
          </div>

          {/* <div className="w-[100%] flex flex-wrap mt-[2%] border-t-red-600 rounded-xl">
  <div>1</div>
  <div>2</div>
</div> */}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
