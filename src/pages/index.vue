<route lang="yaml">
meta:
  layout: demo
  transition: fade-slow
</route>

<script setup lang="ts">
import {
  productStacks,
  vulkFeatures,
  vulkExperience,
  vulkBenefits,
  componentFeatures,
} from '/@src/data/demo'
</script>

<template>
  <div>
    <HeroF />

    <Section wave="wave-1">
      <Container>
        <ContentBlockB
          :title="productStacks.title"
          :subtitle="productStacks.subtitle"
          :text="productStacks.text"
          :images="productStacks.images"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="All you need to build your project is there"
          subtitle="Amazing Features"
        />

        <BoxedFeatures :features="vulkFeatures" />

        <ButtonsCta title="Buy Vulk" subtitle="Available on Envato Market">
          <Button
            color="primary"
            href="https://themeforest.net/user/cssninjastudio/portfolio"
            :long="2"
            raised
          >
            <span>Buy Now</span>
          </Button>
          <a href="https://support.cssninja.io" class="button second-button">
            Chat with us
          </a>
        </ButtonsCta>
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="Build a professional website"
          subtitle="Developer Experience"
        />

        <FeatureBlockB
          size="small"
          :features="vulkExperience"
          :columns="3"
          :limit="8"
        />
      </Container>
    </Section>

    <Section wave="wave-1">
      <Container>
        <SectionTitle
          title="Get Started with Vulk"
          subtitle="Quickstart Tutorial"
        />
        <Buttons alignment="centered" class="py-5">
          <Button
            href="https://go.cssninja.io/discord"
            color="primary"
            :long="2"
            icon-left="fa-brands:discord"
            raised
          >
            <span>Discord Access</span>
          </Button>
          <Popover custom spacing="medium" arrow hover>
            <template #popover>
              <IconPopover
                icon="codicon:github-alt"
                color="purple"
                heading="GitHub access"
                content="Send us your GitHub username at https://support.cssninja.io"
              />
            </template>
            <Button :long="2" icon-left="fa-brands:github" raised>
              <span>GitHub Access</span>
            </Button>
          </Popover>
        </Buttons>
        <div class="video-player-container-wrapper pb-6">
          <!--Player
            ratio="16by9"
            source="https://www.youtube.com/embed/obX0KgqZnYs?modestbranding=1&rel=0&showinfo=0"
            title="Vulk | Overview & Quickstart"
            embed
          /-->
          <Player
            ratio="16by9"
            source="/assets/video/meeting.mp4"
            poster="/assets/screenshots/vulk-yt-cover.png"
            title="video title"
          />
        </div>
      </Container>
    </Section>

    <Section id="template-demos" color="grey">
      <Container>
        <SectionTitle title="Beautiful demo pages" subtitle="Premium Designs" />

        <DemoList />
      </Container>
    </Section>

    <Section wave="wave-1">
      <Container>
        <SectionTitle
          title="Vulk is a Top-Tier product"
          subtitle="Carefully Handcrafted"
        />

        <DemoFeatures :features="vulkBenefits" />
      </Container>
    </Section>

    <Section id="template-components" color="grey">
      <Container>
        <SectionTitle
          title="Explore the Component Library"
          subtitle="Reusable Components"
        />

        <FeatureBlockH :features="componentFeatures" :limit="3" />

        <Buttons alignment="centered">
          <Button color="primary" to="blocks" :long="3" raised>
            <span>All Components</span>
          </Button>
        </Buttons>

        <DemoComponents />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="3 Reasons to choose Vulk"
          subtitle="You'll love this product"
        />

        <DemoChoice />
      </Container>
    </Section>

    <DemoFooter />
  </div>
</template>
