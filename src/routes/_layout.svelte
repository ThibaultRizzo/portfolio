<script>
  import Nav from "../components/Nav.svelte";
  import NavTitle from "../components/NavTitle.svelte";
  import { goto } from "@sapper/app";
  import { throttle } from "../helper.js";
  export let segment;

  let areOtherRoutesVisible = false;

  const routes = [
    "whoami",
    "projects",
    "technos",
    "education",
    "hobbies",
    "contact"
  ];
  function goToNextRoute() {
    const currentRouteIndex = routes.indexOf(segment);
    const isLastRoute = currentRouteIndex === routes.length - 1;
    const newRouteIndex =
      isLastRoute || currentRouteIndex === -1 ? 0 : currentRouteIndex + 1;

    goto("/" + routes[newRouteIndex]);
  }

  function goToPreviousRoute() {
    const currentRouteIndex = routes.indexOf(segment);
    if (currentRouteIndex > 0) {
      goto("/" + routes[currentRouteIndex - 1]);
    }
  }

  function toggleOtherRoutes() {
    areOtherRoutesVisible = !areOtherRoutesVisible;
  }

  function onWheel(event) {
    if (event.deltaY > 0) {
      goToNextRoute();
    } else {
      goToPreviousRoute();
    }
  }
</script>

<style>
  main {
    position: relative;
    box-sizing: border-box;
    height: 80vh;

    background: white;
    color: #182673;
  }
  header,
  footer {
    height: 10vh;
  }

  header {
    display: flex;
    align-items: center;
  }

  footer {
    background: #252525;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20vw;
  }
  .round-button {
    display: flex;
    align-items: center;
  }

  .next-route-button:hover {
    transform: scale(0.8);
  }

  .contact-button {
    position: absolute;
    right: 20px;
  }
  .contact-button svg {
    margin: 5px;
  }

  svg {
    height: 100%;
    width: auto;
    fill: #252525;
  }
</style>

<svelte:window on:wheel={throttle(onWheel, 2000)} />

<header>
  {#if segment}
    <NavTitle {segment} />
  {/if}
</header>

<main>
  <slot />
</main>

<footer on:mouseover={toggleOtherRoutes} on:mouseout={toggleOtherRoutes}>
  {#if areOtherRoutesVisible}
    <button
      class="round-button next-route-button"
      on:click={goToNextRoute}
      on:mouseenter={toggleOtherRoutes}>
      <svg viewBox="0 0 24 24">
        <path
          d="M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z" />
      </svg>
    </button>
    <button
      class="round-button next-route-button"
      on:click={goToNextRoute}
      on:mouseenter={toggleOtherRoutes}>
      <svg viewBox="0 0 24 24">
        <path
          d="M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z" />
      </svg>
    </button>
  {/if}
  <button class="round-button next-route-button" on:click={goToNextRoute}>
    <svg viewBox="0 0 24 24">
      <path
        d="M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z" />
    </svg>
  </button>

  {#if areOtherRoutesVisible}
    <button
      class="round-button next-route-button"
      on:click={goToNextRoute}
      on:mouseenter={toggleOtherRoutes}>
      <svg viewBox="0 0 24 24">
        <path
          d="M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z" />
      </svg>
    </button>
    <button
      class="round-button next-route-button"
      on:click={goToNextRoute}
      on:mouseenter={toggleOtherRoutes}>
      <svg viewBox="0 0 24 24">
        <path
          d="M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z" />
      </svg>
    </button>
  {/if}

  <button class="round-button contact-button" on:click={() => alert('Contact')}>
    <svg viewBox="0 0 24 24">
      <path
        d="M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0
        17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z" />
    </svg>
  </button>
</footer>
