<script lang="ts">
  interface Props {
    tag: keyof typeof iconMap;
    width?: string;
    height?: string;
    opacity?: number;
    color?: string;
    focusable?: string | number | null | undefined;
    class?: string;
  }

  let {
    tag,
    width,
    height,
    opacity = 1,
    color = "black",
    focusable = undefined,
    class: className = "",
  }: Props = $props();

  let iconMap = {
    hashtag: {
      box: { minX: 0, minY: -960, width: 960, height: 960 },
      svg: `<path d="m240-160 40-160H120l20-80h160l40-160H180l20-80h160l40-160h80l-40 160h160l40-160h80l-40 160h160l-20 80H660l-40 160h160l-20 80H600l-40 160h-80l40-160H360l-40 160h-80Zm140-240h160l40-160H420l-40 160Z"/>`,
    },
    textFields: {
      box: { minX: 0, minY: -960, width: 960, height: 960 },
      svg: `<path d="M280-160v-520H80v-120h520v120H400v520H280Zm360 0v-320H520v-120h360v120H760v320H640Z"/>`,
    },
    dataObject: {
      box: { minX: 0, minY: -960, width: 960, height: 960 },
      svg: `<path d="M560-160v-80h120q17 0 28.5-11.5T720-280v-80q0-38 22-69t58-44v-14q-36-13-58-44t-22-69v-80q0-17-11.5-28.5T680-720H560v-80h120q50 0 85 35t35 85v80q0 17 11.5 28.5T840-560h40v160h-40q-17 0-28.5 11.5T800-360v80q0 50-35 85t-85 35H560Zm-280 0q-50 0-85-35t-35-85v-80q0-17-11.5-28.5T120-400H80v-160h40q17 0 28.5-11.5T160-600v-80q0-50 35-85t85-35h120v80H280q-17 0-28.5 11.5T240-680v80q0 38-22 69t-58 44v14q36 13 58 44t22 69v80q0 17 11.5 28.5T280-240h120v80H280Z"/>`,
    },
    deleteTrash: {
      box: { minX: 0, minY: -960, width: 960, height: 960 },
      svg: `<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>`,
    },
    editPencil: {
      box: { minX: 0, minY: -960, width: 960, height: 960 },
      svg: `<path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>`,
    },
    addPlus: {
      box: { minX: 0, minY: -960, width: 960, height: 960 },
      svg: `<path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>`,
    },
    playArrow: {
      box: { minX: 0, minY: -960, width: 960, height: 960 },
      svg: `<path d="M320-200v-560l440 280-440 280Z"/>`,
    },
    pause: {
      box: { minX: 0, minY: -960, width: 960, height: 960 },
      svg: `<path d="M560-200v-560h160v560H560Zm-320 0v-560h160v560H240Z"/>`,
    },
    folderOpen: {
      box: { minX: 0, minY: -960, width: 960, height: 960 },
      svg: `<path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640H160v400l96-320h684L837-217q-8 26-29.5 41.5T760-160H160Z"/>`,
    },
    upload: {
      box: { minX: 0, minY: -960, width: 960, height: 960 },
      svg: `<path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/>`,
    },
    clock: {
      box: { minX: 0, minY: -960, width: 960, height: 960 },
      svg: `<path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/>`,
    },
    shuffle: {
      box: { minX: 0, minY: -960, width: 960, height: 960 },
      svg: `<path d="M560-160v-80h104L537-367l57-57 126 126v-102h80v240H560Zm-344 0-56-56 504-504H560v-80h240v240h-80v-104L216-160Zm151-377L160-744l56-56 207 207-56 56Z"/>`,
    },
    moreVert: {
      box: { minX: 0, minY: -960, width: 960, height: 960 },
      svg: `<path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/>`,
    },
    contentCopy: {
      box: { minX: 0, minY: -960, width: 960, height: 960 },
      svg: `<path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"/>`,
    },
    check: {
      box: { minX: 0, minY: -960, width: 960, height: 960 },
      svg: `<path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>`,
    },
  } as const;

  let displayIcon = iconMap[tag];
</script>

<svg
  class={className}
  {focusable}
  {opacity}
  {width}
  {height}
  fill={color}
  viewBox="{displayIcon.box.minX} {displayIcon.box.minY} {displayIcon.box
    .width} {displayIcon.box.height}">{@html displayIcon.svg}</svg
>
