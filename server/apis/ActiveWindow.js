const express = require('express');
const cors = require('cors');
const activeWin = require('active-win');

const app = express();
const PORT = 3000;

// List of app names to ignore
const ignoreList = [
  'SnippingTool.exe', 
  ''
];

app.use(cors());

let currentApp = [];
let lastApp = '';
let startTime = Date.now();

// Function to track active window and time spent
async function trackActiveWindow() {
  const window = await activeWin();
  const appName = window ? window.owner.name : 'Unknown';

  if (ignoreList.includes(appName)) {
    // Skip tracking if the app is in the ignore list
    return;
  }

  if (appName !== lastApp) {
    const endTime = Date.now();
    const timeSpent = Math.floor((endTime - startTime) / 1000); // in seconds

    if (lastApp) {
      const appIndex = currentApp.findIndex(app => app.name === lastApp);
      if (appIndex !== -1) {
        currentApp[appIndex] = {
          name: lastApp,
          timeSpent: `${Math.floor(timeSpent / 3600)}h ${Math.floor((timeSpent % 3600) / 60)}m`
        };
      } else {
        currentApp.push({
          name: lastApp,
          timeSpent: `${Math.floor(timeSpent / 3600)}h ${Math.floor((timeSpent % 3600) / 60)}m`
        });
      }
    }

    lastApp = appName;
    startTime = Date.now();
  }
}

// Call trackActiveWindow every second
setInterval(trackActiveWindow, 1000);

// API endpoint to get active apps data
app.get('/active-apps', (req, res) => {
  res.json(currentApp);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
