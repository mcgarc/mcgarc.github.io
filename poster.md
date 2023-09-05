---
title: Poster
layout: page
permalink: '/poster'
---

# Towards fibre-integrated optical switching

QUAMP 2023, Glasgow, 11-13 September

Thank you for your interest in my poster, _Towards fibre-integrated optical
switching_. This informal summary is intended to be read alongside the poster
for further information. A copy of the poster [can be found
here](files/posters/2023_QUAMP.pdf). The relevant publication [is available as
a preprint](/), and you can find more information about me
[on this website](/index.html).

## Phase modulation of light

The challenge presented here is to induce a phase shift in light without loss
and on fast time scales (100MHz or faster). Such a tool would be extremely
valuable for implmenting photonic quantum technologies, including state
generation, multiplexing and potentially even the implementation of quantum
gates. Conventional modulators tend to be either fast but low loss (LiNbO
crytals, with 3dB loss) or low loss but slow (acoustic modulators, at a few
MHz).

We are aiming to achieve both speed and low loss. Additionally we note that
for a phase modulator to be useful, we really want to be reaching around a
whole pi phase shift. We won't quite get there in this demonstration, but we'll
get pretty close.

In this experiment, we have a continuous wave laser as a signal field,
counter-propagating through a rubidium 87 vapour cell with strong control pulses.
These are near resonance with the S-P and P-D transitions in Rb respectively.
With the control off, the signal experiences some absorption through the atoms,
and accumulates some phase. When a control pulse is present, the D state
becomes strongly coupled to the P state, altering the susceptibility of the Rb
and hence a different phase is accumulated, whilst still experiencing low loss.

We observe phase shift of 0.90(5) multiples of pi, with transmission of 74(2)%.
Various routes to improvement, including optical pumping of the Rb and
enhancement in a cavity or by integration with a waveguide.
We have also demonstrated switching of pulsed signals, however that is not
detailed here. This shows that progression towards phase modulation of single
photons is possible.

## Enhancement with a cavity

The effect is enhanced inside a cavity, by the product of the finesse of the
signal and the finesse of the control. We have begun investigating with a builk
cavity (where we can see finesse on the order of 10), however here switching
speed becomes limited by the ringdown time of the cavity.

To improve, we aim to use microcavities, such as microbubble resonators filled
with Rb. This will allow for much higher finesse and shorter response times.
Sufficient enhancement may even pave the way to interaction between a single
signal and control photon, which could enable the implmentation of two-photon
quantum gates.

## Integration with optical fibres

We are undertaking work to connectorise hollow core optical fibres (HCF) to single
mode fibres (SMF). This requires careful mode matching between the modes in the
two fibres, which we achieve by a graded-index (GRIN) fibre lens. Choosing the
length of the GRIN fibre such that light exiting is collimated allows for good
mode matching into HCF. The HCF is custom made for this purpose, so that its
mode closely matches that exiting the SMF.

I am developing novel methods of connectorising HCF to SMF to enable filling of
HCF with Rb, and realisation of an in-fibre vapour cell. This would allow
enhanced phase modulation by the method described above in a scalable package.
(I don't want to share too many details here due to restrictions with
collaborators, but we hope to present something new soon!)

## Attribution

This presentation is mainly based on the work I have undertaken with PhD
candidate Will Davis at the Univerisy of Bath under supervisor Josh Nunn and
second supervisor Pete Mosley. Here I detail our demonstration of fast,
low-loss phase modulation of light. I also briefly outline work undertaken by
myself and another PhD candidate Tabijah Wasawo on enhancing this interaction
in a cavity, and further work that I have towards integration with optical
