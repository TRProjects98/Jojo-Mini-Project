import FormReview from '../src/components/FormReview.vue';
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { waitFor } from '@testing-library/vue';
import { nextTick } from 'vue';

describe(FormReview, () => {
  it('renders the form', () => {
    const formContainer = mount(FormReview);

    const formElement = formContainer.find('form');

    // Assert that the img element exists
    expect(formElement.exists()).toBe(true);
  });

  it('renders 3 inputs and 1 textarea', () => {
    const formContainer = mount(FormReview);

    const inputElement = formContainer.findAll('input');

    const textareaElement = formContainer.find('textarea');

    expect(inputElement.length).toBe(3);

    expect(textareaElement.exists()).toBe(true);
  });

  it('renders form message', () => {
    const formContainer = mount(FormReview);

    const FormMessage = formContainer.find('.FormMessage');

    expect(FormMessage.exists()).toBe(true);
  });

  it('analyzes if form handling message is -> X You cant leave any inputs empty', async () => {
    const formContainer = mount(FormReview);

    const formElement = formContainer.find('form');

    const inputElement = formContainer.findAll('input');

    const textareaElement = formContainer.find('textarea');

    const Message = formContainer.find('.FormMessage > p');
    const MessageIcon = formContainer.find('.FormMessage > img');

    expect(textareaElement.element.value).toBe('');

    for (let i = 0; i <= 1; i++) {
      const element = inputElement[i].element;
      expect(element.value).toBe('');
    }

    // Simulate form submission
    await formElement.trigger('submit.prevent'); // Use trigger with submit event

    // Wait for the message to be updated
    await waitFor(() => {
      // After form submission, check the updated message
      expect(Message.element.innerHTML).toBe('You cant leave any inputs empty');
      expect(MessageIcon.element.getAttribute('src')).toBe('/Error_Icon.svg');
    });
  });

  it('analyzes if form handling message is -> X Your inputs are not valid', async () => {
    const formContainer = mount(FormReview);

    const formElement = formContainer.find('form');

    const inputElements = formContainer.findAll('input');

    const textareaElement = formContainer.find('textarea');

    const Message = formContainer.find('.FormMessage > p');

    const MessageIcon = formContainer.find('.FormMessage > img');

    // Set values to the inputs
    await inputElements[0].setValue('John Doe'); // Setting name
    await inputElements[1].setValue('not_a_email_value'); // Setting email
    await textareaElement.setValue('This is a test message'); // Setting message in textarea
    // Simulate form submission
    await formElement.trigger('submit.prevent'); // Use trigger with submit event
    // Wait for the message to be updated
    await waitFor(() => {
      // After form submission, check the updated message
      expect(Message.element.innerHTML).toBe('Your inputs are not valid');
      expect(MessageIcon.element.getAttribute('src')).toBe('/Error_Icon.svg');
    });
  });

  it('analyzes if form handling message is -> ! Your inputs are not valid', async () => {
    const formContainer = mount(FormReview);

    const formElement = formContainer.find('form');

    const inputElements = formContainer.findAll('input');

    const textareaElement = formContainer.find('textarea');

    const Message = formContainer.find('.FormMessage > p');
    const MessageIcon = formContainer.find('.FormMessage > img');

    // Set values to the inputs
    await inputElements[0].setValue('John Doe'); // Setting name
    await inputElements[1].setValue('john@example.com'); // Setting not vaild email
    await textareaElement.setValue('This is a test message'); // Setting message in textarea
    // Simulate form submission
    await formElement.trigger('submit.prevent'); // Use trigger with submit event

    // Wait for the message to be updated
    await waitFor(() => {
      // After form submission, check the updated message
      expect(Message.element.innerHTML).toBe(
        'This form was created for testing purposes. Your message wasnt sent.'
      );
      expect(MessageIcon.element.getAttribute('src')).toBe('/Warning_Icon.svg');
    });
  });

  it('analyzes if Form Message Div comes to view and goes up again', async () => {
    const formContainer = mount(FormReview);

    const formElement = formContainer.find('form');
    const FormMessageDiv = formContainer.find('.FormMessage');

    // Mock the timer using Vitest's `vi.useFakeTimers()`
    vi.useFakeTimers();

    expect(FormMessageDiv.exists()).toBe(true);

    const formMessageElement = FormMessageDiv.element as HTMLElement;

    const DivInitalStyle = getComputedStyle(FormMessageDiv.element);

    // Check initial style (top: -100px)
    expect(DivInitalStyle.top).toBe('-100px');

    // Simulate form submission
    await formElement.trigger('submit.prevent');

    // Wait for the next tick to allow Vue to process the change
    await nextTick();

    // Check if `top` changes to `10px` after submission
    expect(formMessageElement.style.top).toBe('10px');

    // Advance timers by 3 seconds to simulate the timeout
    vi.advanceTimersByTime(3000);
    await nextTick(); // Ensure Vue updates the DOM after advancing timers

    // Check if `top` reverts back to `-100px` after 3 seconds
    expect(formMessageElement.style.top).toBe('-100px');

    // Restore the original timer behavior
    vi.useRealTimers();
  });
});
