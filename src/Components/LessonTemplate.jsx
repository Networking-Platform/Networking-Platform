import { Link, useParams } from "react-router-dom";

import "reactflow/dist/style.css";
import "../Styles/Navigation.css";
import "../Styles/mainDrag&Drop.css";
import "../Styles/nodeBottomBar.css";
import FlowChartTemplate from "./FlowChartTemplate";
import SideBarTemplate from "./SideBarTemplate";
import CustomNode from "../Components/CustomNode";
import Navigation from "./utils/Navigation";
import FloatingEdge from "./FloatingEdge";
import CustomConnectionLine from "./CustomConnectionLine";
import LessonNavigation from './utils/LessonNavigation';

export default function LessonTemplate({
  backToHomeHandler,
  aboutUsHandler,
  contactHandler,
  FAQHandler,
  ProfileHandler,
  ProgressHandler,
}) {
  const { id } = useParams();
  const lesson_file = require("../Lesson/" + id + ".json");
  const answer = require("../Images/" + id + "_answer.png");

  return (
    <div id="outercontainer">
      <LessonNavigation
        username="Kelvin"
        redirects={
          [
            { page_name: 'Home', page_handler: backToHomeHandler },
            { page_name: 'Progress', page_handler: ProgressHandler },
            { page_name: lesson_file.lesson, page_handler: () => {} }
          ]}

      />
      <div className="innercontainer">
        <h2>{lesson_file.lesson}</h2>
        <div className="instruction">
          {lesson_file.analogy.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
        <div className="panel">
          Game Challenge
          <button className="runbutton">Run</button>
          <button className="helpbutton">Help</button>
          <button className="savebutton">Save</button>
        </div>
        <FlowChartTemplate
          lesson={lesson_file.lesson}
          options={lesson_file.options}
        />
        <SideBarTemplate nodes={lesson_file.nodes} />
        <div className="explannation">
          <h2>The explannation for the game challenge</h2>
          <p>{lesson_file.explannation}</p>
          <p>Following is the example answer for the challenge.</p>
          <img
            className="imagecontainer"
            src={answer}
            alt="Description of the image"
          />

          <div className="instruction">
            <h2>Actual Logic</h2>
            {lesson_file.actual_logic.map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
