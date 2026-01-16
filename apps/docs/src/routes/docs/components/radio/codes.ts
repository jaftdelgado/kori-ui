export const basicCode = `<script>
  import { RadioGroup, Radio } from "@kori-ui/radio";

  let plan = $state("hobby");
</script>

<RadioGroup bind:value={plan}>
  <Radio value="hobby" label="Hobby Plan" description="10GB Storage" />
  <Radio value="pro" label="Pro Plan" description="100GB Storage" />
  <Radio value="enterprise" label="Enterprise" description="Unlimited" />
</RadioGroup>`;

export const sizesCode = `<RadioGroup size="sm" value="sm">
  <Radio value="sm" label="Small size" />
</RadioGroup>

<RadioGroup size="md" value="md">
  <Radio value="md" label="Medium size (Default)" />
</RadioGroup>

<RadioGroup size="lg" value="lg">
  <Radio value="lg" label="Large size" />
</RadioGroup>`;

export const orientationCode = `<RadioGroup orientation="horizontal" value="opt1">
  <Radio value="opt1" label="Option 1" />
  <Radio value="opt2" label="Option 2" />
  <Radio value="opt3" label="Option 3" />
</RadioGroup>`;

export const disabledCode = `<RadioGroup disabled value="1">
  <Radio value="1" label="Group Disabled" />
  <Radio value="2" label="Option 2" />
</RadioGroup>

<RadioGroup value="2">
  <Radio value="1" label="Normal Option" />
  <Radio value="2" label="Option Disabled" disabled />
</RadioGroup>`;
