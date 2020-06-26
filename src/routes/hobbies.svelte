<script>
  import state from "../state.js";
  let languages = state.languages;

  let currentLanguage = languages[0];
</script>

<style lang="scss">
  @import "../styles/mixin.scss";
  @import "../styles/global.scss";
  .language__card {
    @include shadowed-card-and-header($primary);
    .card__header {
      background: transparent;
      top: -17px;
      margin-bottom: 5px;
    }

    .block:not(:first-child) {
      margin-left: 20px;
      padding-left: 20px;
      position: relative;
      &::before {
        content: "";
        border-left: 1px solid $primary;
        position: absolute;
        left: 0;
        top: 10%;
        height: 60%;
      }
    }
  }

  .flag {
    width: 30px;
    border: 2px solid black;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    transition: all 0.4s;
    &.selected {
      filter: contrast(2);
      transform: scale(1.3);
      margin: 0 10px;
    }
  }

  .card {
    @include shadowed-card-and-header($primary);
  }
  .block__container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 10px 0;
  }
  .hobby__logo {
    padding: 5px;
    width: 80px;
    height: auto;
    border: 4px solid black;
    border-radius: 50%;
  }
  .hobby {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div class="language__card">
  <div class="language__controls card__header">
    {#each languages as language}
      <img
        on:click={() => (currentLanguage = language)}
        class="flag"
        class:selected={currentLanguage === language}
        src={language.flag}
        alt="A flag" />
    {/each}
  </div>

  <div class="language__container">
    <div class="block__container">
      <div class="language__details block">
        <h4>{currentLanguage.intro}</h4>
        <h4>Niveau: {currentLanguage.level.label}</h4>
      </div>
      {#if currentLanguage.degrees && currentLanguage.degrees.length > 0}
        <div class="block">
          {#each currentLanguage.degrees as degree}
            <h4>{degree}</h4>
          {/each}
        </div>
      {/if}
      {#if currentLanguage.articles && currentLanguage.articles.length > 0}
        <div class="block">
          {#each currentLanguage.articles as article}
            <h4>{article}</h4>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>

<div class="card">
  <div class="card__header">
    <h2>Hobbies</h2>
  </div>

  <div class="block__container">
    {#each state.hobbies as hobby}
      <div class="hobby">
        <img
          class="hobby__logo"
          src={hobby.logo}
          alt={'Logo of ' + hobby.label} />
        <h4>{hobby.label}</h4>
      </div>
    {/each}
  </div>

</div>
