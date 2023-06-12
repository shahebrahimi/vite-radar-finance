<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import {
  commerceAppFeatures,
  salesFeatures,
  growthFeatures,
  businessFeatures,
  managementFeatures,
  testimonials,
  posts,
  customerLogos,
  faq,
} from '/@src/data/pages/commerce'

import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroS />

    <Section>
      <Container>
        <SectionTitle
          title="Create your Digital Store"
          subtitle="Build your Business"
        />

        <AppSectionShapes
          :features="commerceAppFeatures"
          image="/assets/illustrations/apps/commerce-app.png"
          dark-image="/assets/illustrations/apps/commerce-app-dark.png"
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSectionIcons
          subtitle="Start your Business"
          title="Sell Your Products"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos."
          :features="salesFeatures"
          image="/assets/illustrations/features/commerce-feature-1.png"
          dark-image="/assets/illustrations/features/commerce-feature-1-dark.png"
          image-width="900"
          image-height="788"
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSectionIcons
          subtitle="Grow your Business"
          title="Market Your Products"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos."
          :features="growthFeatures"
          image="/assets/illustrations/features/commerce-feature-2.png"
          dark-image="/assets/illustrations/features/commerce-feature-2-dark.png"
          image-width="900"
          image-height="788"
          blob
          reverse
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSectionIcons
          subtitle="Manage your Business"
          title="One Simple Platform"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos."
          :features="businessFeatures"
          image="/assets/illustrations/features/commerce-feature-3.png"
          dark-image="/assets/illustrations/features/commerce-feature-3-dark.png"
          image-width="900"
          image-height="788"
          blob
        />
      </Container>
    </Section>

    <Section color="gradient">
      <Container>
        <TestimonialsCarousel :slides="testimonials" inverted />
      </Container>
    </Section>

    <Section wave="wave-1">
      <Container>
        <SectionTitle
          title="Level-up your selling skills"
          subtitle="Free resources to"
        />

        <ResourceGrid :posts="posts" :limit="3" />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SideSectionIcons
          subtitle="Support your Business"
          title="We're here to help"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos."
          :features="managementFeatures"
          image="/assets/illustrations/features/commerce-feature-4.png"
          image-width="900"
          image-height="788"
          reverse
        />

        <CtaBlockA
          title="Sign Up Now"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
        dissimile?"
          cta-primary="Get Started"
          cta-primary-link="/"
          cta-secondary="Learn More"
          cta-secondary-link="/"
          :logos="customerLogos"
          boxed
          shapes
        />
      </Container>
    </Section>

    <Section color="grey" wave="wave-1" shape-color="white">
      <Container>
        <SectionTitle
          title="Take the time to read our FAQs"
          subtitle="Frequently Asked"
        />

        <DoubleFaqCollapse :left="faq.left" :right="faq.right" chevrons />
      </Container>
    </Section>

    <FooterD
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones."
      color="light"
      :social-links="socialLinks"
    />
  </div>
</template>
