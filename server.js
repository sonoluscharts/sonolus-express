import express from 'express';
import { Sonolus } from 'sonolus-express';
import { defineLevel, defineSkin, defineBackground, defineEffect, defineParticle, defineEngine } from 'sonolus-core';

const app = express();
const sonolus = new Sonolus();

// Basic server info
sonolus.serverInfoHandler = async () => ({
    title: "My Sonolus Server",
    description: "A simple Sonolus server.",
    levels: [],
    skins: [],
    backgrounds: [],
    effects: [],
    particles: [],
    engines: []
});

// Add empty handlers for all required endpoints
sonolus.levelHandler = async () => ({ items: [], totalCount: 0 });
sonolus.skinHandler = async () => ({ items: [], totalCount: 0 });
sonolus.backgroundHandler = async () => ({ items: [], totalCount: 0 });
sonolus.effectHandler = async () => ({ items: [], totalCount: 0 });
sonolus.particleHandler = async () => ({ items: [], totalCount: 0 });
sonolus.engineHandler = async () => ({ items: [], totalCount: 0 });

// Use the Sonolus router
app.use(sonolus.router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sonolus server running on port ${PORT}`);
});
