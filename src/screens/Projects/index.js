import React from "react";
import "./Projects.css";

const stories = [
  {
    title: "Two years later, Simpson story still being played out",
    date: "June 12",
  },
  { title: "PIs offer Simpson free sleuthing", date: "May 29" },
  { title: "Simpson depositions winding down", date: "May 26" },
  { title: "Simpson defends himself at Oxford", date: "May 15" },
  { title: "IRS slaps lien on O.J. Simpson's mansion", date: "May 14" },
  {
    title: "Fuhrman mum in deposition for Simpson civil suit",
    date: "April 29",
  },
  {
    title: "Nicole Simpson planned sexual encounter with Goldman, friend says",
    date: "April 2",
  },
  {
    title: "Former O.J. juror says she was victim of jury tampering",
    date: "April 1",
  },
  {
    title: "Officials probing possible jury tampering in Simpson trial",
    date: "March 30",
  },
  { title: "Fuhrman deposition delayed in Simpson case", date: "March 26" },
  {
    title: "Darden criticizes most players in Simpson case, but not Clark",
    date: "March 16",
  },
  { title: "Simpson recalls day of murders", date: "March 5" },
  { title: "Simpson denies events in ex-wife's diary", date: "March 3" },
  { title: "Simpson trial date moved to September", date: "March 1" },
  { title: "'Kato' says Nicole predicted her murder", date: "February 28" },
  { title: "Simpson's attorney angry over publicity", date: "February 28" },
  { title: "No settlement, Goldman family says", date: "February 27" },
  { title: "O.J.: He said... They said", date: "February 6" },
  { title: "Kim Goldman says she hates O.J.", date: "February 5" },
  { title: "Simpson case: Goldmans to be questioned", date: "February 5" },
  {
    title: "Simpson makes spontaneous call to 'Burden of Proof'",
    date: "February 5",
  },
  {
    title:
      "O.J. talks to CNN: Simpson makes spontaneous call to 'Burden of Proof'",
    date: "February 5",
  },
  {
    title: "Ron Goldman's sister questioned about her brother",
    date: "February 5",
  },
  { title: "Simpson case: Goldmans to be questioned", date: "February 5" },
  { title: "Simpson: Nicole invented abuse charges", date: "February 3" },
  {
    title: "Source: Simpson alibi conflicts with limo driver's testimony",
    date: "January 31",
  },
  { title: "Simpson deposition postponed for a week", date: "January 26" },
  { title: "Simpson: 'I couldn't kill anyone'", date: "January 25" },
  {
    title: "Simpson keeps low profile during day 3 of deposition",
    date: "January 24",
  },
  {
    title: "Goldman says hopes lifted by Simpson questioning",
    date: "January 23",
  },
  {
    title: "Simpson begins deposition in wrongful death suits",
    date: "January 23",
  },
  { title: "Simpson arrives to begin deposition", date: "January 22" },
  {
    title: "O.J. Simpson to speak to the court in civil case",
    date: "January 21",
  },
  { title: "Judge clears hurdle to Simpson deposition", date: "January 16" },
  { title: "O.J. Simpson deposition postponed", date: "January 14" },
];

const Projects = () => {
  return (
    <div className="more-stories">
      <h2>More stories</h2>
      <ul>
        {stories.map((story, index) => (
          <li key={index}>
            <a href="#">
              {story.title} - <span className="date">{story.date}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
