
// Sample vitals data
export const vitalsTrendData = [
  { date: 'Jun 1', heartRate: 72, bloodPressureSys: 120, bloodPressureDia: 80, o2: 98, glucose: 92 },
  { date: 'Jun 2', heartRate: 75, bloodPressureSys: 118, bloodPressureDia: 78, o2: 97, glucose: 90 },
  { date: 'Jun 3', heartRate: 78, bloodPressureSys: 121, bloodPressureDia: 82, o2: 98, glucose: 95 },
  { date: 'Jun 4', heartRate: 71, bloodPressureSys: 119, bloodPressureDia: 79, o2: 99, glucose: 88 },
  { date: 'Jun 5', heartRate: 74, bloodPressureSys: 122, bloodPressureDia: 83, o2: 98, glucose: 91 },
  { date: 'Jun 6', heartRate: 76, bloodPressureSys: 121, bloodPressureDia: 81, o2: 97, glucose: 93 },
  { date: 'Jun 7', heartRate: 73, bloodPressureSys: 118, bloodPressureDia: 78, o2: 98, glucose: 90 },
];

// Sample clients list
export const clientsList = [
  { id: 1, name: 'Elizabeth Wilson', age: 72, status: 'Stable', lastReading: '2 hours ago' },
  { id: 2, name: 'Robert Johnson', age: 68, status: 'Needs Attention', lastReading: '1 day ago' },
  { id: 3, name: 'Patricia Davis', age: 81, status: 'Stable', lastReading: '4 hours ago' },
  { id: 4, name: 'James Miller', age: 75, status: 'Improving', lastReading: '30 mins ago' },
  { id: 5, name: 'Mary Taylor', age: 79, status: 'Stable', lastReading: '1 hour ago' },
];

// Sample vitals logs
export const vitalsLogEntries = [
  { id: 1, client: 'Elizabeth Wilson', date: '06/07/2023', time: '8:30 AM', heartRate: 72, bp: '120/80', temp: '98.6°F', o2: '98%', glucose: '92 mg/dL', notes: 'Patient reports feeling well' },
  { id: 2, client: 'Robert Johnson', date: '06/06/2023', time: '9:15 AM', heartRate: 82, bp: '135/85', temp: '99.1°F', o2: '96%', glucose: '110 mg/dL', notes: 'Slight elevation in glucose' },
  { id: 3, client: 'Patricia Davis', date: '06/05/2023', time: '10:00 AM', heartRate: 68, bp: '118/75', temp: '98.4°F', o2: '99%', glucose: '88 mg/dL', notes: 'All readings within normal range' },
  { id: 4, client: 'James Miller', date: '06/04/2023', time: '2:45 PM', heartRate: 75, bp: '122/82', temp: '98.8°F', o2: '97%', glucose: '94 mg/dL', notes: 'BP slightly improved from last reading' },
];
