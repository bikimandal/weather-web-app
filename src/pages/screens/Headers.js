import React from "react";
import Head from "next/head";

export default function Headers() {
  return (
    <>
      <Head>
        <title>Weather App - Your City Weather</title>
        <meta
          name="description"
          content="Get the latest weather updates for your city."
        />
        <meta name="keywords" content="weather, city, forecast, temperature" />
        <meta name="author" content="Biki Mandal" />
        <meta property="og:title" content="Weather App" />
        <meta
          property="og:description"
          content="Get real-time weather updates for your city!"
        />
        <link rel="icon" href="/favicon/android-chrome-512x512.png" />
      </Head>
    </>
  );
}
