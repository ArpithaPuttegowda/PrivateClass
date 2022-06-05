import React, {Component} from "react";
import Hero from "./Hero";
import ResualbeComponents from "./ResualbeComponents";
import ErrorBoundary from "./ResualbleComponents/ErrorBoundary";
import ResualbeListComponent from "./ResualbleComponents/ResualbeListComponent";
import {ResualbleFunctionalList} from "./ResualbleComponents/ResualbleFunctionalList";
import ResubleTableComponent from "./ResualbleComponents/ResubleTableComponent";

export default class Home extends Component {
  render() {
    return (
      <div>
        Home
        {/* <ResualbeComponents data={["Sachin", "DHONI", "Kohli"]} />
        <ResualbeListComponent data={["RED", "BLUE", "YELLOW"]} /> */}
        <ResubleTableComponent
          headers={["Color", "Sweet"]}
          keys={["color", "sweet"]}
          data={[
            {color: "red", sweet: "Jamun"},
            {color: "white", sweet: "Peda"}
          ]}
        />
        <ResualbleFunctionalList data={["NTR", "Prabhas", "Mahesh"]} />
        <>
          <ErrorBoundary>
            <Hero heroName="NTR" />
            <Hero heroName="Allu Arjun" />
            <Hero heroName="Prabhas" />
          </ErrorBoundary>
        </>
      </div>
    );
  }
}
