import { useState } from "react";
import "./App.css";
import data from "./Component/data";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function App() {
  const [jobs, setJobs] = useState(data);
  const [value, setValue] = useState(0);
  const { title, dates, duties, company, id } = jobs[value];
  return (
    <>
      <section className="section-center">
        <h1>Experience</h1>
        <div className="underline"></div>
        <div className="job-center">
          {/* buttons */}
          <div className="btn-container">
            {jobs.map((job, index) => {
              return (
                <button
                  className="company-btn"
                  key={index}
                  onClick={() => setValue(index)}
                >
                  {job.company}
                </button>
              );
            })}
          </div>

          <article className="job-info">
            <h3 className="title">{title}</h3>
            <h4 className="company">{company}</h4>
            <p>{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div className="duty" key={index}>
                  <MdOutlineKeyboardDoubleArrowRight className="icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
        <button className="btn">More info</button>
      </section>
    </>
  );
}

export default App;
