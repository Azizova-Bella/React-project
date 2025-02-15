import React from "react";
import paulImg from "../assets/paul.png";
import robertImg from "../assets/robert.png";
import dots from "../assets/dots.png";

const persons = [
  {
    id: 2,
    name: "Paul",
    title: "Owner at Paulcom",
    text: "Founded in 2001, Speach is specializing in providing innovative services such as website design, brand identity and marketing.",
    image: paulImg,
    company: "Paulcom",
  },
  {
    id: 3,
    name: "Paul",
    title: "Owner at Paulcom",
    text: "Projects for many large domestic and foreign corporations, enterprises in many areas such as science, banking, FBA, education, communication.",
    image: paulImg,
    company: "Paulcom",
  },
  {
    id: 1,
    name: "Robert",
    title: "Founder at Apple Inc.",
    text: "Founded in 2001, Speach is specializing in providing innovative services such as website design, brand identity and marketing.",
    image: robertImg,
    company: "Apple Inc.",
  },
  {
    id: 4,
    name: "Paul",
    title: "Owner at Paulcom",
    text: "Projects for many large domestic and foreign corporations, enterprises in many areas such as science, banking, FBA, education, communication.",
    image: paulImg,
    company: "Paulcom",
  },
];

function Persons() {
    return (
      <section className="testimonials">
        <div className="testimonials-container">
          {persons.map((person) => (
            <div 
              key={person.id}
              className={`testimonial-card ${person.id === 2 || person.id === 4 ? "transparent move-up" : ""}`}
            >
              <div className="image-container">
                <img src={person.image} alt={person.name} />
              </div>
              <div className="text-content">
                <h3>{person.name}</h3>
                <h4>{person.title}</h4>
                <p>{person.text}</p>
              </div>
              <div className="quote-symbol">
                <span>”</span>
              </div>
            </div>
          ))}
        </div>
        <img className="dots" src={dots} alt="" />
      </section>
    );
  }
export default Persons;
