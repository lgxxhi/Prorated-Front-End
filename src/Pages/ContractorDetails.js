import React from "react";

function ContractorDetails() {
  // Sample data for a contractor
  const contractor = {
    name: "John Doe",
    jobTitle: "Electrician",
    location: "New York, NY",
    experience: "5 years",
    contact: "john.doe@email.com",
    phoneNumber: "555-123-4567",
    description:
      "John Doe is an experienced electrician with a passion for providing high-quality electrical services...",
  };

  return (
    <div>
      <h2>Contractor Profile</h2>
      <div>
        <h3>{contractor.name}</h3>
        <p>Job Title: {contractor.jobTitle}</p>
        <p>Location: {contractor.location}</p>
        <p>Experience: {contractor.experience}</p>
        <p>Contact: {contractor.contact}</p>
        <p>Phone Number: {contractor.phoneNumber}</p>
      </div>
      <div>
        <h4>About {contractor.name}</h4>
        <p>{contractor.description}</p>
      </div>
    </div>
  );
}

export default ContractorDetails;
