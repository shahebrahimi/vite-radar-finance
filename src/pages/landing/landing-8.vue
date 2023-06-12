<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import {
  meetingFeatures,
  statistics,
  testimonials,
  posts,
} from '/@src/data/pages/meetings'
import { customerLogos } from '/@src/data/pages/logos'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroH />

    <Section>
      <Container>
        <SectionTitle
          title="Say Hello to Productive Meetings"
          subtitle="Hi Performing Application"
        />

        <AppSection
          :features="meetingFeatures"
          image="/assets/illustrations/apps/meeting-app.png"
          dark-image="/assets/illustrations/apps/meeting-app-dark.png"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="Meetings"
          title="Run effective meetings"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Duo Reges: constructio interrete. Ad eas enim res ab Epicuro praecepta dantur."
          cta="Learn More"
          to="index"
          image="/assets/illustrations/features/meeting-feature-1.png"
          dark-image="/assets/illustrations/features/meeting-feature-1-dark.png"
          image-width="1119"
          image-height="792"
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="Action items"
          title="Foster accountability"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Duo Reges: constructio interrete. Ad eas enim res ab Epicuro praecepta dantur."
          cta="Learn More"
          to="index"
          image="/assets/illustrations/features/meeting-feature-2.png"
          dark-image="/assets/illustrations/features/meeting-feature-2-dark.png"
          image-width="1119"
          image-height="792"
          reverse
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="Feedback"
          title="Encourage continuous improvement"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Duo Reges: constructio interrete. Ad eas enim res ab Epicuro praecepta dantur."
          cta="Learn More"
          to="index"
          image="/assets/illustrations/features/meeting-feature-3.png"
          dark-image="/assets/illustrations/features/meeting-feature-3-dark.png"
          image-width="1119"
          image-height="792"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="Integrations"
          title="Integrate your workflow"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Duo Reges: constructio interrete. Ad eas enim res ab Epicuro praecepta dantur."
          cta="Learn More"
          to="index"
          image="/assets/illustrations/features/meeting-feature-7.png"
          dark-image="/assets/illustrations/features/meeting-feature-7-dark.png"
          image-width="1119"
          image-height="792"
          reverse
        />
      </Container>
    </Section>

    <Section wave="wave-1">
      <Container>
        <SideSection
          subtitle="One-on-One"
          title="A new work experience"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Duo Reges: constructio interrete. Ad eas enim res ab Epicuro praecepta dantur."
          cta="Learn More"
          to="index"
          image="/assets/illustrations/features/meeting-feature-5.png"
          dark-image="/assets/illustrations/features/meeting-feature-5-dark.png"
          image-width="1119"
          image-height="792"
          blob
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="Our Stats speak for themselves"
          subtitle="Outstanding results"
        />

        <ContentBlockI :counters="statistics" />

        <TestimonialBlockC :testimonials="testimonials" squared />

        <LogoMarquee
          class="mt-10"
          title="WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500"
          :logos="customerLogos"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="Level-up your meeting skills"
          subtitle="Free resources to"
        />

        <ResourceGrid :posts="posts" :limit="3" />

        <CtaBlockF
          title="Ready to Go?"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est
              tam dissimile homini quae cum dixisset."
          background="data:image/gif;base64,replace_with_your_image"
          cta="Get Started"
          cta-link="index"
        />
      </Container>
    </Section>

    <FooterC
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones."
      :social-links="socialLinks"
      image="/assets/illustrations/footer/footer-cityscape.png"
    >
      <template #column-1>
        <Title tag="h3" :size="6" weight="thin">
          <span>Discover</span>
        </Title>
        <ul>
          <li>
            <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
              Get Started
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
              Product
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
              Features
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
              Sign Up
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
              Sign In
            </RouterLink>
          </li>
        </ul>
      </template>
      <template #column-2>
        <Title tag="h3" :size="6" weight="thin">
          <span>Company</span>
        </Title>
        <ul>
          <li>
            <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
              Company
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
              About
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
              Training
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
              FAQs
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
              Contact
            </RouterLink>
          </li>
        </ul>
      </template>
      <template #column-3>
        <Title tag="h3" :size="6" weight="thin">
          <span>Support</span>
        </Title>
        <ul>
          <li>
            <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
              Help Center
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
              Guides
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
              API Docs
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
              Terms
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
              Privacy
            </RouterLink>
          </li>
        </ul>
      </template>
    </FooterC>
  </div>
</template>
