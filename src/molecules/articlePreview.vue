<template>
  <div>
    <slot name=link href=/@user-name/id-article>
      <slot name=title>Titre de l'article</slot>
      <slot name=picture src=https://dev.neomad.org/static/images/article.png alt></slot>
      <slot name=content>
        The first words extract from the article, It's will take more than one lines
        so be carrefull to the size avaiblable and font-size.<br />
      </slot>
    </slot>
  </div>
</template>

<style>

</style>
