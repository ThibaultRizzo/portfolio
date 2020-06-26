<script>
  import { fade } from "svelte/transition";
  import ImgLayoutModal from "./ImgLayoutModal.svelte";
  import TECHNO from "../techno.js";

  export let open, techno;
  let projects = [];
  let showSimplifiedDescription = null;
</script>

<style lang="scss">
  @import "./styles/global.scss";
  @import "./styles/mixin.scss";

  .techno__details {
    height: 100%;
    background: white;

    display: flex;
    flex-flow: column;
    align-items: stretch;
    text-align: center;
  }

  .section {
    @include shadowed-card-and-header($primary);
  }
  .techno__expertise {
    display: flex;
    flex-flow: column;
    align-items: center;
    background: white;
    justify-content: center;
    position: absolute;
    top: 10%;
    right: -28px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 2px solid $primary;
  }
  .expertise__logo {
    height: auto;
    width: 20px;
  }
  .expertise__label {
    font-size: 12px;
    font-weight: bolder;
    margin: 0;
  }
</style>

{#if techno}
  <ImgLayoutModal
    on:close
    {open}
    imgSrc={techno.logo}
    imgAlt={`Logo of ${techno.label}`}>
    <div class="techno__details">
      <h1>{techno.label}</h1>

      <div class="techno__expertise">
        <img
          class="expertise__logo"
          src={techno.level.logo}
          alt="A growing plant" />
        <h4 class="expertise__label">{techno.level.label}</h4>
      </div>

      <div class="section">
        <div class="card__header">
          <h4>What is it</h4>
        </div>
        <div class="section__content">
          <p>{techno.description}</p>
        </div>
      </div>

      <div class="section">
        <div class="section__title">
          <h4>When to use it</h4>
        </div>
        <div class="section__content">
          <p>{techno.purpose}</p>
        </div>
      </div>

      <div class="links">
        {#each Object.entries(techno.links) as [label, link]}
          <a href={link}>{label}</a>
        {/each}
      </div>
    </div>
  </ImgLayoutModal>
{/if}
