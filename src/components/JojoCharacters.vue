<script setup lang="ts">
import { ref, onMounted } from 'vue';
import client from '../services/contentfulClient';

interface Jojo {
  name: string;
  image: string;
}

const JojoCharacters = ref<Jojo[]>([]);

const fetchJojoCharacters = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'jojoCharacters',
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    JojoCharacters.value = response.items.map((item: any) => ({
      name: item.fields.jojoName,
      image: item.fields.jojoImage.fields.file.url,
    }));
  } catch (error) {
    console.error('Error fetching manga data:', error);
  }
};

onMounted(async () => {
  await fetchJojoCharacters();
});
</script>

<template>
  <section id="MeetJJSection">
    <h1 class="JojoApresent">Meet the Jojo's</h1>
    <div class="CardContainer">
      <div
        v-for="(element, index) in JojoCharacters.slice().reverse()"
        :key="index"
        class="Card"
        :id="`JojoDiv${index}`"
      >
        <h2 class="JojoName">{{ element.name }}</h2>
        <img :src="element.image" :alt="`${element.name}_image`" />
      </div>
    </div>
  </section>
</template>
<style scoped>
#MeetJJSection {
  min-height: 100vh;
  background-color: black;
  padding: 80px;
}

.JojoApresent {
  letter-spacing: 2px;
  margin-bottom: 150px;
  font-size: 50px;
}

.JojoName {
  font-size: 30px;
  margin: 0;
  z-index: 2;
  background-color: white;
  color: black;
  width: 100%;
  padding: 10px;
}

.CardContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-around;
}

.Card {
  text-align: center;
  display: flex;
  align-items: end;
  justify-content: center;
  position: relative;
  bottom: 0px;
  width: 300px;
  height: 290px;
  border: 5px solid white;
  border-radius: 10px;
  background-image: linear-gradient(
    180deg,
    rgb(37, 37, 37),
    rgb(37, 37, 37),
    rgb(37, 37, 37)
  );
  transition: 0.5s ease;
}

.Card::before {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0px;
  left: 0;
  background-image: linear-gradient(
    180deg,
    rgb(163, 70, 240),
    rgb(124, 23, 206),
    rgb(80, 5, 141)
  );
  transition: opacity 0.5s linear;
  opacity: 0;
}

.Card > img {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.Card:hover {
  bottom: 20px;
}

.Card:hover::before {
  opacity: 1;
}

@media only screen and (max-width: 469px) {
  #MeetJJSection {
    padding: 80px 10px;
  }
}
</style>
