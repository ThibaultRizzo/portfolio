<script>
  export let techno;
</script>

<style lang="scss">
  $TECHNO_HEIGHT: 60px;
  $TECHNO_WIDTH: 40px;
  .techno__logo {
    margin-bottom: 5px;
    width: 100%;
    max-height: calc(#{$TECHNO_HEIGHT} * 0.75 - 5px);
    height: auto;
  }
  .techno__label {
    margin: 0;
    height: $TECHNO_HEIGHT / 4;
    font-size: 80%;
  }

  .techno__container {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: $TECHNO_WIDTH;
    justify-content: flex-end;
    height: $TECHNO_HEIGHT;
    margin: 0 20px;
  }
</style>

<div class="techno__container">
  <img class="techno__logo" src={techno.logo} alt={`Logo de ${techno.label}`} />
  <h3 class="techno__label">{techno.label}</h3>
</div>
