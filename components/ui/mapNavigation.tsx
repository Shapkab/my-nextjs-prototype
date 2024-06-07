"use client";

import { Loader } from "@googlemaps/js-api-loader";
import { useCallback, useEffect, useRef, useState } from "react";

interface MapNavigationProps {
  address: string;
}

export default function MapNavigation({ address }: MapNavigationProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const setCookie = async () => {
    try {
      const response = await fetch("/api/set-cookie");
      if (!response.ok) {
        throw new Error("Failed to set cookie");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error setting cookie:", error);
    }
  };

  const initializeMap = useCallback(async () => {
    const apiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY;
    if (!apiKey) {
      setError("Maps API Key is missing.");
      setLoading(false);
      return;
    }

    const loader = new Loader({
      apiKey: apiKey,
      version: "weekly",
    });

    try {
      await loader.importLibrary("maps");

      if (!mapRef.current) {
        setError("Map container is not available.");
        setLoading(false);
        return;
      }

      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: address }, async (results, status) => {
        if (status === "OK" && results && results[0]) {
          const mapOptions: google.maps.MapOptions = {
            center: results[0].geometry.location,
            zoom: 16,
          };
          const newMap = new window.google.maps.Map(
            mapRef.current!,
            mapOptions,
          );
          const markerLibrary = (await google.maps.importLibrary(
            "marker",
          )) as google.maps.MarkerLibrary;
          const { AdvancedMarkerElement } = markerLibrary;

          new AdvancedMarkerElement({
            map: newMap,
            position: results[0].geometry.location,
            title: "Marker",
          });

          setMap(newMap);
          setLoading(false);
        } else {
          setError(
            `Geocode was not successful for the following reason: ${status}`,
          );
          setLoading(false);
        }
      });
    } catch (error) {
      setError("Google Maps API failed to load.");
      setLoading(false);
    }
  }, [address]);

  useEffect(() => {
    if (mapRef.current) {
      initializeMap();
    }
  }, [initializeMap]);

  useEffect(() => {
    if (!mapRef.current) {
      const interval = setInterval(() => {
        if (mapRef.current) {
          clearInterval(interval);
          initializeMap();
        }
      }, 100);
      setLoading(false);
    }
  }, [initializeMap]);

  useEffect(() => {
    if (map) {
      setCookie();
    }
  }, [map]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }}></div>;
}
