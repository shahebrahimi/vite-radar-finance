<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import {
  marketingProcess,
  marketingStats,
  testimonialsMarquee,
} from '/@src/data/pages/marketing'
import { features } from '/@src/data/blocks/features'
import { footer } from '/@src/data/footer'
</script>

<template>
  <div>
    <HeroA />

    <!--Hero Marquee-->
    <LogoMarquee :logos="customerLogos" />

    <Section>
      <Container>
        <BoxedSection
          minititle="Join Early Access!"
          title="Your entire ecommerce business, connected and powered by AI"
          subtitle="INTRODUCING VULK"
          content="The first-ever Marketplace Optimization Platform, designed to
                optimize your ecommerce business for smart, strategic growth."
          image="/assets/illustrations/chart/circular-people-chart.png"
          dark-image="/assets/illustrations/chart/circular-people-chart-dark.png"
          image-width="800"
          image-height="625"
          cta="Learn more about our product"
          to="index"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="Goal based campaign creation made easy"
          subtitle="A solution to instantly reach your customers"
        />

        <ProcessSection
          :steps="marketingProcess.steps"
          image-width="800"
          image-height="800"
        />

        <FeatureBlockA :features="features" :columns="3" :limit="8" />

        <SimpleCta />
      </Container>
    </Section>

    <Section color="darker">
      <template #background>
        <SectionMap />
      </template>
      <Container>
        <SideSection
          inverted
          bordered
          subtitle="Optional Ad Management Services"
          title="Results-driven, affordable ad management"
          content="Partner with our advertising experts to save time, boost performance, and meet your milestones on your growth journey."
          cta="Learn about our optional services"
          :to="{ name: 'index' }"
          legend="Value-per-Click vs. Bid Price"
          image="/assets/illustrations/chart/gap-before.png"
          image-width="524"
          image-height="365"
        />

        <NumbersSection
          inverted
          subtitle="AI Technology"
          title="Our data scale powers your success"
          content="Our immense data scale feeds our machine learning and
                algorithms, so you can rest assured that every decision our AI
                makes is a smart one."
          :numbers="marketingStats"
          animated
        />
      </Container>
    </Section>

    <Section color="gradient">
      <Container>
        <SectionTitle
          inverted
          title="Why Vulk, straight from our customers"
          subtitle="Take a quick look at what they say"
        />
      </Container>
    </Section>

    <TestimonialsMarquee :testimonials="testimonialsMarquee" color="gradient" />

    <Section bottom-spaced>
      <Container>
        <!--Side Section-->
        <SideSection
          subtitle="Full growth unleashed"
          title="Unlock growth with Artificial Intelligence"
          content="To grow your business on today’s dynamic marketplaces, you need
                an advantage. That’s where Vulk's data science comes in.
                With our AI working continually behind the scenes, you can
                unlock growth opportunities and compete at the highest level
                24/7."
          cta="Learn about our technology"
          to="index"
          image="/assets/illustrations/people/services.png"
          dark-image="/assets/illustrations/people/services-dark.png"
          image-width="524"
          image-height="365"
        />
      </Container>
    </Section>

    <Footer :content="footer" color="dark" />
  </div>
</template>
