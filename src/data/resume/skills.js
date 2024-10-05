const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL/Redshift',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Jupyter',
    competency: 2,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages', 'Data Science'],
  },
  {
    title: 'Data Visualisation',
    competency: 4,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Spark',
    competency: 2,
    category: ['Data Engineering'],
  },
  {
    title: 'Power BI',
    competency: 5,
    category: ['Data Engineering', 'Tools', 'Databases', 'Data Science'],
  },
  {
    title: 'Power Automate',
    competency: 5,
    category: ['Data Engineering', 'Tools'],
  },
  {
    title: 'Power Apps',
    competency: 4,
    category: ['Data Engineering', 'Tools'],
  },
  {
    title: 'Microsoft Fabric',
    competency: 5,
    category: ['Data Engineering', 'Tools', 'Databases'],
  },
  {
    title: 'T-SQL',
    competency: 5,
    category: ['Languages', 'Databases'],
  },
  {
    title: 'SSIS',
    competency: 4,
    category: ['Data Engineering', 'Tools', 'Databases'],
  },
  {
    title: 'SSRS',
    competency: 4,
    category: ['Data Engineering', 'Tools', 'Databases'],
  },
  {
    title: 'Azure',
    competency: 3,
    category: ['Data Engineering', 'Tools', 'Databases'],
  },
  {
    title: 'git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Agile/Scrum',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'DAX',
    competency: 5,
    category: ['Languages', 'Databases'],
  },
  {
    title: 'Power Query',
    competency: 5,
    category: ['Languages', 'Databases'],
  },
  {
    title: 'M',
    competency: 5,
    category: ['Languages', 'Databases'],
  },
  {
    title: 'VBA',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'PHP',
    competency: 3,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'CSS',
    competency: 3,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'HTML',
    competency: 3,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Microsoft SQL Server',
    competency: 5,
    category: ['Tools', 'Databases'],
  },
  {
    title: 'MySQL',
    competency: 5,
    category: ['Tools', 'Databases'],
  },
  {
    title: 'Oracle',
    competency: 5,
    category: ['Tools', 'Databases'],
  },
  {
    title: 'PostgreSQL',
    competency: 5,
    category: ['Tools', 'Databases'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
