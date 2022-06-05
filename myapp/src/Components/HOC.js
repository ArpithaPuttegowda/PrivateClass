import React, {Component} from "react";
import Hero from "./Hero";
import Button from "./HOC/Button";
import Hover from "./HOC/Hover";
import ResualbeComponents from "./ResualbeComponents";
import ErrorBoundary from "./ResualbleComponents/ErrorBoundary";
import ResualbeListComponent from "./ResualbleComponents/ResualbeListComponent";
import {ResualbleFunctionalList} from "./ResualbleComponents/ResualbleFunctionalList";
import ResubleTableComponent from "./ResualbleComponents/ResubleTableComponent";

export default class HOC extends Component {
  render() {
    return (
      <div>
        <Button></Button>
        <Hover></Hover>
        {/* <ResualbeComponents data={["RED", "BLUe", "Yellow"]} />
        <ResualbeListComponent data={["LILLY", "JASMIN", "LOTUS"]} /> */}
        <ResubleTableComponent
          headers={["Name", "Location"]}
          keys={["name", "loc"]}
          data={[
            {name: "Sachin", loc: "Mumbai"},
            {name: "Dhoni", loc: "Ranchi"},
            {name: "Kohli", loc: "Delhi"}
          ]}
        />
        <ResualbleFunctionalList data={["React", "Angular", "View"]} />
        <ErrorBoundary>
          <Hero heroName="NTR" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Allu Arjun" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Prabhas" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>
      </div>
    );
  }
}
