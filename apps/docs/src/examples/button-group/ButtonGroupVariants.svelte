<script lang="ts">
  import { Button, ButtonGroup } from "@kori-ui/svelte";
</script>

<div class="flex flex-col gap-6 max-w-2xl">
  <ButtonGroup variant="primary" class="w-full">
    <Button>Primary</Button>
    <Button>Action</Button>
    <Button>Group</Button>
  </ButtonGroup>

  <ButtonGroup variant="secondary">
    <Button>Secondary</Button>
    <Button>Action</Button>
    <Button>Group</Button>
  </ButtonGroup>

  <ButtonGroup variant="outline">
    <Button>Outline</Button>
    <Button>Action</Button>
    <Button>Group</Button>
  </ButtonGroup>

  <ButtonGroup variant="ghost">
    <Button>Ghost</Button>
    <Button>Action</Button>
    <Button>Group</Button>
  </ButtonGroup>

  <ButtonGroup variant="danger">
    <Button>Danger</Button>
    <Button>Action</Button>
    <Button>Group</Button>
  </ButtonGroup>

  <ButtonGroup variant="soft-danger">
    <Button>Soft Danger</Button>
    <Button>Action</Button>
    <Button>Group</Button>
  </ButtonGroup>
</div>
