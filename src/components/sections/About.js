import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";
import moment from "moment";

var end = moment();

const aboutContent = {
    name: "Bolby",
    avatarImage: "/images/avatar-2.svg",
    content:
        "I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at WordPress.",
};

const progressData = [
    {
        id: 1,
        title: "Development",
        percentage: 85,
        progressColor: "#FFD15C",
    },
    {
        id: 2,
        title: "UI/UX Design",
        percentage: 95,
        progressColor: "#FF4C60",
    },
    {
        id: 3,
        title: "Photography",
        percentage: 70,
        progressColor: "#6C6CE5",
    },
];

const counterData = [
    {
        id: 1,
        title: "Cups of coffee",
        count: end.diff(moment("2017-08-01"), "days"),
        icon: "icon-cup",
    },
    {
        id: 2,
        title: "Bottles of water",
        count: end.diff(moment("2001-09-22"), "days"),
        icon: "icon-drop",
    }
];

function About() {
    return (
        <section id="about">
            <div className="container">
                <Pagetitle title="About Me"/>
                <div className="row">
                    <div className="col-md-3">
                        <div className="text-center text-md-left">
                            <img src={aboutContent.avatarImage} alt={aboutContent.name}/>
                        </div>
                        <div className="spacer d-md-none d-lg-none" data-height="30"/>
                    </div>

                    <div className="col-md-9 triangle-left-md triangle-top-sm">
                        <div className="rounded bg-white shadow-dark padding-30">
                            <div className="row">
                                <div className="col-md-6">
                                    <p>{aboutContent.content}</p>
                                    <div className="mt-3">
                                        <a href="!#" className="btn btn-default">
                                            Download CV
                                        </a>
                                    </div>
                                    <div
                                        className="spacer d-md-none d-lg-none"
                                        data-height="30"
                                    />
                                </div>
                                <div className="col-md-6">
                                    {progressData.map((progress) => (
                                        <TrackVisibility
                                            once
                                            key={progress.id}
                                            className="progress-wrapper"
                                        >
                                            <Skill progress={progress}/>
                                        </TrackVisibility>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer" data-height="70"/>
                <div className="row fix-spacing">
                    {counterData.map((counter) => (
                        <div key={counter.id} className="col-md-3 col-sm-6">
                            <TrackVisibility once>
                                <Counter counterItem={counter}/>
                            </TrackVisibility>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
