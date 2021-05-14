import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const experienceData = [
    {
        id: 1,
        title: "APPRENTICE INFORMATIKER EFZ, SOFTWARE DEVELOPING",
        years: "2017 - Present",
        content: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto."

    }
];

function Experience() {
    return (
        <section id="experience">
            <div className="container">
                <Pagetitle title="Experience"/>
                <div className="row">
                    <div className="col-md-6">
                        <div className="spacer d-md-none d-lg-none" data-height="30"/>
                        <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
                            {experienceData.map((experience) => (
                                <Timeline key={experience.id} education={experience}/>
                            ))}
                            <span className="line"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
