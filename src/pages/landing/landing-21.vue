<route lang="yaml">
meta:
  layout: inverted-nav
</route>

<script setup lang="ts">
import {
  speakers,
  conferenceGallery,
  conferenceSchedule,
  eventPlans,
  eventPosts,
} from '/@src/data/pages/conference'
import { customerLogos } from '/@src/data/pages/logos'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroD1 />

    <HeaderCta />

    <Section>
      <Container>
        <TimelineTitle
          title="Our Speakers"
          subtitle="Talks"
          minititle="Make your Way"
          color="primary"
          :step="1"
        >
          <template #content>
            <div class="py-6 mx-auto max-w-9">
              <div class="columns b-columns-half-tablet-p">
                <div class="column is-6">
                  <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nonne videmus quanta perturbatio rerum omnium consequatur,
                    quanta confusio? Recte, inquit, intellegis. Quod autem
                    ratione actum est, id officium appellamus.
                  </p>
                </div>
                <div class="column is-6">
                  <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nonne videmus quanta perturbatio rerum omnium consequatur,
                    quanta confusio? Recte, inquit, intellegis. Quod autem
                    ratione actum est, id officium appellamus.
                  </p>
                </div>
              </div>
            </div>
          </template>
        </TimelineTitle>

        <TeamBlockC :items="speakers" squared :limit="8" />

        <TimelineTitle
          title="Speech Highlights"
          subtitle="Schedule"
          minititle="What's waiting"
          color="primary"
          :step="2"
        >
          <template #content>
            <div class="py-6 mx-auto max-w-9">
              <div class="columns b-columns-half-tablet-p">
                <div class="column is-6">
                  <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nonne videmus quanta perturbatio rerum omnium consequatur,
                    quanta confusio? Recte, inquit, intellegis. Quod autem
                    ratione actum est, id officium appellamus.
                  </p>
                </div>
                <div class="column is-6">
                  <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nonne videmus quanta perturbatio rerum omnium consequatur,
                    quanta confusio? Recte, inquit, intellegis. Quod autem
                    ratione actum est, id officium appellamus.
                  </p>
                </div>
              </div>
            </div>
          </template>
        </TimelineTitle>

        <TabbedFeatures />
      </Container>
    </Section>

    <GalleryBlockB :items="conferenceGallery" :limit="2" />

    <Section>
      <Container>
        <TimelineTitle
          title="The Schedule"
          subtitle="Schedule"
          minititle="let's Dive In"
          color="primary"
          :step="3"
        >
          <template #content>
            <div class="py-6 mx-auto max-w-9">
              <div class="columns b-columns-half-tablet-p">
                <div class="column is-6">
                  <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nonne videmus quanta perturbatio rerum omnium consequatur,
                    quanta confusio? Recte, inquit, intellegis. Quod autem
                    ratione actum est, id officium appellamus.
                  </p>
                </div>
                <div class="column is-6">
                  <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nonne videmus quanta perturbatio rerum omnium consequatur,
                    quanta confusio? Recte, inquit, intellegis. Quod autem
                    ratione actum est, id officium appellamus.
                  </p>
                </div>
              </div>
            </div>
          </template>
        </TimelineTitle>

        <EventSchedule :schedule="conferenceSchedule" />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <TimelineTitle
          title="Get your Tickets"
          subtitle="Tickets"
          minititle="How to Attend"
          color="primary"
          :step="4"
        >
          <template #content>
            <div class="py-6 mx-auto max-w-9">
              <div class="columns b-columns-half-tablet-p">
                <div class="column is-6">
                  <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nonne videmus quanta perturbatio rerum omnium consequatur,
                    quanta confusio? Recte, inquit, intellegis. Quod autem
                    ratione actum est, id officium appellamus.
                  </p>
                </div>
                <div class="column is-6">
                  <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nonne videmus quanta perturbatio rerum omnium consequatur,
                    quanta confusio? Recte, inquit, intellegis. Quod autem
                    ratione actum est, id officium appellamus.
                  </p>
                </div>
              </div>
            </div>
          </template>
        </TimelineTitle>

        <PricingCardsA
          :plans="eventPlans"
          :columns="3"
          label="Buy Ticket"
          rounded
          pulled
          polka-dots
        />
      </Container>
    </Section>

    <Section
      v-background="{
        src: 'data:image/gif;base64,replace_with_your_image',
        placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
      }"
      overlay
    >
      <Container>
        <div class="py-6">
          <CtaBlockA
            title="Don't miss this!"
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

    <Section>
      <Container>
        <TimelineTitle
          title="Latest News"
          subtitle="News"
          minititle="Stay Subscribed"
          color="primary"
          :step="5"
        >
          <template #content>
            <div class="py-6 mx-auto max-w-9">
              <div class="columns b-columns-half-tablet-p">
                <div class="column is-6">
                  <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nonne videmus quanta perturbatio rerum omnium consequatur,
                    quanta confusio? Recte, inquit, intellegis. Quod autem
                    ratione actum est, id officium appellamus.
                  </p>
                </div>
                <div class="column is-6">
                  <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nonne videmus quanta perturbatio rerum omnium consequatur,
                    quanta confusio? Recte, inquit, intellegis. Quod autem
                    ratione actum est, id officium appellamus.
                  </p>
                </div>
              </div>
            </div>
          </template>
        </TimelineTitle>

        <BlogGrid :posts="eventPosts" :limit="3" upside-down />
      </Container>
    </Section>

    <Section>
      <template #background>
        <SectionMap light />
      </template>
      <Container>
        <CompanyGrid
          title="Big thanks to our sponsors"
          :logos="customerLogos"
          :limit="20"
        />
      </Container>
    </Section>

    <VenueSection
      weekdays="Friday, Saturday, Sunday"
      time="May 10, 11, 12, 8am - 7pm"
      place="Pullman Palace Hotel"
      address="253, Long Beach Avenue, CA"
      background-image="data:image/gif;base64,replace_with_your_image"
      :lng="-118.18105703617726"
      :lat="33.768228572042894"
      :zoom="8"
    />

    <FooterD
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones."
      color="default"
      :social-links="socialLinks"
    />
  </div>
</template>
