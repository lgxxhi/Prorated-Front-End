import React from "react";

function ContractorDetails() {
  const contractor = {
    name: "John Doe",
    jobTitle: "Electrician",
    location: "New York, NY",
    experience: "5 years",
    contact: "john.doe@email.com",
    phoneNumber: "555-123-4567",
    description:
      "John Doe is an experienced electrician with a passion for providing high-quality electrical services...",

    profileImageSrc: "path_to_image.jpg",

    pastJobs: [
      {
        title: "Job 1",
        reviews: ["Great job! Very professional.", "Excellent workmanship."],
      },
      {
        title: "Job 2",
        reviews: ["Highly recommended.", "Outstanding service."],
      },
    ],
    servicesOffered: [
      "Electrical Wiring",
      "Fixture Installation",
      "Troubleshooting",
    ],
  };

  return (
    <div>
      <h2>Contractor Profile</h2>
      <div>
        <h3>{contractor.name}</h3>
        <img src={contractor.profileImageSrc} alt={contractor.name} />
        <p>Job Title: {contractor.jobTitle}</p>
        <p>Location: {contractor.location}</p>
        <p>Experience: {contractor.experience}</p>
        <p>Contact: {contractor.contact}</p>
        <p>Phone Number: {contractor.phoneNumber}</p>
      </div>
      <div>
        <h3>About {contractor.name}</h3>
        <p>{contractor.description}</p>
      </div>
      <div>
        <h3>Past Jobs</h3>
        <ul>
          {contractor.pastJobs.map((job, index) => (
            <li key={index}>
              {job.title}
              <ul>
                {job.reviews.map((review, reviewIndex) => (
                  <li key={reviewIndex}>{review}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Services Offered</h3>
        <ul>
          {contractor.servicesOffered.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContractorDetails;
