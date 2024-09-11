const express = require('express');
const cors = require('cors'); // Import the cors package
const activeWin = require('active-win');

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS for all routes

// Map to keep track of time spent on each application
const appTimes = new Map();
let lastApp = '';
let startTime = Date.now();

// Function to track active window and time spent
async function trackActiveWindow() {
  try {
    const window = await activeWin();
    const appName = window ? window.owner.name : 'Unknown';

    if (appName !== lastApp) {
      const endTime = Date.now();
      const timeSpent = Math.floor((endTime - startTime) / 1000); // in seconds

      // Update time spent for the last application
      if (lastApp) {
        if (appTimes.has(lastApp)) {
          const previousTime = appTimes.get(lastApp);
          const updatedTime = previousTime + timeSpent;
          appTimes.set(lastApp, updatedTime);
        } else {
          appTimes.set(lastApp, timeSpent);
        }
      }

      // Log the app switch and time spent for debugging
      console.log(`Switching from ${lastApp} to ${appName}. Time spent on ${lastApp}: ${Math.floor(appTimes.get(lastApp) / 60)} minutes`);

      // Switch to the new app
      lastApp = appName;
      startTime = Date.now();
    }
  } catch (error) {
    console.error("Error tracking active window:", error);
  }
}

// Call trackActiveWindow every second
setInterval(trackActiveWindow, 1000);

// API endpoint to get active apps data
app.get('/active-apps', (req, res) => {
  const currentApp = Array.from(appTimes.entries()).map(([name, time]) => ({
    name,
    timeSpent: `${Math.floor(time / 3600)}h ${Math.floor((time % 3600) / 60)}m`
  }));
  
  // Log fetching current app data for debugging
  console.log("Fetching current app data:", currentApp);
  console.log("--------------------");
  res.json(currentApp);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
