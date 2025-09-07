// Import required modules
const express = require('express');
const { Sonolus } = require('sonolus-express');
const { sonolus } = require('sonolus-core');

// Create the Express app and a Sonolus server instance.
const app = express();
const sonolusServer = new Sonolus(app);

// Use a simple in-memory database.
const memoryDatabase = {
    levels: [],
    skins: [],
    backgrounds: [],
    effects: [],
    particles: [],
    engines: [],
    playlists: [],
    replays: [],
};

// Define a sample level to demonstrate functionality.
const sampleLevel = sonolus.level({
    title: 'Sample Sonolus Level',
    subtitle: 'My first level on a custom server',
    artists: 'Sonolus Charts',
    author: 'sonoluscharts.rf.gd',
    rating: 10,
    engine: sonolus.engine({
        name: 'testEngine',
        // In a real server, this would point to a valid engine.
        // For a demo, this is a placeholder.
        title: 'Test Engine',
        thumbnail: sonolus.file({ hash: '...' }),
        data: sonolus.file({ hash: '...' }),
    }),
    bgm: sonolus.file({ hash: '...' }),
    chart: sonolus.file({ hash: '...' }),
});

// Add the sample level to the in-memory database.
memoryDatabase.levels.push(sampleLevel);

// Configure the Sonolus server with the in-memory data.
sonolusServer.db = memoryDatabase;

// Add the Sonolus server's router to the Express app.
// This is the key part that handles all the Sonolus-specific API calls.
app.use(sonolusServer.router);

// Define a route for the root of the server. This is a common practice
// for web servers to have a landing page.
app.get('/', (req, res) => {
    res.send('<h1>Welcome to sonoluscharts.rf.gd!</h1><p>Your Sonolus server is running successfully.</p>');
});

// Define the port, defaulting to 3000 for local development.
const port = process.env.PORT || 3000;

// Start the server.
app.listen(port, () => {
    console.log(`Sonolus server listening at http://localhost:${port}`);
});
