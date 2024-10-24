<script setup lang="ts">
import { ref, onMounted } from 'vue';
import client from '../services/contentfulClient';

interface Manga {
  name: string;
  dates: string;
  image_src: string;
}

const All_Mangas = ref<Manga[]>([]);

const fetchMangaData = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'allMangas',
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    All_Mangas.value = response.items.map((item: any) => ({
      name: item.fields.name,
      dates: item.fields.dates,
      image_src: item.fields.imageSrc,
    }));
  } catch (error) {
    console.error('Error fetching manga data:', error);
  }
};

onMounted(async () => {
  await fetchMangaData();

  // eslint-disable-next-line no-undef
  const allMangaDivs: NodeListOf<Element> =
    document.querySelectorAll('.manga_div');

  window.addEventListener('mousemove', (e) => {
    allMangaDivs.forEach((element, index) => {
      if (element.matches(':hover') === true) {
        const elemW: number = element.clientWidth; //largura

        const elemH: number = element.clientHeight; //altura

        image_animation(index, elemW, elemH, e);
      }
    });
  });

  function image_animation(
    index: number,
    divWidth: number,
    divHeight: number,
    e: MouseEvent
  ) {
    let w: number = window.innerWidth;

    const PadPercetn: number = (20 * 100) / w;
    const StopPercent: number = (w * 10) / 100;

    let horizontal_move_range: number =
      divWidth * 0.6 + (e.pageX - PadPercetn) * 0.25;
    let horizontal_move_limit: number = w - StopPercent;

    let imgElement = document.querySelector(`#image${index}`) as HTMLElement;

    if (e.pageX <= horizontal_move_limit) {
      imgElement.style.left = horizontal_move_range + 'px';
    } else {
      imgElement.style.right = '5%';
    }

    let BodyElement = document.querySelector('body') as HTMLElement;
    let FullPageH: number = 0;

    for (let i = 0; i < 2; i++) {
      FullPageH = FullPageH + BodyElement.children[0].children[i].clientHeight;
    }

    imgElement.style.top =
      -(divHeight * 1.5) +
      (e.pageY - FullPageH - divHeight * index) * 0.2 +
      'px';
  }
});
</script>

<template>
  <section class="MDsection" id="MDsection">
    <h1 class="MDtitle">Jojo Parts</h1>
    <div v-if="All_Mangas.length > 0">
      <div
        v-for="(element, index) in All_Mangas.slice().reverse()"
        :key="index"
        class="manga_div"
      >
        <h1>{{ element.name }}</h1>
        <p>{{ element.dates }}</p>
        <img
          :src="element.image_src"
          :id="`image${index}`"
          :alt="`${element.name} Image`"
        />
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </section>
</template>

<style scoped>
#MDsection {
  background-image: url('/Dio_in_Stairs.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right bottom;
  padding: 80px;
  min-height: 100vh;
  position: relative;
}

p {
  margin-top: 5px;
}

.MDtitle:hover {
  margin-bottom: 10px;
}

.MDtitle {
  letter-spacing: 2px;
  font-size: 50px;
  margin-bottom: 150px;
}

.manga_div {
  position: relative;
  border-bottom: 1px solid white;
  padding: 12px 0 12px 5px;
  color: white;
  transition:
    color 0.5s,
    background-color 0.5s;
}

.manga_div > img {
  width: 200px;
  height: auto;
  border: 2px solid white;
  border-radius: 10px;
  position: absolute;
  display: none;
  z-index: 2;
}

.manga_div:hover {
  background-color: white;
  color: #881193;
}

@media only screen and (max-width: 725px) {
  .MDsection {
    background-position: center;
  }
}

@media only screen and (min-width: 825px) {
  .manga_div:hover img {
    display: inline-block;
  }
}
</style>
