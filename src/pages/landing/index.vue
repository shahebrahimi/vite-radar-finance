<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import {
  appFeatures,
  tabbedProcess,
  testimonials,
} from '/@src/data/pages/marketing'
import { features } from '/@src/data/blocks/features'
import { footer } from '/@src/data/footer'
</script>

<template>
  <div>
    <HeroB />

    <Section>
      <Container>
        <LogoSection
          title="WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500"
          :logos="customerLogos"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="DATA DRIVEN"
          title="Your entire business, connected and powered by AI"
          content="To grow your business on today’s dynamic marketplaces, you need
                an advantage.
                With our AI working continually behind the scenes, you can
                unlock growth opportunities and compete at the highest level
                24/7."
          cta="Explore our features"
          to="/"
          image="/assets/illustrations/features/thinking.svg"
          image-width="192"
          image-height="150"
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="Build, optimize, and analyze your advertising"
          subtitle="The industry-leading Advertising Optimization solution"
        />

        <AppSection
          :features="appFeatures"
          image="/assets/illustrations/apps/hero-app-screen.png"
          dark-image="/assets/illustrations/apps/hero-app-screen-dark.png"
          image-width="1519"
          image-height="949"
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <!--Section Title-->
        <SectionTitle
          title="Goal based campaign creation made easy"
          subtitle="A solution to instantly reach your customers"
        />

        <!--Process Title-->
        <TabbedSection
          :steps="tabbedProcess.steps"
          :images="tabbedProcess.images"
          image-width="800"
          image-height="1011"
        />
      </Container>
    </Section>

    <Section color="darker">
      <Container>
        <SpinnerSection
          inverted
          subtitle="Optional Ad Management Services"
          title="Results-driven, affordable ad management"
          content="Partner with our advertising experts to save time, boost performance, and meet your milestones on your growth journey."
          cta="Learn about our optional services"
          to="index"
          image="/assets/illustrations/chart/vulk-chart.png"
          layer-base="/assets/illustrations/chart/vulk-chart"
          layer-extension="svg"
          image-width="150"
          image-height="150"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <FeatureBlockA :features="features" :columns="3" :limit="8" />
        <!--Section Title-->
        <SectionTitle
          class="pt-6"
          title="Why Vulk, straight from our customers"
          subtitle="Take a quick look at what they say"
        />
        <TestimonialsGrid :testimonials="testimonials" blobs />
      </Container>
    </Section>

    <Section bottom-spaced>
      <Container>
        <SideSection
          subtitle="Artificial Intelligence"
          title="Unlock growth with artificial intelligence"
          content="Save time and money with automated campaign creation, execution and optimization. Input your strategic objectives (growth, profitability, brand defense, awareness), and rely on Vulk's ad engine to execute tactically."
          cta="Learn more about our product"
          to="index"
          image="/assets/illustrations/features/earning.svg"
          dark-image="/assets/illustrations/features/earning-dark.svg"
          blob
          image-width="192"
          image-height="150"
        />
      </Container>
    </Section>

    <Footer :content="footer" color="dark" />
  </div>
</template>
