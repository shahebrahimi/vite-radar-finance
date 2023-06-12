<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import { customerLogos, customerLogos2 } from '/@src/data/pages/logos'
import {
  itFeatures,
  itVideoFeatures,
  itContent,
  itProcess,
  testimonials,
  faq,
} from '/@src/data/pages/business'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroM1 />

    <LogoMarquee :logos="customerLogos" compact />

    <Section>
      <Container>
        <SectionTitle
          title="Highly Professional &#8212; Services"
          subtitle="IT services"
        />

        <FeatureBlockA
          alignment="centered"
          :features="itFeatures"
          :columns="3"
          :limit="4"
          size="medium"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle title="How we Work" subtitle="Our Way" />

        <VideoBlockC
          title="Our Process"
          :features="itVideoFeatures"
          source="/assets/video/meeting.mp4"
          poster="data:image/gif;base64,replace_with_your_image"
          links
        />

        <ContentBlockA
          :title="itContent.title"
          :text="itContent.text"
          link="index"
          :images="itContent.images"
        />
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
          <CtaBlockA
            title="We are Professionals"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
    dissimile?"
            cta-primary="Get Started"
            cta-primary-link="/about"
            cta-secondary="Learn More"
            cta-secondary-link="/about"
            inverted
          />
        </div>
      </Container>
    </Section>

    <Section wave="wave-1" shape-color="grey">
      <Container>
        <SectionTitle title="We've got your back" subtitle="Our Process" />

        <FeatureBlockL :features="itProcess" blob dots links />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="Get Started &#8212; Now"
          subtitle="Work with Professionals"
        />

        <!--Subscribe-->
        <SubscriptionCompactBlock
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam."
          label="Get Started Free"
          placeholder="Enter your email"
        />

        <TestimonialBlockA :testimonials="testimonials" />

        <CtaBlockA
          title="Register Now"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
        dissimile?"
          cta-primary="Get Started"
          cta-primary-link="/"
          cta-secondary="Learn More"
          cta-secondary-link="/about"
          :logos="customerLogos2"
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
