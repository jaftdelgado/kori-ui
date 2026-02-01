<script lang="ts">
  import { Avatar, AvatarGroup } from "@kori-ui/svelte";
</script>

<div class="flex flex-col gap-6">
  <AvatarGroup>
    <Avatar src="https://tapback.co/api/avatar/johndoe" />
    <Avatar src="https://www.tapback.co/api/avatar.webp" />
    <Avatar src="https://www.tapback.co/api/avatar/svelte.webp" />
    <Avatar fallback="+4" />
  </AvatarGroup>

  <AvatarGroup size="sm">
    <Avatar src="https://api.dicebear.com/9.x/glass/svg" />
    <Avatar src="https://api.dicebear.com/9.x/glass/svg?seed=Felix" />
    <Avatar src="https://api.dicebear.com/9.x/glass/svg?seed=Aneka" />
    <Avatar fallback="+2" />
  </AvatarGroup>
</div>
