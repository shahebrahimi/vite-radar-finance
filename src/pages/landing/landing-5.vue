<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import {
  supportFeatures,
  coloredFeaturesFirst,
  coloredFeaturesSecond,
  testimonials,
  faq,
  customerLogos,
} from '/@src/data/pages/support'

import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroD />

    <Section>
      <Container>
        <SectionTitle
          title="Put your clipboard at work"
          subtitle="Get Started Fast"
        />

        <StackedSection
          :features="supportFeatures"
          image="/assets/illustrations/features/calling.svg"
          dark-image="/assets/illustrations/features/calling.svg"
          image-width="500"
          image-height="500"
          rounded
        />
      </Container>
    </Section>

    <Section wave="wave-1">
      <Container>
        <SectionTitle
          title="Powerful tools to help you"
          subtitle="Try out our tools"
        />

        <ContentBlockH
          :title="coloredFeaturesFirst.title"
          :text="coloredFeaturesFirst.text"
          :images="coloredFeaturesFirst.images"
          links
        />

        <ContentBlockH
          :title="coloredFeaturesSecond.title"
          :text="coloredFeaturesSecond.text"
          :images="coloredFeaturesSecond.images"
          compact
          links
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="Get Started &#8212; It's Free"
          subtitle="Don't miss this opportunity"
        />

        <SubscriptionCompactBlock
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam."
          label="Get Started Free"
          placeholder="Enter your email"
        />

        <TestimonialBlockA :testimonials="testimonials" />

        <CtaBlockA
          title="Subscribe Now"
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

    <Section color="grey">
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
