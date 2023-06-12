<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import { plans } from '/@src/data/blocks/advanced/pricing'
import { footer } from '/@src/data/footer'

onMounted(() => {
  document.body.classList.add('pricing-container')
})

onUnmounted(() => {
  document.body.classList.remove('pricing-container')
})
</script>

<template>
  <div>
    <Section overflown>
      <Container>
        <PageTitle
          title="Simple, Comprehensive Pricing"
          subtitle="Get started with one of our plans"
          text="Improve the way your work, discover a brand new tool and drop the hassle once and for all."
        />

        <PricingSection :plans="plans" />
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
            cta="Read success stories"
            inverted
            to="index"
          />
        </CaseStudy>
      </Container>
    </Section>
    <Section class="pb-12">
      <Container>
        <LogoSection
          title="WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500"
          :logos="customerLogos"
        />
        <div class="mb-12"></div>
      </Container>
    </Section>
    <!--Footer-->
    <Footer :content="footer" color="dark" />
  </div>
</template>

<style lang="scss" scoped>
:global(body) {
  overflow: initial;
}
</style>
