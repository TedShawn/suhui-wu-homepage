---
title: "Introduction to satellite altimetry over sea ice"
date: "2026-01-15"
description: "A learning note on how satellite altimetry observes sea ice elevation, freeboard, and the main processing steps behind thickness retrieval."
tags: ["Altimetry", "Sea ice", "Freeboard"]
slug: "satellite-altimetry-over-sea-ice"
---

Satellite altimetry is widely used to observe the height of ice and ocean surfaces in polar regions. Over sea ice, the central quantity is often **freeboard**, the height of the ice or snow surface above the local sea surface. Freeboard can then be combined with assumptions about snow loading and material densities to estimate sea ice thickness.

![Sea ice altimetry schematic](/blog/sea-ice-altimetry-placeholder.svg)

## Basic idea

An altimeter measures range between the satellite and the reflecting surface. After applying orbit information and geophysical corrections, surface elevation can be written conceptually as:

$$
h = H_{orbit} - R - C
$$

where $H_{orbit}$ is the satellite altitude above a reference ellipsoid, $R$ is the measured range, and $C$ represents correction terms such as tides, atmospheric delay, and other geophysical effects.

For sea ice freeboard retrieval, the local sea surface height must be estimated, often using leads or open-water returns:

$$
F = h_{ice} - h_{sea}
$$

This formula is simple, but each term hides important processing choices.

## Typical processing workflow

1. Read altimeter tracks and quality flags.
2. Identify surface type, especially sea ice floes and leads.
3. Apply orbit and geophysical corrections.
4. Estimate local sea surface height.
5. Compute freeboard and screen out low-quality observations.
6. Aggregate along-track or grid-cell statistics.

## A small pseudo-code example

```python
def freeboard(surface_height, local_sea_surface):
    """Compute sea ice freeboard from corrected elevations."""
    return surface_height - local_sea_surface

freeboard_m = freeboard(surface_height=1.24, local_sea_surface=0.91)
print(round(freeboard_m, 2))
```

## Notes and cautions

This post is a methodological learning note rather than a report of new experimental results. In practice, the uncertainty of freeboard depends on surface classification, retracking choice, snow depth assumptions, footprint size, sea surface interpolation, and validation data availability.
