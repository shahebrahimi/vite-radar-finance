<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import {
  jobs,
  jobTopics,
  jobCategories,
  candidates,
  testimonials,
} from '/@src/data/pages/jobs'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroX />

    <LogoMarquee :logos="customerLogos" compact />

    <Section wave="wave-1">
      <Container>
        <SectionTitle title="Featured Jobs" subtitle="Featured" />

        <JobGrid :jobs="jobs" />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle title="Popular Categories" subtitle="Popular" />

        <FeatureBlockA
          alignment="centered"
          :features="jobCategories"
          :columns="3"
          :limit="8"
          size="medium"
          links
        />

        <div class="my-4">
          <Buttons alignment="centered">
            <Button color="primary" :long="3" raised bold>
              All Categories
            </Button>
          </Buttons>
        </div>

        <LogoMarquee :logos="customerLogos" compact />
      </Container>
    </Section>

    <Section
      v-background="{
        src: 'data:image/gif;base64,replace_with_your_image',
        placeholder: 'https://dummyimage.com/1920x1080/',
      }"
      overlay
    >
      <Container>
        <div class="py-6">
          <div class="columns">
            <div class="column is-5 is-offset-7">
              <CtaBlockA
                title="List your skills"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
    dissimile?"
                cta-primary="Get Started"
                cta-primary-link="/about"
                cta-secondary="Learn More"
                cta-secondary-link="/about"
                boxed
                shapes
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle title="Hot Topics" subtitle="Trending" />

        <JobTopics :topics="jobTopics" :limit="12" />
      </Container>
    </Section>

    <Section color="grey" wave="wave-2" shape-color="footer-dark">
      <Container>
        <SectionTitle title="They just joined" subtitle="Freshmen" />

        <TeamBlockB :items="candidates" bubbles />

        <TestimonialsCarouselSingle :slides="testimonials" />

        <CompanyGrid
          class="-mt-6"
          title="We work with the leaders"
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
