import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
    {
        id: 1,
        title: "DIPL. TECHNIKER HF INFORMATIK, SOFTWARE DEVELOPING",
        years: "February 2021 - Present",
        content:
            "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
    },
    {
        id: 2,
        title: "INFORMATIKER EFZ, SOFTWARE DEVELOPING",
        years: "August 2017 - July 2021",
        content:
            "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
    }
];

function Education() {
    return (
        <section id="education">
            <div className="container">
                <Pagetitle title="Education"/>
                <div className="row">
                    <div className="col-md-6">
                        <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
                            {educationData.map((education) => (
                                <Timeline key={education.id} education={education}/>
                            ))}
                            <span className="line"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
