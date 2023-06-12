<script setup lang="ts">
import { profileProjects } from '/@src/data/blocks/advanced/profile'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <ProfileHeader active="projects" />
    <Section color="grey">
      <Container>
        <ProfileWrapper large>
          <ProfileProjectsGrid :projects="profileProjects" />
        </ProfileWrapper>
      </Container>
    </Section>

    <FooterD
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones."
      color="dark"
      :social-links="socialLinks"
    />
  </div>
</template>