<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import { marketingIconFeatures } from '/@src/data/pages/marketing'
import { features } from '/@src/data/blocks/features'
import { footer } from '/@src/data/footer'
</script>

<template>
  <div>
    <HeroC />

    <Section>
      <Container>
        <FeatureBlockA :features="features" :columns="3" :limit="8" />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="Managed Services"
          title="Market based DSP managed service"
          content="Whether you're looking to maximize reach, grow incremental profits, or optimize towards custom metrics, our team of experts is here to ensure success is targeted to your KPIs."
          image="/assets/illustrations/features/feature-1.png"
          dark-image="/assets/illustrations/features/feature-1-dark.png"
          image-width="800"
          image-height="625"
          blob
          to="index"
        >
          <template #content>
            <QuickFeatures
              class="mt-4"
              :features="['Budget efficiency', 'Focus on your work']"
            />
          </template>
        </SideSection>
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          reverse
          subtitle="Goal-based Campaign Creation"
          title="Build campaigns aligned to your goals in minutes"
          content="Start with your business goals at a product level and let us automatically create ad groups and campaigns targeted to the right audiences. Do all of this at scale in just a few minutes with four simple steps."
          image="/assets/illustrations/features/feature-2.png"
          dark-image="/assets/illustrations/features/feature-2-dark.png"
          image-width="967"
          image-height="800"
          blob
          to="/"
        >
          <template #content>
            <QuickFeatures
              class="mt-4"
              :benefits="['By product campaigns', 'Buyer targeting']"
            />
          </template>
        </SideSection>
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="Automated Keyword Actions"
          title="We find the best keywords based on your parameters"
          content="Automate and customize your keyword selection by setting thresholds on conversions, cost per conversion, and click rates, and free up valuable time you can use for other important business tasks."
          image="/assets/illustrations/features/feature-3.png"
          dark-image="/assets/illustrations/features/feature-3-dark.png"
          image-width="967"
          image-height="800"
          blob
          to="/"
        >
          <template #content>
            <QuickFeatures
              class="mt-4"
              :benefits="['Add / remove keywords', 'Automatic refine']"
            />
          </template>
        </SideSection>
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          reverse
          subtitle="Custom Analytics"
          title="Understand your business metrics, your way"
          content="Drill and slice into your advertising performance data by different metrics, brand names, campaigns, targeting types, and more."
          image="/assets/illustrations/features/feature-4.png"
          dark-image="/assets/illustrations/features/feature-4-dark.png"
          image-width="967"
          image-height="800"
          blob
          to="/"
        >
          <template #content>
            <QuickFeatures
              class="mt-4"
              :benefits="['Assess profitability', 'Export bulk data']"
            />
          </template>
        </SideSection>
      </Container>
    </Section>

    <Section>
      <Container>
        <CaseStudy background="data:image/gif;base64,replace_with_your_image">
          <SideSection
            subtitle="Success Stories"
            title="Learn how they built a successful business"
            content="See how some of our customers leverage Vulk technology to increase profits and take back control from resellers"
            image="/assets/illustrations/features/feature-3.png"
            dark-image="/assets/illustrations/features/feature-3-dark.png"
            image-width="967"
            image-height="800"
            cta="Read success stories"
            inverted
            to="/"
          />
        </CaseStudy>
      </Container>
    </Section>

    <Section>
      <Container>
        <LogoSection
          title="WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500"
          :logos="customerLogos"
        />
      </Container>
    </Section>

    <Section bottom-spaced>
      <Container>
        <SectionTitle
          title="Three reasons you’ll love our solution"
          subtitle="Why you should try our Optimization solution"
        />

        <IconSection :features="marketingIconFeatures" />
      </Container>
    </Section>

    <Footer :content="footer" color="dark" />
  </div>
</template>
