import MangaDisplayer from '../src/components/MangaDisplayer.vue';
import { describe, it, expect, vi } from 'vitest';
import client from '../src/services/contentfulClient';
import { mount } from '@vue/test-utils';

vi.mock('../src/services/contentfulClient.ts', () => ({
  default: {
    getEntries: vi.fn(), // Mock getEntries method
  },
}));

describe(MangaDisplayer, () => {
  it('renders all parts', async () => {
    const mockResponse = {
      items: [
        {
          fields: {
            name: 'Phantom Blood',
            dates: '01/01/1987 - 26/10/1987',
            imageSrc: 'https://example.com/Phantom_Blood.jpg',
          },
        },
      ],
    };

    (client.getEntries as unknown as vi.Mock).mockResolvedValueOnce(
      mockResponse
    );

    const container = mount(MangaDisplayer);

    // Wait for the async fetch and Vue reactivity to complete
    await container.vm.$nextTick(); // Wait for Vue's reactivity to complete
    await new Promise(setImmediate); // Ensure all microtasks are processed

    const cardElements = container.findAll('.manga_div');

    expect(cardElements.length).toBe(1);
    expect(cardElements[0].find('h1').text()).toBe('Phantom Blood');
    expect(cardElements[0].find('p').text()).toBe('01/01/1987 - 26/10/1987');
    expect(cardElements[0].find('img').attributes('src')).toBe(
      'https://example.com/Phantom_Blood.jpg'
    );
  });

  /*it('render other style', async () => {
    const container = mount(MangaDisplayer);

    const heading = container.find('.MDtitle');

    const headingStyles = getComputedStyle(heading.element);

    expect(headingStyles.color).toBe('rgb(255, 255, 255)');
  });*/
});
