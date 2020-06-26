<script>
  import Modal from "./Modal.svelte";
  export let open, imgSrc, imgAlt;
</script>

<style lang="scss">
  @import "./styles/global.scss";
  .wrapper {
    display: flex;
    flex-flow: row wrap;
    box-shadow: 0px 3px 30px 1px #0000007d;
    border-radius: 10px 10px 0 10px;
  }
  .modal__header {
    flex-basis: 100%;
    height: 20px;
    background: $primary;
    border-radius: 10px 10px 0 0;
  }

  .modal__img {
    width: 20%;
    background: $primary;
    border-bottom-left-radius: 10px;
    background: linear-gradient(
      0deg,
      rgba(24, 93, 115, 1) 0%,
      rgba(24, 38, 115, 1) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 80%;
    }
  }
  .slot {
    flex: 1;
    display: table;
    border-bottom-right-radius: 10px;
  }
</style>

<Modal on:close {open}>
  <div class="wrapper">
    <div class="modal__header" />
    <div class="modal__img">
      {#if imgSrc}
        <img src={imgSrc} alt={imgAlt} />
      {/if}
    </div>
    <div class="slot">
      <slot />
    </div>
  </div>
</Modal>
