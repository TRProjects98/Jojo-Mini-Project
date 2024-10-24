import JojoCharacters from '../src/components/JojoCharacters.vue';
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import client from '../src/services/contentfulClient';

// Mock the default export (client)
vi.mock('../src/services/contentfulClient.ts', () => ({
  default: {
    getEntries: vi.fn(), // Mock getEntries method
  },
}));

describe(JojoCharacters, () => {
  it('renders cards', async () => {
    // Mock API response with some Jojo characters
    const mockResponse = {
      items: [
        {
          fields: {
            jojoName: 'Jotaro Kujo',
            jojoImage: {
              fields: {
                file: { url: 'https://example.com/jotaro.jpg' },
              },
            },
          },
        },
        {
          fields: {
            jojoName: 'Joseph Joestar',
            jojoImage: {
              fields: {
                file: { url: 'https://example.com/joseph.jpg' },
              },
            },
          },
        },
        {
          fields: {
            jojoName: 'Jonathan Joestar',
            jojoImage: {
              fields: {
                file: { url: 'https://example.com/jonathan.jpg' },
              },
            },
          },
        },
      ],
    };

    // Mock the getEntries method to return mockResponse
    (client.getEntries as unknown as vi.Mock).mockResolvedValueOnce(
      mockResponse
    );

    const wrapper = mount(JojoCharacters);

    // Wait for the async fetch and Vue reactivity to complete
    await wrapper.vm.$nextTick(); // Wait for Vue's reactivity to complete
    await new Promise(setImmediate); // Ensure all microtasks are processed

    const cardElements = wrapper.findAll('.Card');

    expect(cardElements.length).toBe(3);
    expect(cardElements[0].find('h2').text()).toBe('Jonathan Joestar');
    expect(cardElements[1].find('h2').text()).toBe('Joseph Joestar');
    expect(cardElements[2].find('h2').text()).toBe('Jotaro Kujo');
  });
});
