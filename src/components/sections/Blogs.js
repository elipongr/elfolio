import React from "react";
import Pagetitle from "../elements/Pagetitle";

const allBlogs = [
    {
        id: 1,
        title: "5 Best App Development Tool for Your Project",
        image: "images/blog/1.svg",
        filesource: "../../blogs/best-app-development-tool.md",
        date: "09 February, 2020",
        author: "Bolby",
        category: "Reviews",
    },
    {
        id: 2,
        title: "Common Misconceptions About Payment",
        image: "images/blog/2.svg",
        filesource: "../../blogs/common-misconceptions-about-payment.md",
        date: "07 February, 2020",
        author: "Bolby",
        category: "Tutorial",
    },
    {
        id: 3,
        title: "3 Things To Know About Startup Business",
        image: "images/blog/3.svg",
        filesource: "../../blogs/things-to-know-about-startup-business.md",
        date: "06 February, 2020",
        author: "Bolby",
        category: "Business",
    },
];

function Blogs() {
    return (
        <section id="blog">
            <div className="container">
                <Pagetitle title="Latest Posts"/>
                <div className="spacer" data-height="30"></div>
                <p>Coming soon... </p>
            </div>
        </section>
    );
}

export default Blogs;
