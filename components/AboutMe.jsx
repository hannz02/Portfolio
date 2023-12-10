import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

//1d
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-2">
                <li>JAVA</li>
                <li>C-Programming</li>
                <li>C++t</li>
                <li>Python</li>
                <li>R-Programming</li>
                <li>SAS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
                <li>Python</li>
          </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
          <ul className="list-disc pl-2">
            <li>ETH Singapore</li>
            <li>ETH KL</li>
            <li>ETH Online</li>
            <li>ETHGlobal Superhack</li>
            <li>Solana Hyperdrive</li>
            <li>APUBCC Sparkathon</li>
            <li>Encode Club</li>
            <li>Google CTF</li>
            <li>NUS Grey CTF</li>
            <li>Tune Protect Hackathon</li>
            <li>geNFesT Ideathon</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
                <li>Asia Pacific University</li>
                <li>SMJK Chung Ling</li>
          </ul>
        ),
    }
];
//1
const AboutMe = () => {
    //1b
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return(
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                    <img src="/AboutMe.png" alt="About Me" width={450} height={450} style={{ borderRadius: "25px" }}/>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">The person above, ya, that's me right there, the name I was given with is Kor Yu Hann, I'm currently 21, one would say that this is the prime year for a person, I couldn't agree more. Througout these 21 years, I learned a lot about life, I'm not saying that I am the best because of this, I am still striving for the best of course, what I am trying to say is that I learned a lot to become the person I am today, I do have my flaws, and these flaws are what prepared me to face what I am about to face in the future. </p>
                    <div className="flex flex-row mt-8">
{/* 1e */}
                        <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active= {tab === "skills"}
                        >
                            
                            Skills
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experiences")}
                        active= {tab === "experiences"}
                        >
                            {" "}
                            Experiences{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active= {tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
export default AboutMe;
