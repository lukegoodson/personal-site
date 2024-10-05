/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Cornwall College',
    position: 'Senior Business Intelligence Developer',
    url: 'https://www.cornwall.ac.uk/',
    startDate: '2021-11-01',
    summary: 'Introducing the entire life-cycle of Power BI Reporting. Including Warehousing, EDL and reporting.',
    highlights: [
      'Creating Power BI reports promoted by Ofsted as one of the best in the country.',
      'Work on building forecasts, budgeting and prediction models for Cornwall College&apos;s finance group',
      'Create reports and ETL workflows for all realms of the College, such as finance, HR and academics, which drives product roadmap.',
      'Design, build, and maintain data pipelines from internal and external source systems into an enterprise data warehouse using Microsoft Fabric and the Power Platform.',
      'Create KPI metrics and reports which are used by lead decision-makers.',
      'Gather inputs from various controllers to create termly forecast reports, yearly budgeting, and product-wide allocation models.',
      'Set up CICD pipeline.',
      'Automate the report generation workflow.',
    ],
  },
  {
    name: 'Cornwall Council',
    position: 'Data Intergration Officer',
    url: 'https://www.cornwall.gov.uk/',
    startDate: '2018-12-01',
    endDate: '2021-11-01',
    summary: 'SQL Warehousing, Power Bi Reporting and Annual Government reports',
    highlights: [
      'Tuned existing ETL and reporting models.',
      'Reported to executive level to provide decision making insights.',
      'Built prototype on various enhancements.',
      'Created event-driven workflows using Power Automate and SSIS',
      'Designed and built data marts and cubes for financial reporting and analytics.',
      'Kept communication flow from executives to engineers.',
      'Interacted with business analysts and marketing teams for requirement',
      'gathering and estimations.',
      'Managed reporting infrastructure.',

    ],
  },
  {
    name: 'HMRC',
    position: 'Tax Professional Caseworker',
    url: 'https://www.gov.uk/contact-hmrc',
    startDate: '2016-06-01',
    endDate: '2018-12-01',
    summary: 'Conducting thorough compliance checks and fact-finding investigations Engaging with taxpayers to review and, when necessary, challenge external customers&apos; tax returns Timely and precise assessment of tax liabilities Collaborating across business streams to enhance HMRC&apos;s performance through best practices and information sharing ',
    highlights: [
      'Effective teamwork and communication',
      'Confidence in handling challenging situations',
      'Attention to detail and analytical prowess for risk-based data evaluation',
      'Completed the first and second stages of the ICAS tax qualification',
    ],
  },
];

export default work;
