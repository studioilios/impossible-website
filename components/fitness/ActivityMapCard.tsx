"use client"
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Settings } from 'lucide-react';
import Map, { Source, Layer, Marker } from 'react-map-gl/maplibre';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

type ActivityType = 'walking' | 'running' | 'cycling';

interface ActivityTab {
  id: ActivityType;
  label: string;
  distance: string;
  subtitle: string;
  // Real geographic coordinates [longitude, latitude]
  routeCoordinates: [number, number][];
}

const activityData: ActivityTab[] = [
  {
    id: 'walking',
    label: 'Walking',
    distance: '3.45',
    subtitle: 'Total fitness walking distance',
    routeCoordinates: [
      [77.5900, 12.9710], // Cubbon Park area
      [77.5920, 12.9730],
      [77.5950, 12.9740],
      [77.5980, 12.9720]
    ],
  },
  {
    id: 'running',
    label: 'Running',
    distance: '8.12',
    subtitle: 'Total morning running distance',
    routeCoordinates: [
      [77.5850, 12.9700],
      [77.5900, 12.9750],
      [77.5950, 12.9780],
      [77.6000, 12.9750],
      [77.6050, 12.9700]
    ],
  },
  {
    id: 'cycling',
    label: 'Cycling',
    distance: '24.7',
    subtitle: 'Total evening cycling distance',
    routeCoordinates: [
      [77.5800, 12.9650],
      [77.5900, 12.9800],
      [77.6100, 12.9850],
      [77.6200, 12.9700],
      [77.6100, 12.9550]
    ],
  },
];

// Free Dark Mode Map Tiles (No API Key Required)
const mapStyle = {
  version: 8 as const,
  sources: {
    'carto-dark': {
      type: 'raster' as const,
      tiles: [
        'https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
      ],
      tileSize: 256,
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
    }
  },
  layers: [
    {
      id: 'carto-dark-layer',
      type: 'raster' as const,
      source: 'carto-dark',
      minzoom: 0,
      maxzoom: 20
    }
  ]
};

interface ActivityMapCardProps {
  onNavigate?: (screen: any, data?: any) => void;
}

export function ActivityMapCard({ onNavigate }: ActivityMapCardProps) {
  const [activeTab, setActiveTab] = useState<ActivityType>('walking');

  const currentData = activityData.find((a) => a.id === activeTab) || activityData[0];

  // Convert the array of coordinates into a valid GeoJSON line for MapLibre
  const routeGeoJSON = useMemo(() => {
    return {
      type: 'Feature' as const,
      properties: {},
      geometry: {
        type: 'LineString' as const,
        coordinates: currentData.routeCoordinates
      }
    };
  }, [currentData]);

  // Extract start and end points for markers
  const startPoint = currentData.routeCoordinates[0];
  const endPoint = currentData.routeCoordinates[currentData.routeCoordinates.length - 1];

  return (
    <div className="mb-8">
      {/* Top Section - Activity Tabs */}
      <div className="flex items-center gap-8 mb-6 border-b border-white/5 pb-0.5">
        {activityData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative pb-3 transition-colors"
          >
            <span
              className={`text-sm font-bold tracking-wide transition-opacity ${
                activeTab === tab.id ? 'text-[#CCFF00]' : 'text-white opacity-40'
              }`}
            >
              {tab.label}
            </span>
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CCFF00]"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Distance Summary */}
      <div className="mb-6 flex items-end justify-between">
        <div>
          <div className="flex items-baseline gap-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentData.distance}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-5xl font-black italic tracking-tighter"
              >
                {currentData.distance}
              </motion.span>
            </AnimatePresence>
            <span className="text-xl font-bold italic opacity-40">km</span>
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/40 mt-1">
            {currentData.subtitle}
          </p>
        </div>
        <button 
          onClick={() => onNavigate?.('profile', { tab: 'flow' })}
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
        >
          <ChevronRight className="w-5 h-5 text-[#CCFF00]" />
        </button>
      </div>

      {/* Bottom Section - Real Map Preview Card */}
      <div className="relative h-64 w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group transition-all hover:border-[#CCFF00]/30 pointer-events-none sm:pointer-events-auto">
        
        <Map
          mapLib={maplibregl}
          initialViewState={{
            longitude: startPoint[0],
            latitude: startPoint[1],
            zoom: 13,
            pitch: 45, // Angled for a cool 3D perspective
          }}
          // The map centers dynamically when tabs change
          longitude={startPoint[0]}
          latitude={startPoint[1]}
          mapStyle={mapStyle}
          interactive={false} // Keeps it acting like a card instead of a full map
        >
          {/* The Route Line */}
          <Source id="route" type="geojson" data={routeGeoJSON}>
            <Layer
              id="route-layer"
              type="line"
              paint={{
                'line-color': '#CCFF00',
                'line-width': 4,
                'line-opacity': 0.8,
              }}
              layout={{
                'line-join': 'round',
                'line-cap': 'round'
              }}
            />
          </Source>

          {/* Start Marker */}
          <Marker longitude={startPoint[0]} latitude={startPoint[1]}>
            <div className="relative flex items-center justify-center w-6 h-6">
              <div className="absolute w-full h-full bg-white rounded-full animate-ping opacity-50"></div>
              <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"></div>
            </div>
          </Marker>

          {/* End Marker */}
          <Marker longitude={endPoint[0]} latitude={endPoint[1]}>
            <div className="w-4 h-4 bg-[#CCFF00] rounded-full border-2 border-black shadow-[0_0_15px_rgba(204,255,0,0.8)]"></div>
          </Marker>
        </Map>

        {/* Map UI Overlays (Float on top of map) */}
        <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
          <div className="bg-black/80 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 shadow-lg">
            <div className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white/90">Flow</span>
          </div>
        </div>

        <div className="absolute top-6 right-6 z-10 pointer-events-auto">
          <button className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/60 hover:text-[#CCFF00] transition-colors shadow-lg cursor-pointer">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}