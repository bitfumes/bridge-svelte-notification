<script>
  import Content from "./Content.svelte";
  import { afterUpdate } from "svelte";
  import {
    left,
    right,
    bottomleft,
    bottomright,
    bottomcenter,
    center
  } from "./store.js";
</script>

<div style="position:absolute">
  {#each $left as data}
    <Content {data} />
  {/each}
</div>

<div style="position:absolute" class="center">
  {#each $center as data}
    <Content {data} />
  {/each}
</div>

<div style="position:absolute" class="right">
  {#each $right as data, i (i)}
    <Content {data} />
  {/each}
</div>

<div style="position:absolute" class="bottom left">
  {#each $bottomleft as data}
    <Content {data} />
  {/each}
</div>

<div style="position:absolute" class="bottom center">
  {#each $bottomcenter as data}
    <Content {data} />
  {/each}
</div>

<div style="position:absolute" class="bottom right">
  {#each $bottomright as data}
    <Content {data} />
  {/each}
</div>
