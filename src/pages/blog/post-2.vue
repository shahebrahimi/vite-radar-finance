<script setup lang="ts">
import { post } from '/@src/data/pages/blog/post'
import { footer } from '/@src/data/footer'
</script>

<template>
  <div>
    <Section>
      <Container>
        <BlogPost :content="post" centered />
      </Container>
    </Section>

    <Footer :content="footer" color="dark" />
  </div>
</template>
