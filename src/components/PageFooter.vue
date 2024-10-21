<script setup lang="ts">
//...
</script>

<template>
  <footer>
    <section class="Footerlinks">
      <div>
        <a href="#HSsection">
          <h3>Video</h3>
        </a>
        <a href="#MeetJJSection">
          <h3>Meet the Jojos</h3>
        </a>
        <a href="#HSsection"><img src="/JJBA_Logo.png" alt="JJBA Logo" /></a>
        <a href="#MDsection">
          <h3>Jojo Parts</h3>
        </a>
        <a href="#FormSection">
          <h3>Jojo Review</h3>
        </a>
      </div>
    </section>
    <section class="Websitemade">
      <p>
        Website mabe by
        <a href="https://trwebportfolio.com/" target="_blank">Tiago Reis</a>
      </p>
    </section>
  </footer>
</template>

<style scoped>
footer {
  min-height: 200px;
  background-color: rgb(124, 23, 206);
  padding: 10px 80px;
}

.Footerlinks > div > a > img {
  max-height: 100px;
}

.Footerlinks {
  min-height: 150px;
  display: flex;
  align-items: center;
}

.Footerlinks > div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.Websitemade {
  display: flex;
  justify-content: center;
  align-items: center;
}

h3 {
  margin: 0;
}

a {
  text-decoration: none;
  color: white;
  transition: 0.5s ease;
}

a:hover {
  transform: scale(1.2);
}
</style>
