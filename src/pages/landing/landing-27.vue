<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import {
  insuranceFeatures,
  values,
  appFeatures,
  featureMatrix,
  testimonials,
} from '/@src/data/pages/insurance'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroW1 />

    <LogoMarquee :logos="customerLogos" compact />

    <Section>
      <Container>
        <SectionTitle
          title="Find the best insurance deal"
          subtitle="Optimize"
        />

        <StackedSection
          :features="insuranceFeatures"
          image="/assets/illustrations/features/ensuring.svg"
          dark-image="/assets/illustrations/features/ensuring-dark.svg"
          rounded
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <LogoStats
          title="Over $1 billion"
          subtitle="Transactions from our clients in 2021"
          heading="Join us and grow"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis negat? Fortemne possumus dicere eundem illum Torquatum? De illis, cum volemus."
          :logos="customerLogos"
        />

        <!--Company Values-->
        <ValuesSection :values="values" />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="Sig up for your personal dashboard"
          subtitle="Get Started"
        />

        <AppSection
          :features="appFeatures"
          image="/assets/illustrations/apps/insurance-app.png"
          dark-image="/assets/illustrations/apps/insurance-app-dark.png"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <TestimonialBlock
          image="data:image/gif;base64,replace_with_your_image"
          title="I had trouble finding a fair deal. Then I simply decided to start
          using Vulk and it actually worked!"
          content="Isabella's insurance policy deals that were found on our platform
          completely changed her life and removed all the hassle."
          link-label="Read Isabella's Story"
          link="/about"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="We've got you covered"
          subtitle="Strong Benefits"
        />

        <FeatureBlockA
          :features="featureMatrix"
          :columns="3"
          :limit="8"
          size="small"
        />
      </Container>
    </Section>

    <Section wave="wave-2">
      <Container>
        <CenteredMedia
          title="The Tool made for people like you"
          cta-text="Start My Free-Trial"
          cta-link="/about"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="They're in love with what we do"
          subtitle="Why you should try"
        />
      </Container>
    </Section>

    <TestimonialsMarquee :testimonials="testimonials" color="grey" compact />

    <Section color="grey" wave="wave-2" shape-color="footer-dark">
      <Container>
        <CompanyGrid
          class="-mt-6"
          title="The best insurance deals"
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
