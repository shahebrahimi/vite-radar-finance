<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import {
  businessSolutions,
  videoFeatures,
  testimonials,
} from '/@src/data/pages/banking'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroM />

    <Section color="grey">
      <Container>
        <LogoStats
          title="Over $1 billion"
          subtitle="Transactions from our clients in 2021"
          heading="Join us and grow"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis negat? Fortemne possumus dicere eundem illum Torquatum? De illis, cum volemus."
          :logos="customerLogos"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SideBenefits
          subtitle="DATA DRIVEN"
          title="Your entire business, connected and powered by AI"
          content="To grow your business on today’s dynamic marketplaces, you need
                an advantage.
                With our AI working continually behind the scenes, you can
                unlock growth opportunities and compete at the highest level
                24/7."
          image="/assets/illustrations/features/banking-cards-feature.png"
          dark-image="/assets/illustrations/features/banking-cards-feature-dark.png"
          image-width="500"
          image-height="500"
          :benefits="[
            'Upgrade your customer experience instantly',
            'Retain more, happier customers',
            'Start with done-for-you account setup',
            'Track results in real-time',
          ]"
          reverse
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="Get Started &#8212; It's Free"
          subtitle="Don't miss this opportunity"
        />

        <VideoBlockB
          title="Our Product"
          :features="videoFeatures"
          source="/assets/video/meeting.mp4"
          poster="data:image/gif;base64,replace_with_your_image"
        />

        <hr />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="A Solution for each use case"
          subtitle="Business solutions"
        />

        <PulseCards :features="businessSolutions" links animated />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="They talk about us"
          subtitle="Feedback from our customers"
        />

        <TestimonialBlockA
          :testimonials="testimonials"
          boxed
          :columns="3"
          :limit="4"
        />

        <hr />

        <CtaBlockH
          small-text="Get Started"
          title="Start Banking"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
          image="/assets/illustrations/apps/app-widgets-slant.png"
          dark-image="/assets/illustrations/apps/app-widgets-slant.png"
        >
          <Buttons>
            <Button :to="'index'" color="primary" :long="2" bold raised>
              Get Started
            </Button>
            <Button :to="'index'" :long="2" bold raised>Learn More</Button>
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
