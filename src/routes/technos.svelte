<script>
  import TECHNO from "../techno.js";
  import TechnoModal from "../components/TechnoModal.svelte";
  import Techno from "../components/Techno.svelte";
  let selectedTechno = null;
  let mappedTechnologies = Object.values(TECHNO).reduce((acc, val) => {
    acc[val.category] = acc[val.category] ? [...acc[val.category], val] : [val];
    return acc;
  }, {});
</script>

<style lang="scss">
  @import "../styles/mixin.scss";

  .techno__container {
    display: flex;
    flex-flow: row wrap;
  }

  .techno {
    cursor: pointer;
  }

  .category__list {
    display: flex;
    flex-flow: row wrap;
    & > * {
      margin: 2.5%;
    }

    > :nth-child(1) {
      @include shadowed-card-and-header(orange);
    }
    > :nth-child(2) {
      @include shadowed-card-and-header(green);
    }
    > :nth-child(3) {
      @include shadowed-card-and-header(purple);
    }
    > :nth-child(4) {
      @include shadowed-card-and-header(blue);
    }
    > :nth-child(5) {
      @include shadowed-card-and-header(palevioletred);
    }
    > :nth-child(6) {
      @include shadowed-card-and-header(brown);
    }
  }

  .category {
    max-width: 32%;
  }
</style>

<svelte:head>
  <title>Thibault RIZZO - Technologies</title>
</svelte:head>

<div class="category__list">
  {#each Object.entries(mappedTechnologies) as [category, technos]}
    <div class="category">
      <h2 class="card__header">{category}</h2>
      <div class="techno__container">
        {#each technos as techno}
          <div class="techno" on:click={() => (selectedTechno = techno)}>
            <Techno {techno} />
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>

<TechnoModal
  open={selectedTechno !== null}
  techno={selectedTechno}
  on:close={() => (selectedTechno = null)} />
