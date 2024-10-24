<script setup lang="ts">
import { ref, Ref } from 'vue';

const Form = ref<HTMLFormElement | null>(null);

const FDivmessage = ref<HTMLDivElement | null>(null);

const Fmessage: Ref<string, string> = ref('');

let FmessageIcon: string = 'Error';

let FormValidation: boolean = false;

function formSubmition(e: Event): void {
  e.preventDefault();

  if (Form.value) {
    const FormNameInput = Form.value.querySelector(
      'input[name="name"]'
    ) as HTMLInputElement;
    const FormEmailInput = Form.value.querySelector(
      'input[name="email"]'
    ) as HTMLInputElement;
    const FormMessageInput = Form.value.querySelector(
      'textarea[name="text"]'
    ) as HTMLTextAreaElement;

    // Check if inputs are defined
    if (FormNameInput && FormEmailInput && FormMessageInput) {
      if (
        FormNameInput.value.trim() !== '' &&
        FormEmailInput.value.trim() !== '' &&
        FormMessageInput.value.trim() !== ''
      ) {
        if (
          FormNameInput.validity.valid &&
          FormEmailInput.validity.valid &&
          FormMessageInput.validity.valid
        ) {
          FormValidation = true;
          Form.value.reset();
          FmessageIcon = 'Warning';
          Fmessage.value =
            'This form was created for testing purposes. Your message wasnt sent.';
        } else {
          Fmessage.value = 'Your inputs are not valid';
        }
      } else {
        Fmessage.value = 'You cant leave any inputs empty';
      }
    } else {
      Fmessage.value = 'One or more inputs are not defined';
    }
  }

  if (FDivmessage.value) {
    if (FormValidation) {
      //check if element its not null
      FDivmessage.value.style.backgroundColor = 'rgb(255, 230, 0)';
    } else {
      FDivmessage.value.style.backgroundColor = 'rgb(245, 27, 20)';
      FmessageIcon = 'Error';
    }

    FDivmessage.value.style.top = '10px';
  }

  setTimeout(() => {
    if (FDivmessage.value) FDivmessage.value.style.top = '-100px';
    FormValidation = false;
  }, 3000);
}
</script>

<template>
  <section id="FormSection">
    <div class="FormMessage" ref="FDivmessage">
      <img :src="`/${FmessageIcon}_Icon.svg`" :alt="`/${FmessageIcon} Icon`" />
      <p>{{ Fmessage }}</p>
    </div>
    <h1>Give a Jojo Review</h1>
    <div id="form-main">
      <div id="form-div">
        <form class="form" id="form1" ref="Form" @submit="formSubmition">
          <p>
            <input
              name="name"
              type="text"
              class="feedback-input"
              placeholder="Name"
              id="name"
            />
          </p>
          <p>
            <input
              name="email"
              type="email"
              class="feedback-input"
              id="email"
              placeholder="Email"
            />
          </p>
          <p>
            <textarea
              name="text"
              class="feedback-input"
              id="comment"
              placeholder="Message"
            ></textarea>
          </p>
          <div class="submit">
            <input type="submit" value="SEND" id="form-button" />
            <div class="ease"></div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.FormMessage {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 65px;
  background-color: rgb(245, 27, 20);
  border-radius: 10px;
  padding: 10px;
  position: fixed;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  gap: 15px;
  z-index: 100;
  font-weight: 700;
  transition: 0.5s ease;
}

img {
  height: 50%;
  object-fit: contain;
}

#FormSection {
  min-height: 100vh;
  background-color: black;
  padding: 80px;
  margin-bottom: 100px;
}

h1 {
  letter-spacing: 2px;
  margin-bottom: 100px;
  font-size: 50px;
}

#form-main {
  width: 100%;
  float: left;
  padding-top: 0px;
}

#form-div {
  background-color: rgba(72, 72, 72, 0.4);
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 35px;
  padding-bottom: 50px;
  width: 450px;
  float: left;
  left: 50%;
  position: absolute;
  margin-top: 30px;
  margin-left: -260px;
  border-radius: 7px;
}

.feedback-input {
  color: #3c3c3c;
  font-weight: 500;
  font-size: 18px;
  border-radius: 0;
  line-height: 22px;
  background-color: #fbfbfb;
  padding: 13px 13px 13px 54px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  border: 3px solid rgba(0, 0, 0, 0);
}

.feedback-input:focus {
  background: #fff;
  box-shadow: 0;
  border: 3px solid rgb(124, 23, 206);
  color: rgb(124, 23, 206);
  outline: none;
  padding: 13px 13px 13px 54px;
}

.focused {
  color: #30aed6;
  border: #30aed6 solid 3px;
}

textarea {
  width: 100%;
  height: 150px;
  line-height: 150%;
  resize: vertical;
}

input:hover,
textarea:hover,
input:focus,
textarea:focus {
  background-color: white;
}

#form-button {
  float: left;
  width: 100%;
  border: #fbfbfb solid 4px;
  cursor: pointer;
  background-color: rgb(124, 23, 206);
  color: white;
  font-size: 24px;
  padding-top: 22px;
  padding-bottom: 22px;
  transition: all 0.3s;
  margin-top: -4px;
  font-weight: 700;
}

#form-button:hover {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(124, 23, 206);
}

.submit:hover {
  color: rgb(124, 23, 206);
}

.ease {
  width: 0px;
  height: 74px;
  background-color: #fbfbfb;
  transition: 0.3s ease;
}

.submit:hover .ease {
  width: 100%;
  background-color: white;
}

@media only screen and (max-width: 580px) {
  #form-div {
    left: 3%;
    margin-right: 3%;
    width: 88%;
    margin-left: 0;
    padding-left: 3%;
    padding-right: 3%;
  }
}
</style>
