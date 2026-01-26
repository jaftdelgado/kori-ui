<script lang="ts">
  import { Accordion } from "@kori-ui/svelte";

  const items = [
    {
      title: "Introducción",
      content: "Kori UI es una biblioteca de componentes moderna y rápida."
    },
    {
      title: "Instalación",
      content: "Ejecuta 'npm install @kori-ui/svelte' en tu terminal."
    },
    {
      title: "Configuración Avanzada",
      content: "Esta sección está deshabilitada temporalmente."
    }
  ];
</script>

<div class="w-full max-w-md">
  <Accordion {items} />
</div>
