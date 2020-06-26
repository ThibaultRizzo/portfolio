<script>
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  export let open = false;
  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch("close");
  }
</script>

<style lang="scss">
  .modal {
    z-index: 99;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: #00000075;

    display: flex;
    flex-flow: column;
    align-items: stretch;
  }
  .modal__content {
    position: relative;
    flex: 1;
    margin: 5%;
  }
  .modal__close {
    position: absolute;
    right: -18px;
    background: red;
    top: -18px;
    height: 36px;
    width: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: none;
    cursor: pointer;
    &:active {
      background: white;
      path {
        fill: red;
      }
    }
  }
</style>

{#if open}
  <div class="modal" on:click|self={closeModal} transition:fade>
    <div class="modal__content">
      <slot />
      <button
        class="modal__close round-button close-button"
        on:click={closeModal}>
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path
            fill="white"
            d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12
            14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" />
        </svg>
      </button>
    </div>
  </div>
{/if}
