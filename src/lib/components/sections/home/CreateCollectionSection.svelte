<script>
	import { Section, Container, Button, Stack, Tagline } from "$lib/components/atoms/index";
</script>

<Section>
	<Container>
		<Stack>
			<!-- TODO: ADD 3D SHAPE -->
			<Tagline>CRATE YOUR COLLECTION</Tagline>
			<h2>Token Minter</h2>
			<p>Deploy collections and contract without code.</p>
			<div class="buttons-group">
				<Button class="small ghost">Contract Generator</Button>
				<Button class="small">Collection Generator</Button>
			</div>
		</Stack>
	</Container>
</Section>

<style type="scss">
  .buttons-group {
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}
</style>