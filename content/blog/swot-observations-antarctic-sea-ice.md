---
title: "Notes on SWOT observations over Antarctic sea ice"
date: "2026-02-10"
description: "Notes on the potential of SWOT wide-swath elevation observations for Antarctic sea ice studies, with emphasis on opportunities and caveats."
tags: ["SWOT", "Antarctica", "Remote sensing"]
slug: "swot-observations-antarctic-sea-ice"
---

The Surface Water and Ocean Topography mission, usually shortened to **SWOT**, provides wide-swath observations of water-surface elevation. Although SWOT was designed primarily for oceanography and inland hydrology, its measurements raise interesting questions for polar sea ice zones.

## Why SWOT is interesting for sea ice

Traditional nadir altimeters provide measurements along narrow ground tracks. SWOT adds a different viewing geometry through wide-swath interferometric measurements. For Antarctic sea ice, this may help explore spatial variability in surface elevation around floes, leads, and mixed ice-ocean regions.

## Learning questions

- How stable are SWOT height measurements over heterogeneous sea ice surfaces?
- Can wide-swath observations help constrain local sea surface height?
- How should SWOT observations be compared with ICESat-2 photon-counting laser altimetry?
- Which quality flags and filtering strategies are most important in ice-covered waters?

## Conceptual comparison

| Sensor | Observation style | Potential role |
| --- | --- | --- |
| SWOT | Wide-swath elevation | Spatial context around leads and floes |
| ICESat-2 | Photon-counting laser altimetry | High-resolution elevation reference |
| CryoSat-2 | Radar altimetry | Long-term sea ice freeboard record |

## A simple matching sketch

```ts
type Observation = {
  lon: number;
  lat: number;
  time: string;
  height: number;
};

function isWithinTimeWindow(a: Observation, b: Observation, hours: number) {
  const dt = Math.abs(Date.parse(a.time) - Date.parse(b.time));
  return dt <= hours * 60 * 60 * 1000;
}
```

## Caveats

This note does not claim a validated retrieval result. It only outlines possible analysis directions. Antarctic sea ice is dynamic, heterogeneous, and difficult to validate, so any future quantitative workflow should include conservative screening and uncertainty analysis.
