// HeroSection.test.ts
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import HeroSection from '../src/components/HeroSection.vue';

describe('HeroSection', () => {
  it('renders an img element', () => {
    // Mount the component
    const wrapper = mount(HeroSection);

    // Find the img element
    const img = wrapper.find('img');

    // Assert that the img element exists
    expect(img.exists()).toBe(true);
  });

  it('renders an video element', () => {
    // Mount the component
    const wrapper = mount(HeroSection);

    // Find the video element
    const video = wrapper.find('video');

    // Assert that the img element exists
    expect(video.exists()).toBe(true);
  });

  it('renders button', () => {
    // Mount the component
    const wrapper = mount(HeroSection);

    // Find the video element
    const button = wrapper.find('button');

    // Assert that the img element exists
    expect(button.exists()).toBe(true);
  });

  it('add sound when btn click', () => {
    // Mount the component
    const wrapper = mount(HeroSection);

    // Find the video element
    const video = wrapper.find('video');

    // Find the video element
    const button = wrapper.find('button');

    // Check if the video element is 'muted'
    expect(video.element.muted).toBe(true);

    button.element.click();

    expect(video.element.muted).toBe(false);
  });
});
