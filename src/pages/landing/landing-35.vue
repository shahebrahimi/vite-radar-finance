<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import {
  mobileAppFeatures,
  runningFeature,
  reportFeature,
  dashboardFeature,
  workoutTimeline,
  workoutPricingPlans,
  workoutTestimonials,
  workoutFaq,
} from '/@src/data/pages/workout'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroE1 />

    <Section wave="wave-1" shape-color="grey">
      <Container>
        <FeatureBlockA
          alignment="centered"
          :features="mobileAppFeatures"
          :columns="3"
          :limit="8"
          size="medium"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SideSectionIcons
          subtitle="Performance"
          title="Unlock your potential"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos."
          :features="runningFeature"
          image="/assets/illustrations/features/workout-feature-1.png"
          dark-image="/assets/illustrations/features/workout-feature-1-dark.png"
          blob
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SideSectionIcons
          subtitle="Tracking"
          title="Track your progress"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos."
          :features="reportFeature"
          image="/assets/illustrations/features/workout-feature-2.png"
          dark-image="/assets/illustrations/features/workout-feature-2-dark.png"
          blob
          reverse
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle title="Lifestyle dashboard" subtitle="Live the life" />

        <AppSectionShapes
          :features="dashboardFeature"
          image="/assets/illustrations/apps/personal-dashboard.png"
          dark-image="/assets/illustrations/apps/personal-dashboard-dark.png"
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="Update your lifestyle"
          subtitle="A simple process"
        />

        <TimelineFeatures :items="workoutTimeline" />
      </Container>
    </Section>

    <Section tongue="tongue-1">
      <Container>
        <PricingDuo
          title="Our plans"
          subtitle="Duplexque isdem diebus acciderat malum, quod et Theophilum insontem
            atrox interceperat casus."
          :plans="workoutPricingPlans"
          rounded
          polka-dots
        />
      </Container>
    </Section>

    <TestimonialsCarouselColor :slides="workoutTestimonials" />

    <Section tongue="tongue-2" bottom-narrow>
      <Container>
        <SectionTitle
          title="Take the time to read our FAQs"
          subtitle="Frequently Asked"
        />

        <DoubleFaqCollapse
          :left="workoutFaq.left"
          :right="workoutFaq.right"
          chevrons
        />

        <CtaBlockB
          title-primary="Start Now!"
          content-primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
          cta-primary="Free Trial"
          cta-primary-link="/"
          title-secondary="More info?"
          content-secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
          cta-secondary="Contact Us"
          cta-secondary-link="/"
          boxed
          shapes
          animated
        />

        <DownloadCta
          apple-url="https://apple.com"
          google-url="https://google.com"
        />
      </Container>
    </Section>

    <FooterD
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones."
      color="default"
      :social-links="socialLinks"
    />
  </div>
</template>
