<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import { starterTemplates } from '/@src/data/pages/development'
import { techLogos, customerLogos } from '/@src/data/pages/logos'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroT1 />

    <Section>
      <Container>
        <TimelineTitle
          title="Start with the crafting"
          subtitle="Craft"
          minititle="Explore our Way"
          color="secondary"
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

        <DevWindows />

        <TimelineTitle
          title="Build your Application"
          subtitle="Build"
          minititle="Works with many frameworks"
          color="primary"
          :step="2"
        >
          <template #subheading>
            <div class="is-flex is-justify-content-center py-4">
              <AvatarGroup :avatars="techLogos" :limit="5" boxed />
            </div>
          </template>
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

        <Timeline />

        <TimelineTitle
          title="Start the Show"
          subtitle="Start"
          color="accent"
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

        <GlobeStats />

        <TimelineTitle
          title="Explore our Way"
          subtitle="Explore"
          minititle="Start your Journey"
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

        <DualBoxes :templates="starterTemplates" />
      </Container>
    </Section>

    <Section>
      <template #background>
        <SectionMap light />
      </template>
      <Container>
        <CompanyGrid
          title="We help people work faster at"
          :logos="customerLogos"
          :limit="20"
        />
      </Container>
    </Section>

    <FooterD
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones."
      color="default"
      :social-links="socialLinks"
    />
  </div>
</template>
