<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import {
  mentorBoxCarousel,
  mentorStats,
  mentorTestimonials,
  mentorsFaq,
} from '/@src/data/pages/mentors'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroJ />

    <Section>
      <template #background>
        <SectionMap light />
      </template>
      <Container>
        <CompanyGrid
          title="Who are our business mentors?"
          :logos="customerLogos"
          :limit="20"
        />
      </Container>
    </Section>

    <Section tongue="tongue-1">
      <Container>
        <BoxCarousel :slides="mentorBoxCarousel" />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="Mentors"
          title="Find your mentor match with filters"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Duo Reges: constructio interrete. Ad eas enim res ab Epicuro praecepta dantur."
          cta="Learn More"
          to="index"
          image="/assets/illustrations/features/advisors-feature-1.png"
          dark-image="/assets/illustrations/features/advisors-feature-1-dark.png"
          image-width="776"
          image-height="647"
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="One-on-One"
          title="Schedule a call real quick"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Duo Reges: constructio interrete. Ad eas enim res ab Epicuro praecepta dantur."
          cta="Learn More"
          to="index"
          image="/assets/illustrations/features/advisors-feature-2.png"
          dark-image="/assets/illustrations/features/advisors-feature-2-dark.png"
          image-width="776"
          image-height="647"
          reverse
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="Assistance"
          title="Mentors will apply to help you"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Duo Reges: constructio interrete. Ad eas enim res ab Epicuro praecepta dantur."
          cta="Learn More"
          to="index"
          image="/assets/illustrations/features/advisors-feature-3.png"
          dark-image="/assets/illustrations/features/advisors-feature-3-dark.png"
          image-width="776"
          image-height="647"
          blob
        />
      </Container>
    </Section>

    <Section wave="wave-2" shape-color="darker">
      <Container>
        <SideSection
          subtitle="Subscriptions"
          title="Go beyond one-off calls and seminars"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Duo Reges: constructio interrete. Ad eas enim res ab Epicuro praecepta dantur."
          cta="Learn More"
          to="index"
          image="/assets/illustrations/features/advisors-feature-4.png"
          dark-image="/assets/illustrations/features/advisors-feature-4-dark.png"
          image-width="776"
          image-height="647"
          reverse
          blob
        />
      </Container>
    </Section>

    <Section color="darker">
      <Container>
        <SpinnerSection
          inverted
          subtitle="Results-driven"
          title="Results-driven, affordable business training"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Duo Reges: constructio interrete. Ad eas enim res ab Epicuro praecepta dantur."
          cta="Learn More"
          to="index"
          image="/assets/illustrations/chart/vulk-chart.png"
          layer-base="/assets/illustrations/chart/vulk-chart"
          layer-extension="svg"
          bordered
        />

        <NumbersSection
          inverted
          subtitle="Road to Success"
          title="Our mentors power your success"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Duo Reges: constructio interrete. "
          :numbers="mentorStats"
          animated
        />
      </Container>
    </Section>

    <Section tongue="tongue-2" wave="wave-1">
      <Container>
        <SectionTitle
          title="What our members are saying"
          subtitle="Customer Stories"
        />

        <TestimonialsTabbed
          :trainees="mentorTestimonials.trainees"
          :mentors="mentorTestimonials.mentors"
        />
      </Container>
    </Section>

    <Section color="grey" wave="wave-2" shape-color="footer-dark">
      <Container>
        <SectionTitle
          title="We can help you with that"
          subtitle="Are you Struggling?"
        />

        <PricingAction
          :monthly-price="75"
          :quarterly-price="225"
          :yearly-price="600"
          :discount="30"
        />

        <FaqList :items="mentorsFaq" />

        <CtaBlockH
          small-text="Unlock Growth"
          title="Get Started"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
          background="data:image/gif;base64,replace_with_your_image"
        >
          <Buttons>
            <Button to="/" color="primary" :long="2" bold raised>
              Get Started
            </Button>
            <Button to="/" :long="2" bold raised>Learn More</Button>
          </Buttons>
        </CtaBlockH>
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
