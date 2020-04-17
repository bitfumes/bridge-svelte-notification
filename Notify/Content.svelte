<script>
  import { onDestroy } from "svelte";
  import { fade, fly } from "svelte/transition";
  export let data;
</script>

<style>
  :global(.content) {
    padding: 0.75rem;
    margin: 0.3rem;
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    max-width: 32rem;
  }

  :global(.box) {
    z-index: 10;
    color: #fff;
    position: relative;
    display: flex;
  }

  :global(.success) {
    background-color: #38a169;
  }

  :global(.error) {
    background-color: #e53e3e;
  }

  :global(.warning) {
    background-color: #d69e2e;
  }

  :global(.info) {
    background-color: #718096;
  }

  :global(.normal) {
    color: #000;
    background-color: #fff;
  }

  :global(.bottom) {
    bottom: 0;
  }

  :global(.center) {
    left: 50%;
    transform: translate(-50%, 0);
  }

  :global(.left) {
    left: 0;
  }

  :global(.right) {
    right: 0;
  }
</style>

<div class="box">
  {#if data.message !== null}
    <p
      class="content {data.color ? '' : data.type}"
      style={data.style}
      in:fly={data.animate}
      out:fade>
      {data.message}
    </p>
  {/if}
</div>
