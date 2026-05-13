// Analytics Dashboard — WIP
const Dashboard = () => {
  const data = { visits: 0, conversions: 0 };
  return { type:'div', props:{ className:'dashboard', children: JSON.stringify(data) } };
};
module.exports = Dashboard;
