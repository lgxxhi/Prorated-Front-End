import React from "react";
import "./ProjectListingsCards.scss";
import { MdElectricBolt } from "react-icons/md";
import { LuTrees } from "react-icons/lu";
import { IoConstructOutline } from "react-icons/io5";

function ProjectListingsCards() {
  return (
    <div>
      <div className="project-card">
        <div className="project-card__image">
          <img alt="#" src="https://picsum.photos/200/300" />
        </div>
        <div className="project-card__content">
          <h4>
            <MdElectricBolt />
            Outlet Issues
          </h4>
          <p>
            I have an outlet that's not working at all, no power is being
            generated from it.
          </p>
        </div>
      </div>
      <div className="project-card">
        <div className="project-card__image">
          <img alt="#" src="https://picsum.photos/200/300" />
        </div>
        <div className="project-card__content">
          <h4>
            <LuTrees />
            Tree Pruning
          </h4>
          <p>
            I have a tree that needs pruning. It's getting a bit out of hand.
          </p>
        </div>
      </div>
      <div className="project-card">
        <div className="project-card__image">
          <img alt="#" src="https://picsum.photos/200/300" />
        </div>
        <div className="project-card__content">
          <h4>
            <IoConstructOutline />
            Tile Intallation
          </h4>
          <p>
            I'm currently in the process of renovating my kitchen and I've
            decided to install new tiles. The total area is roughly 500 square
            feet. I've alreadt purchased the tiles and other necessary supplies.
            I'm looking for a professional who can handle the installation. The
            work will involve removing the old flooring. Preparing the surface,
            laying the tiles, and grouting. I'd like the work to be completed
            within the next month.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectListingsCards;
