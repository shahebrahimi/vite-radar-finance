<script setup lang="ts">
import {
  profileProjects,
  profileSkills,
  profileEducation,
  profileExperiences,
} from '/@src/data/blocks/advanced/profile'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <ProfileHeader active="overview" />
    <Section color="grey">
      <Container>
        <ProfileWrapper>
          <ProfileBio
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paria sunt
        igitur. Eam tum adesse, cum dolor omnis absit; Suo genere perveniant ad
        extremum; Ita credo. Duo Reges: constructio interrete. Nihil opus est
        exemplis hoc facere longius."
          />

          <ProfileProjects :projects="profileProjects" />

          <ProfileSkills :skills="profileSkills" />

          <ProfileExperience :experiences="profileExperiences" />

          <ProfileEducation :education="profileEducation" />
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