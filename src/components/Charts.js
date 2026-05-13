// Chart components — WIP
const LineChart = ({ data }) => ({ type:'canvas', props:{ 'data-values': JSON.stringify(data) } });
module.exports = { LineChart };
