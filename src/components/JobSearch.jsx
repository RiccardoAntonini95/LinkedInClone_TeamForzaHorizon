//https://strive-benchmark.herokuapp.com/api/jobs?company=Olla
//https://strive-benchmark.herokuapp.com/api/jobs?category=writing&limit=10
//https://strive-benchmark.herokuapp.com/api/jobs?search=query
//npm i dompurify per dangerouslySetiInnerHTML
import { Row, Col } from "react-bootstrap";
import JobList from "./JobList";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const provaOlla = {
    "data": [
    {
    "_id": "613f8897c1c0b3646447b283",
    "url": "https://remotive.io/remote-jobs/all-others/project-manager-857981",
    "title": "Project Manager",
    "company_name": "Collabora",
    "category": "All others",
    "job_type": "full_time",
    "publication_date": "2021-08-29T17:53:08.000Z",
    "candidate_required_location": "Anywhere",
    "salary": "",
    "description": "<div><span style=\"font-size: 11pt;\">We're looking for an enthusiastic Project Manager with a strong technical background to join our distributed and fast-paced Delivery Team, managing multiple technical projects across various different sectors.</span></div>\n<div> </div>\n<div><strong style=\"font-size: 11pt;\">The Role</strong></div>\n<div> </div>\n<div><span style=\"font-size: 11pt;\">Your involvement with the projects will begin early in the life-cycle, when you will be supporting the preparation of technical and commercial proposals, and you will continue with the projects through to their successful delivery to clients, and hopefully follow-up sales.</span></div>\n<div> </div>\n<div><span style=\"font-size: 11pt;\">You will manage the client relationships and be the focal point for all communications. This will require you to both think about the projects at a high level while at the same time understanding the projects at a detailed level.</span></div>\n<p><br><br></p>\n<div class=\"h3\">What's in it for you?</div>\n<ul>\n<li>Technically challenging environment, where your opinions and ideas are listened to</li>\n</ul>\n<ul>\n<li>Large degree of autonomy within the role (no micro-management)</li>\n</ul>\n<ul>\n<li>Opportunity to learn from others and pick up new skills. Our Project Managers and Engineers are responsible for feeding back to each other in an effort to improve overall process</li>\n</ul>\n<ul>\n<li>Culturally diverse and inclusive environment</li>\n</ul>\n<p><br><br></p>\n<div class=\"h3\">Key Responsibilities</div>\n<ul>\n<li>Manage a number of Open Source technology projects of various sizes and complexities</li>\n</ul>\n<ul>\n<li>Understand customers needs and what makes them successful – apply these to deliver successful projects and explore future business opportunities</li>\n</ul>\n<ul>\n<li>Manage and motivate project teams to ensure project success. As our clients and project engineers are globally distributed, certain flexibilities in working practices will be required according to customers' and engineers' needs.</li>\n</ul>\n<ul>\n<li>Weekly project financial updates and appropriate actions to ensure projects are successful and profitable</li>\n</ul>\n<ul>\n<li>Support the optimization of current processes and define new ones for continuous improvements according to the business needs</li>\n</ul>\n<ul>\n<li>Customer visits and international travel as required</li>\n</ul>\n<p><br><br></p>\n<div class=\"h3\">Technical Requirements</div>\n<ul>\n<li>Account management, including stakeholder and commercial management of the engagement</li>\n</ul>\n<ul>\n<li>Full life-cycle project management, including planning, execution, reporting, and financials</li>\n</ul>\n<ul>\n<li>Able to spot risks and mitigate/workaroundthem before they develop into issues</li>\n</ul>\n<ul>\n<li>Hands-on experience of real-time embedded systems (e.g. in terms of testing, build and integration, release and defect management), ideally in an open source environment</li>\n</ul>\n<ul>\n<li>Agile software development methodologies</li>\n</ul>\n<ul>\n<li>Experience of running highly distributed project teams across multiple time zones would be a great advantage</li>\n</ul>\n<p><br><br></p>\n<div class=\"h3\">Qualifications</div>\n<ul>\n<li>Fluent in English (and French if based in Montreal)</li>\n</ul>\n<ul>\n<li>Good bachelor’s degree in relevant field</li>\n</ul>\n<ul>\n<li>Knowledge or experience working in an ISO 9001 and/or ISO 27001 environment would be an asset</li>\n</ul>\n<ul>\n<li>Professional project management qualification would be an advantage</li>\n</ul>\n"
    },
    {
    "_id": "613f8897c1c0b3646447b2b6",
    "url": "https://remotive.io/remote-jobs/software-dev/principal-software-engineer-857980",
    "title": "Principal Software Engineer",
    "company_name": "Collabora",
    "category": "Software Development",
    "job_type": "full_time",
    "publication_date": "2021-08-28T05:39:54.000Z",
    "candidate_required_location": "Anywhere",
    "salary": "",
    "description": "<div>Collabora is looking for a Principal Software Engineer to lead our Internal Systems Development team. </div>\n<div> </div>\n<div>The Internal Systems Development team supports and develops the software tools used within the company to deliver client projects and efficiently run the day-to-day business operations. The team does not directly work on client projects, however our internal systems are growing and, as part of that we are also in the process of engaging Open Source communities for the projects we use.</div>\n<div> </div>\n<div>Working with a diverse set of internal stakeholders (including Engineering, Delivery, Sysadmin, People Operations, Finance and Sales/Marketing), you will own and be accountable for the technology roadmap for Collabora's internal systems driving best practices and architecture. You will be an experienced Software Developer with DevOps experience, augmenting the expertise of the team around you. </div>\n<div> </div>\n<div> In this position you will help  advance our presence in the Open Source world.</div>\n<div> </div>\n<div><strong>What can you expect to work on ?</strong></div>\n<div> </div>\n<div>Collabora naturally uses Open Source software within its business processes. Some of our tools are developed in-house and others are customised from open source projects to suit our use cases. Examples of our software tools include: GitLab (with GitLab CI), Docker, Grafana, MariaDB, SuiteCRM, Phabricator, OTRS, Hugo, Chef, and an in-house developed Django application, among others.</div>\n<div> </div>\n<div>You will be leading the Internal Systems Development team in designing and improving tools architecture, security, integration and managing technical debt, as well as working and liaising with the infrastructure team to ensure adequate deployment processes and optimal configuration. You will be working across all parts of Collabora to understand tooling needs.</div>\n<p><br><br></p>\n<div class=\"h3\">Essential Skills</div>\n<ul>\n<li>Fluent in Python/Django, conversant in PHP</li>\n</ul>\n<ul>\n<li>Strong familiarity with Docker, Kubernetes, CI infrastructure, and modern web application deployment and monitoring</li>\n</ul>\n<ul>\n<li>Relevant experience designing and developing web applications</li>\n</ul>\n<ul>\n<li>Experience with schema design, data processing, and database query profiling</li>\n</ul>\n<ul>\n<li>Sound and demonstrable understanding of programming and system and database administration concepts</li>\n</ul>\n<ul>\n<li>Sound and demonstrable understanding of modern service deployment models and techniques</li>\n</ul>\n<ul>\n<li>Expertise in analysing and improving data models to improve performance and functionality</li>\n</ul>\n<ul>\n<li>Demonstrable experience developing new features and solutions to connect internal and external tools</li>\n</ul>\n<ul>\n<li>Designing and developing REST APIs</li>\n</ul>\n<ul>\n<li>Excellent Stakeholder management skills</li>\n</ul>\n<ul>\n<li>Experience technically leading a team and providing input into performance reviews for team members</li>\n</ul>\n<ul>\n<li>Open source oriented thinking to understand how to leverage Open Source in our internal system and contribute back to the community.</li>\n</ul>\n<p><br><br></p>\n<div class=\"h3\">Desirable Skills</div>\n<ul>\n<li>Knowledge of open source development methodologies</li>\n</ul>\n<ul>\n<li>Contributions to relevant open source projects</li>\n</ul>\n<ul>\n<li>Skills in other modern languages (Go / Rust / Ruby) as well as frameworks such as Ruby on rails.</li>\n</ul>\n<ul>\n<li>Familiarity with GitLab CI is preferred</li>\n</ul>\n<ul>\n<li>Self-motivated and reliable, with a demonstrable passion for learning and collaboration</li>\n</ul>\n<ul>\n<li>Able to work autonomously, understand a wide context and set priorities for self and others</li>\n</ul>\n<ul>\n<li>Good interpersonal skills</li>\n</ul>\n<ul>\n<li>Good English proficiency (both verbal and written)</li>\n</ul>\n<ul>\n<li>Ability to work in an online distributed environment</li>\n</ul>\n<div><strong>Who are we?</strong></div>\n<div> </div>\n<div>Our raison d’être is to accelerate the adoption of Open Source technologies, methodologies &amp; philosophy. We strive towards this goal by providing consulting services specialized in bringing companies and the Open Source community together. Being part of the Open Source community, we believe in a world of shared knowledge and collaboration for the advancement of humanity and we are always enthusiastic about sharing, teaching and learning with everyone around us.</div>\n<div> </div>\n<div>Our highly technical and talented team, distributed across 25+ geographies all over the world, brings deep technical expertise in system integration &amp; architecture, linux kernel, graphics, multimedia, web engines and communications to a number of market verticals, including mobile, IVI / automotive, set top box / smart TV, and a range of other specialized embedded applications (low-latency audio/video, audio/video streaming solutions, audio/video editing...).</div>\n"
    },
    {
    "_id": "613f8897c1c0b3646447b2e3",
    "url": "https://remotive.io/remote-jobs/hr/recruitment-consultant-859827",
    "title": "Recruitment Consultant",
    "company_name": "Whitecollars",
    "category": "Human Resources",
    "job_type": "full_time",
    "publication_date": "2021-08-26T01:58:49.000Z",
    "candidate_required_location": "Anywhere",
    "salary": "",
    "description": "<p><br><br></p>\n<div class=\"h3\">Company Description</div>\n<p>We are a group of HR Consultants who work day-in and day-out together to provide a full range of Recruitment and HR solutions.</p>\n<p>We work with amazing clients in several regions around the world, including the Middle East, the United States, and Europe in diversified sectors such as Technology, Manufacturing, Oil and Gas, Retail and much more.</p>\n<p>We are currently expanding and we are hiring a fully remote Recruitment Consultant to join our operations team.</p>\n<p><br><br></p>\n<div class=\"h3\">Job Description</div>\n<ul>\n<li>Communicate with clients to get a clear view of their hiring needs and organizational goals.</li>\n<li>Develop solutions for complex client situations to meet goals and objectives.</li>\n<li>Develop recruitment and selection strategy for each new position; define the most suitable recruitment techniques and channels as well as the most efficient selection process.</li>\n<li>Implement different techniques and methods to source high-quality potential candidates to feed the pool of potential candidates.</li>\n<li>Shortlist candidates across job descriptions and person specifications to choose the most suitable candidates.</li>\n<li>Conduct screening calls with the shortlisted candidate to determine their suitability.</li>\n<li>Conduct competency-based interviews with applicants to assess a candidate’s suitability.</li>\n<li>Liaise and lead correspondences with candidates and hiring managers during the whole process of recruitment.</li>\n<li>Organize documentation within the whole process including, CVs, applications, assessment forms and job descriptions.</li>\n<li>Maintain the applicant-tracking system updated on a regular basis.</li>\n<li>Provide periodical status reports about the accounts under responsibility to  direct supervisor.</li>\n</ul>\n<p><br><br></p>\n<div class=\"h3\">Qualifications</div>\n<ul>\n<li>Bachelor's degree in business administration or any related field.</li>\n<li>Experience in conducting competency-based interviews.</li>\n<li>Preferred to have a certificate in Human Resources Management.</li>\n<li>4-6 years of work experience in Recruitment and Selection.</li>\n<li>Fluent English speaker.</li>\n<li>Experience using “Applicant Tracking systems” ATS</li>\n<li>Expert user of recruitment portals and worldwide job boards.</li>\n<li>Professional user of MS Office and Google sheet.</li>\n</ul>\n<p><br><br></p>\n<div class=\"h3\">Additional Information</div>\n<p>This is a 100% remote role that needs :</p>\n<ul>\n<li>Ability to work independently.</li>\n<li>Strong written and oral communication skills.</li>\n<li>Comfort in learning and using digital tools.</li>\n<li>Be a team player and have cross-cultural literacy.</li>\n<li>Reliable and secure equipment (stable internet connections &amp; sufficient computer).</li>\n</ul>\n"
    },
    {
    "_id": "613f8899c1c0b3646447b4ef",
    "url": "https://remotive.io/remote-jobs/product/senior-product-manager-international-799530",
    "title": "Senior Product Manager - International",
    "company_name": "Dwolla",
    "category": "Product",
    "job_type": "full_time",
    "publication_date": "2021-08-03T01:44:48.000Z",
    "candidate_required_location": "USA Only",
    "salary": "",
    "description": "<div>Dwolla is one of the fastest growing financial technology companies in the United States and has been recognized as one of the world’s most innovative companies. We believe in challenging the status quo and building teams with diverse experiences, ideas and people. Joining the team at Dwolla means entering an always evolving, fast-paced, remote-first work environment. Your unique skills and talents will help build a world that can move money simply and securely, giving businesses the tools they need to access the ACH or RTP® Networks and improve their payment processes. At Dwolla, we are never done.</div>\n<div> </div>\n<div>As a member of our product team, the Senior Product Manager will guide Dwolla’s creation of strategic initiatives to build and optimize the product suite on a global stage. Our Senior Product Manager will collaborate with software engineers, UX designers, and delivery managers to deliver products to delight our customers domestically and beyond.  The Senior Product Manager will serve as the directing mind of a chosen initiative and lead progress up, down and across the organization.  This will be achieved through the use of principles, process, measurements and framework to allow teams to innovate quickly.</div>\n<div> </div>\n<div>The Senior Product Manager will own their respective product and build a deep knowledge of Dwolla’s funds flows and payment types.  Additionally, the Senior Product Manager will expand the Dwolla platform through new, cross-border funds flows.  The Senior Product Manager will have the opportunity to own and be accountable for product success by managing the full product life cycle.</div>\n<p><br><br></p>\n<div class=\"h3\">RESPONSIBILITIES:</div>\n<ul>\n<li>Responsible for building and owning elements of the product roadmap, talking with customers, gathering functional requirements, and collaborating on the user experience in conjunction with product team members, software engineers, and internal stakeholders.</li>\n</ul>\n<ul>\n<li>Prioritize projects across the entire organization to align with company strategy and priorities across teams.</li>\n</ul>\n<ul>\n<li>Lead supporting global money movement including the discovery and delivery of new payment flows, banking partner integrations and associated features and functionality.</li>\n</ul>\n<ul>\n<li>Research, identify and prioritize approach and sequencing of country and currency additions.</li>\n</ul>\n<ul>\n<li>Contribute to product roadmap and facilitate stakeholder discussions through ownership of a portfolio of initiatives.</li>\n</ul>\n<ul>\n<li>Be a passionate product advocate and champion user needs.</li>\n</ul>\n<ul>\n<li>Collaborate with and inspire internal partners (e.g. leadership, development, design, communications, finance, marketing, risk, legal, etc) to execute the overall product vision and strategy</li>\n</ul>\n<ul>\n<li>Foster excellence in software design and development and execute successful delivery of product enhancements.</li>\n</ul>\n<ul>\n<li>Track and analyze product success metrics to understand impact of releases and future product improvements.</li>\n</ul>\n<ul>\n<li>Perform competitive analysis and research to uncover and evaluate product strategies across leading SAAS companies.</li>\n</ul>\n<ul>\n<li>Promote and lead Product-led growth strategies to drive customer acquisition, expansion, conversion and retention.</li>\n</ul>\n<ul>\n<li>Engage internal and external users to better understand their goals and challenges.</li>\n</ul>\n<ul>\n<li>Partner with the user experience team to facilitate opportunities for product discovery, usability testing and customer feedback.</li>\n</ul>\n<ul>\n<li>Be the go-to product expert for sales, marketing, and account management teams.</li>\n</ul>\n<p><br><br></p>\n<div class=\"h3\">DESIRED SKILLS AND EXPERIENCE:</div>\n<ul>\n<li>Four to eight plus years of experience in product management with a consumer-facing or B2B products</li>\n</ul>\n<ul>\n<li>Four or more years experience in financial services (payments focus is ideal).</li>\n</ul>\n<ul>\n<li>Four or more years experience in global money movement (FX, remittances, disbursements, etc)</li>\n</ul>\n<ul>\n<li>Understanding of Internationalization and data protection schemes supporting global money movement such as GDPR.</li>\n</ul>\n<ul>\n<li>Desire to learn financial concepts and build expertise in the fintech industry.</li>\n</ul>\n<ul>\n<li>Previous success working in fast-paced, agile environments.</li>\n</ul>\n<ul>\n<li>Excellent communication skills coupled with the ability to translate technical concepts for a non-technical audience. </li>\n</ul>\n<ul>\n<li>Ability to grapple with abstract user problems.</li>\n</ul>\n<ul>\n<li>Passion and curiosity for understanding user needs.</li>\n</ul>\n<ul>\n<li>Bonus points for previous experience at a SaaS (software-as-a-service) company, familiarity with Atlassian Jira and Confluence, and education or professional experience with data analysis and product analytics.</li>\n</ul>\n<div><strong style=\"font-size: inherit;\">Perks to working at Dwolla:</strong></div>\n<div> </div>\n<div>- Remote-first work environment (ability to work from home or from our Des Moines office)</div>\n<div>- Remote First Home Office Stipend</div>\n<div>- Competitive salaries</div>\n<div>- Stock Options</div>\n<div>- 401K with 4% company match</div>\n<div>- Unlimited Paid Time Off</div>\n<div>- 12 weeks paid parental leave</div>\n<div>- Paid parking</div>\n<div>- Medical, dental &amp; vision insurance</div>\n<div>- Long-term disability insurance</div>\n<div>- Medical leave</div>\n<div>- Life Insurance</div>\n<div>- Flexible Spending Accounts</div>\n<div>- Casual dress</div>\n<div> </div>\n<div>At Dwolla, we hold the core belief that the best teams are built by the inclusion of diverse ideas, experiences, and people.</div>\n<div> </div>\n<div>Join our team and bring your unique perspective to help build the ideal platform to move money simply and securely.</div>\n"
    },
    {
    "_id": "613f889ac1c0b3646447b7a2",
    "url": "https://remotive.io/remote-jobs/customer-support/community-lead-745556",
    "title": "Community Lead",
    "company_name": "Gooddollar",
    "category": "Customer Service",
    "job_type": "full_time",
    "publication_date": "2021-06-24T01:39:46.000Z",
    "candidate_required_location": "Israel",
    "salary": "",
    "description": "<p>GoodDollar Foundation is looking for a Community Lead to join our team. After nine months of exploding growth, with 300,000 members across 180 countries, we have one of the largest and global digital communities out there, and we are looking to grow even more! We’re looking for a Community Lead to:</p>\n<p> </p>\n<ol>\n<li>Build a global, digital movement around GoodDollar and the movement of bringing the power of digital assets to the next 1 billion people around the globe</li>\n<li>Devise and implement the strategy to grow an open-source, decentralized global community of members to drive GoodDollar usage</li>\n<li>Establish and oversee a global ambassador program and influencer marketing program</li>\n<li>Create a system to respond to user questions and inquiries, at scale in multi-languages</li>\n<li>Lead mobilization of the decentralized governance structure (DAO) and rally participation</li>\n</ol>\n<p>To succeed in this role, you are both strategic and take a hands-on approach to building and scaling the community. You’re a natural producer, communicator, and motivator who is comfortable being a “face” of the GoodDollar community. You know how to communicate messages clearly, as well as establish and manage campaigns and community programs. You can identify problems, take initiative in creating solutions, and bring things end-to-end. You’ll be working closely with the product, marketing and operations teams, and are comfortable working in a remote team structure.</p>\n<p>If you’ve done parts of this and you have passion for using crypto to build a better world, we need you!</p>\n<p><strong>Requirements</strong></p>\n<ul>\n<li>1+ years of work experience as a digital community manager or a similar role</li>\n<li>A passion for using crypto to build a better world</li>\n<li>Knowledge of blockchain technologies, Web3 and crypto ecosystem</li>\n<li>Active participant in digital blockchain and crypto communities</li>\n<li>Hands-on experience operating, monitoring and analyzing social media management tools and trends (such as: Facebook, Instagram )</li>\n<li>Strong communicator and savvy interpersonal skills (written and oral)</li>\n<li>Proactive, organized, detail-oriented, and a team player</li>\n<li>Creative, innovative, and resourceful</li>\n</ul>\n<p><strong>Benefits</strong></p>\n<ul>\n<li>Fully open-source Web3 project.</li>\n<li>Social Impact project: one of the only project's in crypto that has doing good for others as its core mission.</li>\n<li>Highly influential role and the ability to make a big impact, working with a strong, experienced team.</li>\n<li>We trust you to do your job well, at times that suit you and your team.</li>\n</ul>\n"
    }
    ]
    }


const JobSearch = () => {
  const params = useParams();
  const [queryJobs, setQueryJobs] = useState(null);
  const [detailJobs, setDetailJobs] = useState(null);
  const date = new Date("2021-08-29T17:53:08.000Z");

 const day = date.getDate();
 const month = date.getMonth() + 1;
 const year = date.getFullYear();

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?search=${params.query}&limit=10`
      );
      if (response.ok) {
        const data = await response.json();
        setQueryJobs(data);
        console.log(data);
      } else {
        console.log("Errore del fetch");
      }
    } catch (err) {
      console.log("Errore:", err);
    }
  };

  const handleDetailJobs = (job) => {
    console.log("click")
    setDetailJobs(job)
  }

  return (
    <>
      <Row className="d-flex justify-content-center bg-white mx-3">
        {" "}
        {/* CONTENITORE DEI DUE COMPONENT */}
        {queryJobs && (
          <>
            <Col
              className="col-4 justify-content-between overflow-auto"
              style={{ height: "90vh" }}
            >
              {/* PRIMO COMPONENT */}
              {queryJobs.data.map((job, i) => (
                <JobList key={i} list={job} cambiaStato={handleDetailJobs}/>
              ))}
            </Col>
            <Col className="col-5 overflow-auto" style={{ height: "90vh" }}>
              {/* SECONDO COMPONENT */}
              {detailJobs && (
                <>
                <p className="fs-4 fw-bold">{detailJobs.title}</p>
              <p>
                {detailJobs.company_name} .{" "}
                <span className="text-secondary">
                  Published: {day}-{month}-{year} .{" "}
                </span>
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html: detailJobs.description,
                }}
              ></div>
                </>
              )}

              
            </Col>
          </>
        )}
      </Row>
    </>
  );
};

export default JobSearch;