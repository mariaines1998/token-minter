<script>
  import { Button } from "$lib/components/atoms/index"; 

  export let onSubmitText = "Next";
  export let onSubmitAction
  export let errors;
  export let submit = false;
  export let disabled = false;
</script>

<div>
  <!-- Buttons for form submitting -->
  {#if submit}
    <!-- If error object is given -->
    {#if errors}
      {#if Object.values(errors).every(element => element === null)}
        <Button type="submit">
          {onSubmitText}
        </Button>
      {:else}
        <Button type="submit" disabled class="disabled">
          {onSubmitText}
        </Button>	
      {/if}
    <!-- Without error object -->
    {:else}
      <Button type="submit">
        {onSubmitText}
      </Button>
    {/if}
  <!-- Buttons that do not submit forms -->
  {:else}
    {#if disabled}
      <Button on:click={onSubmitAction} disabled class="disabled">
        {onSubmitText}
      </Button>
    {:else}
      <Button on:click={onSubmitAction}>
        {onSubmitText}
      </Button>
    {/if}
  {/if}
</div>