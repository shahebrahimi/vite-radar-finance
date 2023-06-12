<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import {
  creatorFeatures,
  successFeatures,
  featuredCreators,
  testimonials,
} from '/@src/data/pages/creators'

import { customerLogos } from '/@src/data/pages/logos'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroP />

    <Section tongue="tongue-1">
      <Container>
        <VideoBlockA
          title="The Tool for Creators"
          source="/assets/video/meeting.mp4"
          poster="data:image/gif;base64,replace_with_your_image"
          :features="successFeatures"
          links
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="Easily setup a premium communty"
          subtitle="Strong Communities"
        />

        <FeatureBlockA
          :features="creatorFeatures"
          :columns="3"
          :limit="8"
          size="small"
        />
      </Container>
    </Section>

    <Section wave="wave-2">
      <Container>
        <CenteredMedia
          title="The Tool made for creators like you"
          cta-text="Start Your Community"
          cta-link="/about"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <ContentBlockB
          :title="featuredCreators.title"
          :subtitle="featuredCreators.subtitle"
          :text="featuredCreators.text"
          :images="featuredCreators.images"
          link="index"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="Three reasons you’ll love our solution"
          subtitle="Why you should try our Optimization solution"
        />

        <TabbedSectionCentered />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="Engagement"
          title="Enaging discussions and connections"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Duo Reges: constructio interrete. Ad eas enim res ab Epicuro praecepta dantur."
          cta="Learn More"
          to="index"
          image="/assets/illustrations/features/creator-feature-1.png"
          dark-image="/assets/illustrations/features/creator-feature-1-dark.png"
          image-width="800"
          image-height="714"
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="Experience"
          title="Branded community experience"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Duo Reges: constructio interrete. Ad eas enim res ab Epicuro praecepta dantur."
          cta="Learn More"
          to="index"
          image="/assets/illustrations/features/creator-feature-2.png"
          dark-image="/assets/illustrations/features/creator-feature-2-dark.png"
          image-width="800"
          image-height="714"
          reverse
          blob
        />
      </Container>
    </Section>

    <Section wave="wave-1">
      <Container>
        <SideSection
          subtitle="Integrations"
          title="Easily connects with your tools"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Duo Reges: constructio interrete. Ad eas enim res ab Epicuro praecepta dantur."
          cta="Learn More"
          to="index"
          image="/assets/illustrations/features/creator-feature-3.svg"
          dark-image="/assets/illustrations/features/creator-feature-3-dark.svg"
          image-width="800"
          image-height="714"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="Three reasons you’ll love our solution"
          subtitle="Why you should try our Optimization solution"
        />
      </Container>
    </Section>
    <TestimonialsMarquee :testimonials="testimonials" color="grey" compact />

    <Section color="grey" wave="wave-2" shape-color="footer-dark">
      <Container>
        <CompanyGrid
          class="-mt-6"
          title="Who are our business mentors?"
          :logos="customerLogos"
          :limit="20"
        />
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
